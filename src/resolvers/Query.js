const {getUserId} = require('../auth');

const me = async (parent, args, context, info) => {
	const id = getUserId(context);
	return await context.prisma.user({id});
};

const meme = async (parent, args, context, info) => {
	return await context.prisma.meme({id: args.id});
};

const myMemes = async (parent, args, context, info) => {
	const id = getUserId(context);
	return await context.prisma.memes({where: {postedBy: {id}}});
};

const randomMeme = async (parent, args, context, info) => {
	const memes = await context.prisma.memes();
	return memes[Math.floor(Math.random() * memes.length)];
};

const top10Users = async (parent, args, context, info) => {
	const top10Fragment = `
		fragment UserWithMemes on User {
			name
			memes {
				cumulative
			}
		}
	`;
	const users = await context.prisma.users().$fragment(top10Fragment);
	return users
		.map(u => ({
			name: u.name,
			score: u.memes.reduce((r, i) => r + i.cumulative, 0)
		}))
		.sort((a, b) => a.score - b.score)
		.slice(0, 10)
		.reverse();
};

module.exports = {
	meme,
	myMemes,
	me,
	randomMeme,
	top10Users
};
