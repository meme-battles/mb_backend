require('dotenv').config();
const port = process.env.PORT || 4000;
const {GraphQLServer} = require('graphql-yoga');
const {prisma} = require('./src/generated/prisma-client');
const db = require('./src/db');
const Query = require('./src/resolvers/Query');
const Mutation = require('./src/resolvers/Mutation');
const User = require('./src/resolvers/User');
const Meme = require('./src/resolvers/Meme');

const resolvers = {
	Query,
	Mutation,
	User,
	Meme
};

const server = new GraphQLServer({
	typeDefs: 'src/schema.graphql',
	resolvers,
	context: request => ({...request, prisma})
});

const startServer = async () => {
	console.log("firing up...");
	await db.connect();
	server.start(port, () =>
		console.log(`\n\n Server is running on http://localhost:${port} \n\n`)
	);

}

startServer();
