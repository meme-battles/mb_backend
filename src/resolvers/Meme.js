function postedBy(parent, args, context) {
	return context.prisma.meme({id: parent.id}).postedBy();
}

module.exports = {
	postedBy
};
