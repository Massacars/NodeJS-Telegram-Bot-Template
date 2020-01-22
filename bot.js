const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

module.exports = () => {
	bot.onText(/\/ping/, msg => {
		console.log('Output: msg', msg);
		const chatId = msg.chat.id;
		bot.sendMessage(chatId, `Hello World ${chatId}`);
	});

	// Modules
	// require('./%module%/private_commands')(bot);
	// require('./%module%/public_commands')(bot);
};
