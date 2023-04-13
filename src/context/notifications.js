import { createContext, useContext, useEffect, useRef, useState } from 'react';

/**
 * Create the context
 */
export const NotificationsContext = createContext({});

/**
 * Create the provider with an empty array as initial value
 */
export const NotificationsProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const [notificationsPaused, setNotificationsPaused] = useState(false);
  const ws = useRef(null);

  // subscribe to the websocket
  useEffect(() => {
    ws.current = new WebSocket('ws://localhost:8080/');
    ws.current.onopen = () => console.log('ws: connection opened');
    ws.current.onclose = () => console.log('ws: connection closed');

    const wsCurrent = ws.current;

    return () => {
      wsCurrent.close();
    };
  }, []);

  // update notifications and handle pause
  useEffect(() => {
    if (!ws.current) return;

    ws.current.onmessage = (e) => {
      // if it's paused we stop the execution
      if (notificationsPaused) return;

      const data = JSON.parse(e.data);

      setNotifications((notifications) => [data, ...notifications]);
    };
  }, [notificationsPaused, notifications]);

  return (
    <NotificationsContext.Provider
      value={{
        notifications,
        notificationsPaused,
        setNotifications,
        setNotificationsPaused,
      }}
    >
      {children}
    </NotificationsContext.Provider>
  );
};

export const useNotificationsContext = () => {
  const {
    notifications,
    notificationsPaused,
    setNotifications,
    setNotificationsPaused,
  } = useContext(NotificationsContext);

  return {
    notifications,
    notificationsPaused,
    setNotifications,
    setNotificationsPaused,
  };
};
