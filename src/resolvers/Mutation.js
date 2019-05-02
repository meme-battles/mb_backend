const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {getUserId} = require('../auth');

const tokenExpiresIn = '100h';
const service = 'meme-battlr-dev';

const signup = async (parent, args, context, info) => {
	if (!/^(?=.*\d).{8,}$/.test(args.password))
		throw new Error('\nPassword must be 8 char w/ at least 1 num!\n');
	const password = await bcrypt.hash(args.password, 10);
	const user = await context.prisma.createUser({...args, password});
	const token = jwt.sign({userId: user.id, service}, process.env.APP_SECRET, {
		expiresIn: tokenExpiresIn
	});
	return {token, user};
};

const login = async (parent, args, context, info) => {
	const user = await context.prisma.user({email: args.email});
	if (!user) throw new Error('\nNo such user found\n');
	const valid = await bcrypt.compare(args.password, user.password);
	if (!valid) throw new Error('\nInvalid email or password\n');
	const token = jwt.sign({userId: user.id, service}, process.env.APP_SECRET, {
		expiresIn: tokenExpiresIn
	});
	return {token, user};
};

const updateProfile = async (parent, args, context, info) => {
	const userId = getUserId(context);
	if (args.password) args.password = await bcrypt.hash(args.password, 10);
	return await context.prisma.updateUser({
		where: {id: userId},
		data: {...args}
	});
};

const createMeme = async (parent, args, context, info) => {
	const userId = getUserId(context);
	return await context.prisma.createMeme({
		...args,
		postedBy: {connect: {id: userId}}
	});
};

const deleteMeme = async (parent, args, context, info) => {
	getUserId(context);
	console.log('\nsame errors as above I an on line 43 in Mutations.js\n');
	return await context.prisma.deleteMeme({
		id: args.id
	});
};

const likeMeme = async (parent, args, context, info) => {
	const meme = await context.prisma.meme({id: args.id});
	const userID = getUserId(context);
	return await context.prisma.updateMeme({
		where: {id: args.id},
		data: {votesUp: meme.votesUp + 1, cumulative: meme.cumulative + 1, likedBy: {
			connect: {
				id: userID
			}
		}},
	});
};

const winVsBattle = async (parent, args, context, info) => {
	const meme = await context.prisma.meme({id: args.id});
	return await context.prisma.updateMeme({
		where: {id: args.id},
		data: {
			vsBattleWins: meme.vsBattleWins + 1,
			cumulative: meme.cumulative + 1
		}
	});
};

const loseVsBattle = async (parent, args, context, info) => {
	const meme = await context.prisma.meme({id: args.id});
	return await context.prisma.updateMeme({
		where: {id: args.id},
		data: {
			vsBattleLoses: meme.vsBattleLoses + 1,
			cumulative: meme.cumulative - 1
		}
	});
};

module.exports = {
	signup,
	login,
	updateProfile,
	createMeme,
	deleteMeme,
	likeMeme,
	winVsBattle,
	loseVsBattle
};
