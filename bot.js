const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

const { isPrivatChat } = require('./helpers/botHelpers');
const { sampleKeyboard } = require('./keyboards/keyboards');

module.exports = () => {
	// Bot check
	bot.onText(/\/ping/, (msg) => {
		bot.sendMessage(msg.chat.id, `Hello World`);
	});

	// Private chat check
	bot.onText(/\/start/, (msg) => {
		if (isPrivatChat(msg)) {
			bot.sendMessage(msg.from.id, 'Hello!', {
				reply_markup: sampleKeyboard,
			});
		}
	});

	// Get message data
	bot.onText(/\/info/, (msg) => {
		bot.sendMessage(
			msg.chat.id,
			`Message data: ${JSON.stringify(msg, null, 2)}`
		);
	});
};
