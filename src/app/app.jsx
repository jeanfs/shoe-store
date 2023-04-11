import {
  Alert,
  AlertIcon,
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Select,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNotificationsContext } from '../context/notifications';

export function App() {
  const { notifications } = useNotificationsContext();
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
    <Container>
      <Card>
        <CardHeader>
          <Heading size="md">Latest Sales</Heading>
          <FormControl>
            <FormLabel>Amount to show</FormLabel>
            <Select onChange={(e) => setLimit(e.target.value)}>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </Select>
          </FormControl>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} direction={['column']} spacing="4">
            {notifications.slice(0, limit)?.map((item, index) => (
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
            ))}
          </Stack>
        </CardBody>
      </Card>
    </Container>
  );
}

export default App;
