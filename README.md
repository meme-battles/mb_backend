# Backend

Welcome to the backend Repo. Perhaps when this file gets long enough, we will
add an index here.

## Packages

Presently the packages we are using:

-   "bcryptjs": "^2.4.3",
-   "graphql-yoga": "^1.17.4",
-   "jsonwebtoken": "^8.5.1",
-   "prisma-client-lib": "^1.31.1"
-   "dotenv": "^7.0.0",
-   "nodemon": "1.18.11",
-   "prisma": "1.31.1"

## Database creation/deployment

We are using Prisma and SDL to deploy the database.

The database schema is located in `/datamodel.prisma` The Prisma deployment
information is located in `prisma.yml`

Here are the directions for building the Database deployed to a server from
scratch:

1. Get an account at (app.prisma.io)[app.prisma.io]
1. In terminal type:

    `yarn global add prisma`

1. `cd` into your root folder
1. In terminal type:

    `prisma init`

1. Select `demo server + MySQL database` (or if you already have a database use
   that, but we were not successful that way)
1. You should then be asked to authenticate the deployment
1. Choose your region
1. Choose a name for your service (this will be displayed on app.prisma.io)
1. Choose a name for your stage (dev, deploy, etc)
1. Select programing language (we did either JavaScript or TypeScript)
1. Two files are then created: prisma.yml and datamodel.prisma (the yml is kinda
   like the package.json and datamodel is the litteral database schkema)
1. To deploy, in terminal type:

    `prisma deploy`

1. Form here on out, you can edit datamodel.prisma and then run `prisma deploy`
   as if those were migrations. Editing datamodel IS editing the db skema.
1. To see your graphQL query structure and playground head over to the the HTTP
   address provided after the succefful deploy
1. Enjoy!

## Server

We are using the graphql-yoga server (so, its basically a node/express server)

You will need the correct .env variables to run a local deploy

1. git clone
1. navigate into the root folder
1. yarn init (i think??? -- just get all the packages)
1. from root run: `yarn nodemon`
1. navigate to `http://localhost:4000`

Basic work flow is:

`datamodel.prisma` -- is the database definitions

`src/generated/` -- is the actual defined and deployed gql fetchable db

`index.js` -- is the server lay on top of the prisma deploy

`src/schema.graphql` -- is the public/protected rout/schema definitions

`src/auth.js` -- is the authentication/protecting routs layer

`src/resolvers` -- is where all the fun happens

To edit or define a new rout or user action, play close attention to
`src/generated/index.d.ts`. This is where prisma resolves everything you do
against what it has created.

## User Stories

#### Account admin:

##### Mutations:

-   As a user I can sign up
-   As a user I can log in
-   As a user I can log out
-   As a user I can change my profile information

##### Querries

-   As a user I can view my profile information
-   As a user I can see the top ranked users by cumulative meme score

#### Playing the game:

##### Querries

-   As a user I can view my memes
-   As a user I can randomly see a random meme

##### Mutations

-   As a user I can create a meme
-   As a user I can delete one of my memes
-   As a user I can like a meme
-   As a user I can unlike a meme
-   As a user I can judge a meme battle
