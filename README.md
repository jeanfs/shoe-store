# ShoeStore

This is a playground that uses a websocket to get notifications about the latest sales of a shoe store. A notifications stack was made give real time updates to the users.

## NX

This project was created using [Nx](https://nx.dev). An incredible tool that helps to create and escalate single or big applications. Initially this project is a React standalone, but it can easily turn into a monorepo if necessary.

## Installing everything

Okay, let's get the party started.
Please make sure to run the below commands on that order (I'll explain what they do in a bit). Oh, and maybe you're gonna need different terminal windows, there's the websocket server and the application itself to run.

| Command             | Why?                                                                                                  |
| ------------------- | ----------------------------------------------------------------------------------------------------- |
| `npm install`       | Yes! It'll install all the dependencies needed to run this project. (run from the repository's root!) |
| `npm run websocket` | This will start the WebSocket server to get updates about our esteemed inventory                      |
| `npx nx serve`      | This will serve the front-end app at [http://localhost:4200/](http://localhost:4200/).                |
| <img width=200/ />  | _<--- easter egg_                                                                                     |
