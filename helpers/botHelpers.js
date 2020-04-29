module.exports = {
	isPrivatChat(msg) {
		return msg.chat.type === 'private' ? true : false;
	},
};
