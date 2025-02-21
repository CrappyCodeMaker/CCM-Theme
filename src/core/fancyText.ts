/**
 * @description Utility class for formatting text with ANSI color codes.
 *
 * Each static method wraps the provided text (or number, which is converted to a string)
 * with a specific ANSI color (or background) or applies a text style (bold or italic)
 * and appends the reset code at the end.
 *
 * @example
 * // Usage example:
 * import { FancyText } from './fancyText';
 * const { red, blueBG, bold, italic } = FancyText;
 * console.log(red('Error occurred'));
 * console.log(blueBG('Info message'));
 * console.log(bold('This is bold text'));
 * console.log(italic('This is italic text'));
 * // You can also pass numbers:
 * console.log(red(12345));
 */
export class FancyText {
	static readonly nodeColorsMap: { [key: string]: string } = {
		// Reset
		reset: '\x1b[0m',

		// Foreground colors
		black: '\x1b[30m',
		red: '\x1b[31m',
		green: '\x1b[32m',
		yellow: '\x1b[33m',
		blue: '\x1b[34m',
		magenta: '\x1b[35m',
		cyan: '\x1b[36m',
		white: '\x1b[37m',
		dim: '\x1b[2m',

		// Background colors
		blackBG: '\x1b[40m',
		redBG: '\x1b[41m',
		greenBG: '\x1b[42m',
		yellowBG: '\x1b[43m',
		blueBG: '\x1b[44m',
		magentaBG: '\x1b[45m',
		cyanBG: '\x1b[46m',
		whiteBG: '\x1b[47m',
	};

	static reset: string = FancyText.nodeColorsMap.reset;

	// Foreground color methods
	static black(text: string | number): string {
		return FancyText.nodeColorsMap.black + String(text) + FancyText.nodeColorsMap.reset;
	}
	static red(text: string | number): string {
		return FancyText.nodeColorsMap.red + String(text) + FancyText.nodeColorsMap.reset;
	}
	static green(text: string | number): string {
		return FancyText.nodeColorsMap.green + String(text) + FancyText.nodeColorsMap.reset;
	}
	static yellow(text: string | number): string {
		return FancyText.nodeColorsMap.yellow + String(text) + FancyText.nodeColorsMap.reset;
	}
	static blue(text: string | number): string {
		return FancyText.nodeColorsMap.blue + String(text) + FancyText.nodeColorsMap.reset;
	}
	static magenta(text: string | number): string {
		return FancyText.nodeColorsMap.magenta + String(text) + FancyText.nodeColorsMap.reset;
	}
	static cyan(text: string | number): string {
		return FancyText.nodeColorsMap.cyan + String(text) + FancyText.nodeColorsMap.reset;
	}
	static white(text: string | number): string {
		return FancyText.nodeColorsMap.white + String(text) + FancyText.nodeColorsMap.reset;
	}
	static dim(text: string | number): string {
		return FancyText.nodeColorsMap.dim + String(text) + FancyText.nodeColorsMap.reset;
	}

	// Background color methods
	static blackBG(text: string | number): string {
		return FancyText.nodeColorsMap.blackBG + String(text) + FancyText.nodeColorsMap.reset;
	}
	static redBG(text: string | number): string {
		return FancyText.nodeColorsMap.redBG + String(text) + FancyText.nodeColorsMap.reset;
	}
	static greenBG(text: string | number): string {
		return FancyText.nodeColorsMap.greenBG + String(text) + FancyText.nodeColorsMap.reset;
	}
	static yellowBG(text: string | number): string {
		return FancyText.nodeColorsMap.yellowBG + String(text) + FancyText.nodeColorsMap.reset;
	}
	static blueBG(text: string | number): string {
		return FancyText.nodeColorsMap.blueBG + String(text) + FancyText.nodeColorsMap.reset;
	}
	static magentaBG(text: string | number): string {
		return FancyText.nodeColorsMap.magentaBG + String(text) + FancyText.nodeColorsMap.reset;
	}
	static cyanBG(text: string | number): string {
		return FancyText.nodeColorsMap.cyanBG + String(text) + FancyText.nodeColorsMap.reset;
	}
	static whiteBG(text: string | number): string {
		return FancyText.nodeColorsMap.whiteBG + String(text) + FancyText.nodeColorsMap.reset;
	}

	/**
	 * Formats the given text in bold using ANSI escape codes.
	 *
	 * @param text - The text or number to format in bold.
	 * @returns The bold formatted text.
	 */
	static bold(text: string | number): string {
		const boldCode = '\x1b[1m';
		return boldCode + String(text) + FancyText.nodeColorsMap.reset;
	}

	/**
	 * Formats the given text in italic using ANSI escape codes.
	 *
	 * @param text - The text or number to format in italic.
	 * @returns The italic formatted text.
	 */
	static italic(text: string | number): string {
		const italicCode = '\x1b[3m';
		return italicCode + String(text) + FancyText.nodeColorsMap.reset;
	}
}
