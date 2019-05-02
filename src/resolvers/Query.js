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
	const id = getUserId(context);

	let count = args.count;

	if (!count)
		count = 1;

	const memes = await context.prisma.memes({
		where: {
			likedBy_none: {
				id
			}
		}
	});

	/*

		Best way to do this would be with this SQL query, but idk how to do this with prisma

		SELECT * FROM Memes
		ORDER BY RANDOM()
		LIMIT 10

	*/

	const index = Math.random() * memes.length;

	return memes.slice(index - count, count);
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
