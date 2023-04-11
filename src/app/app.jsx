import {
  Alert,
  AlertIcon,
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  Heading,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';

export function App() {
  const [items, setItems] = useState([
    { store: 'ALDO Store 1', model: 'ADIDAS', inventory: 13 },
    { store: 'ALDO Store 2', model: 'NIKE', inventory: 29 },
    { store: 'ALDO Store 3', model: 'PUMA', inventory: 2 },
  ]);

  const renderInventoryAlert = ({ inventory, model }) => {
    switch (true) {
      case inventory < 10: {
        return (
          <Alert status="error">
            <AlertIcon />
            You're almost out of stock for <strong>{model}</strong>
          </Alert>
        );
      }
      case inventory < 20:
        return (
          <Alert status="warning">
            <AlertIcon />
            Your inventory is runnin low for <strong>{model}</strong>
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
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} direction={['column']} spacing="4">
            {items.map((item) => (
              <Box key={item.store.replace(' ', '-')}>
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
