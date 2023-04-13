# ShoeStore

This is a playground that uses a WebSocket to get notifications about the latest sales of a shoe store. A notifications stack was made to give real-time updates to the users.

## NX

This project was created using [Nx](https://nx.dev). An incredible tool that helps to create and escalate single or big applications. This is a React Standalone app, but it can easily turn into a mono repo if necessary.

## Installing everything

Okay, let's get the party started.

First of all, you shall clone this repository, or download a .ZIP copy of it.

`git clone git@github.com:jeanfs/shoe-store.git`

Please make sure to run the below commands in that order.

| Command            | Why?                                                                                                  |
| ------------------ | ----------------------------------------------------------------------------------------------------- |
| `npm install`      | Yes! It'll install all the dependencies needed to run this project. (run from the repository's root!) |
| `npm run ws`       | This will start the WebSocket server to get updates about our esteemed inventory                      |
| `npm run start`    | This will serve the front-end app at [http://localhost:4200/](http://localhost:4200/).                |
| <img width=200/ /> | _<--- easter egg_                                                                                     |

⚠️ For `ws` and `start` commands you'll need a dedicated terminal window.
