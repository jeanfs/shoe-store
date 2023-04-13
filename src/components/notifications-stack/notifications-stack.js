import {
  Alert,
  AlertIcon,
  Card,
  CardBody,
  FormControl,
  FormLabel,
  Select,
  Stack,
  Switch,
  Tag,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNotificationsContext } from '../../context/notifications';
import { INVENTORY_LEVELS } from '../../helpers';

export function NotificationsStack() {
  const { notifications, notificationsPaused, setNotificationsPaused } =
    useNotificationsContext();
  const [limit, setLimit] = useState(5);

  const getColorScheme = (inventory) => {
    switch (true) {
      case inventory < INVENTORY_LEVELS.low:
        return 'red';
      case inventory < INVENTORY_LEVELS.medium:
        return 'orange';
      default:
        return 'green';
    }
  };

  return (
    <>
      <Stack direction={'row'} mb={'5'}>
        <FormControl>
          <Select
            w={'200px'}
            placeholder="Amount to show"
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </Select>
        </FormControl>
        <FormControl
          display={'flex'}
          alignItems={'center'}
          textAlign={'right'}
          whiteSpace={'nowrap'}
          w={'auto'}
        >
          <FormLabel htmlFor="pause-notifications" mb="0">
            Pause notifications
          </FormLabel>
          <Switch
            size={'sm'}
            colorScheme="teal"
            id="pause-notifications"
            isChecked={notificationsPaused}
            onChange={() => setNotificationsPaused(!notificationsPaused)}
          />
        </FormControl>
      </Stack>
      <Text fontSize={'xs'} textAlign={'right'} mb={'2'}>
        Showing <strong>{limit}</strong> of{' '}
        <strong>{notifications?.length}</strong> notification(s)
      </Text>
      <Stack direction={['column']} spacing="2">
        {notifications?.length ? (
          notifications.slice(0, limit)?.map((item, index) => (
            <Card
              variant={'outline'}
              key={index}
              shadow={'none'}
              size={'md'}
              borderColor={getColorScheme(item.inventory)}
            >
              <CardBody>
                <Text mb={'1'} fontWeight={'semibold'}>
                  {item.store} sold a pair of {item.model}
                </Text>
                <Tag colorScheme={getColorScheme(item.inventory)}>
                  <strong>{item.inventory} item(s)</strong>&nbsp;left.
                </Tag>
              </CardBody>
            </Card>
          ))
        ) : (
          <Alert status="warning">
            <AlertIcon />
            <Text>
              <strong>No items to display.</strong>
              <br />
              Make sure the notifications are not paused, and that the websocket
              server is running.
            </Text>
          </Alert>
        )}
      </Stack>
    </>
  );
}
export default NotificationsStack;
