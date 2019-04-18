# Backend

The backend repo

Not sure yet about getting this backend working on your local machine. However,
here arre the directions for building this from scratch.

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
