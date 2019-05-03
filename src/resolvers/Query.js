const {getUserId} = require('../auth');
const db = require('../db');

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

	const memes = await db.query(`

		SELECT * FROM "default$default"."Meme"
		ORDER BY RANDOM()
		LIMIT ${count}

	`);

	return memes.rows;

	// const memes = await context.prisma.memes({
	// 	where: {
	// 		likedBy_none: {
	// 			id
	// 		}
	// 	}
	// });
	//
	// const index = Math.random() * memes.length;
	//
	// return memes.slice(index - count, count);

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
