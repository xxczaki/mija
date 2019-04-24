import chalk from 'chalk';

const mija = {
	warn(text: string) {
		console.log(chalk.yellow(` ⚠️  ${text}`));
	},
	error(text: string) {
		console.log(chalk.red(` ❌  ${text}`));
	},
	info(text: string) {
		console.log(chalk.cyan(` ℹ️  ${text}`));
	},
	success(text: string) {
		console.log(chalk.green(` ✅  ${text}`));
	},
	magic(text: string) {
		console.log(chalk.magenta(` 🦄  ${text}`));
	},
	inprogress(text: string) {
		console.log(chalk.blue(` ⏱️  ${text}`));
	},
	stop(text: string) {
		console.log(chalk.red(` 🚫  ${text}`));
	},
	repeat(text: string) {
		console.log(chalk.cyan(` 🔁  ${text}`));
	},
	experimental(text: string) {
		console.log(chalk.yellow(` ☢️  ${text}`));
	},
	danger(text: string) {
		console.log(chalk.gray(` ☠️  ${text}`));
	},
	custom(emoji: string, text: string) {
		console.log(` ${emoji}  ${text}`);
	}
};

module.exports = mija;
