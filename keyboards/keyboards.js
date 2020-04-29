const { sampleButtons } = require('./buttons');

module.exports = {
	sampleKeyboard: {
		keyboard: [
			[sampleButtons.buttonOne, sampleButtons.buttonTwo],
			[sampleButtons.buttonThree, sampleButtons.buttonFour],
		],
		resize_keyboard: true,
	},
};
