const chalk = require('chalk');

const mija = {
	warn(text) {
		console.log(chalk.yellow('', '⚠️', '', text, '\n'));
	},
	error(text) {
		console.log(chalk.red('', '❌', text, '\n'));
	},
	info(text) {
		console.log(chalk.cyan('', 'ℹ️', '', text, '\n'));
	},
	success(text) {
		console.log(chalk.green('', '✅', text, '\n'));
	},
	magic(text) {
		console.log(chalk.magenta('', '🦄', text, '\n'));
	},
	inprogress(text) {
		console.log(chalk.blue('', '⏱️', '', text, '\n'));
	},
	stop(text) {
		console.log(chalk.red('', '🚫', text, '\n'));
	},
	repeat(text) {
		console.log(chalk.cyan('', '🔁', text, '\n'));
	},
	experimental(text) {
		console.log(chalk.yellow('', '☢️', '', text, '\n'));
	},
	danger(text) {
		console.log(chalk.gray('', '☠️', '', text, '\n'));
	},
	custom(emoji, text) {
		console.log('', emoji, text, '\n');
	}
};

module.exports = mija;
