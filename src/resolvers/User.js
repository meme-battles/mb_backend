function memes(parent, args, context) {
	return context.prisma.user({id: parent.id}).memes();
}

module.exports = {
	memes
};
