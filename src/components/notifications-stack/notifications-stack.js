import {
  Alert,
  AlertIcon,
  Box,
  Card,
  CardBody,
  FormControl,
  FormLabel,
  Heading,
  Select,
  Stack,
  StackDivider,
  Switch,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNotificationsContext } from '../../context/notifications';

export function NotificationsStack() {
  const { notifications, notificationsPaused, setNotificationsPaused } =
    useNotificationsContext();
  const [limit, setLimit] = useState(5);

  const renderInventoryAlert = ({ inventory, model }) => {
    switch (true) {
      case inventory < 10: {
        return (
          <Alert status="error">
            <AlertIcon />
            <Text>
              You're almost out of stock for <strong>{model}</strong>
            </Text>
          </Alert>
        );
      }
      case inventory < 20:
        return (
          <Alert status="warning">
            <AlertIcon />
            <Text>
              Your inventory is runnin low for <strong>{model}</strong>
            </Text>
          </Alert>
        );

      default:
        return null;
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
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="pause-notifications" mb="0">
            Pause notifications
          </FormLabel>
          <Switch
            colorScheme="teal"
            id="pause-notifications"
            isChecked={notificationsPaused}
            onChange={() => setNotificationsPaused(!notificationsPaused)}
          />
        </FormControl>
      </Stack>
      <Card>
        <CardBody>
          <Stack divider={<StackDivider />} direction={['column']} spacing="4">
            {notifications.length ? (
              notifications.slice(0, limit)?.map((item, index) => (
                <Box key={index}>
                  <Box mb="2">
                    <Heading size="xs" textTransform="uppercase">
                      {item.store}
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      {item.model}
                      {' - '}
                      {item.inventory}
                    </Text>
                  </Box>
                  {renderInventoryAlert(item)}
                </Box>
              ))
            ) : (
              <Alert status="warning">
                <AlertIcon />
                <Text>
                  <strong>No items to display.</strong>
                  <br />
                  Make sure the notifications are not paused, and that the
                  websocket server is running.
                </Text>
              </Alert>
            )}
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}
export default NotificationsStack;
