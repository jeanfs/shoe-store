import { Container, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import { Team } from '../../assets';
import { NotificationsStack } from '../../components';

export function Home() {
  return (
    <Container maxW={'6xl'} mt={'77'}>
      <Grid
        templateAreas={`"header header"
                        "nav main"`}
        gridTemplateRows={'200px auto'}
        gridTemplateColumns={'50% 1fr'}
        gap={'8'}
      >
        {/**
         * Header
         */}
        <GridItem area={'header'}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
          >
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'red.400',
                zIndex: -1,
              }}
            >
              Hey you,
            </Text>
            <br />
            <Text as={'span'} color={'red.400'}>
              Check our inventory updates!
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            This is a real time notifications stack, feel free to change the
            configurations below to make it easier for you to follow the sales
            reports.
          </Text>
        </GridItem>

        {/**
         * Illustration
         */}
        <GridItem area={'nav'}>
          <Team />
        </GridItem>

        {/**
         * Notifications
         */}
        <GridItem area={'main'}>
          <NotificationsStack />
        </GridItem>
      </Grid>
    </Container>
  );
}
export default Home;
