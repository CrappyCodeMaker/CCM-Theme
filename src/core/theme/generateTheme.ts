import { promises as fs } from 'fs';
import { tokenCustomizations, workbenchCustomizations } from '../../customizations';
import { resolveSyntaxTokens } from './resolveSyntaxTokens';
import { FancyText } from '../fancyText';
import { setThemeType, ThemeContext, ThemeType } from './themeContext';
import { resolveWorkbenchTokens } from './resolveWorkbenchTokens';
import { GOODBYE, HELLO } from './utils';

const basePath = './public/themes';

const getPath = (type: ThemeType) => {
	switch (type) {
		case 'dark':
			return `${basePath}/crappy-night-theme.json`;
		case 'light':
			return `${basePath}/crappy-daylight-theme.json`;
		default:
			return `${basePath}/ERROR.json`;
	}
};

/**
 * Asynchronously generates a theme file based on the provided context.
 *
 * The process includes:
 * 1. Logging the start message.
 * 2. Creating theme tokens.
 * 3. Writing the theme file to disk.
 * 4. Logging success messages after each step.
 *
 * @param {ThemeContext} context - An object with `name` and `type` of the theme.
 * @returns {Promise<void>} A promise that resolves once the theme is written.
 */
export const generateTheme = async ({ name, type }: ThemeContext): Promise<void> => {
	console.log(HELLO(name));

	const { red, redBG, bold, green, greenBG, blackBG, yellow } = FancyText;
	setThemeType(type);

	console.log('1. Creating theme tokens');

	const publicTheme = {
		name,
		type,
		semanticHighlighting: true,
		colors: resolveWorkbenchTokens(workbenchCustomizations),
		tokenColors: resolveSyntaxTokens(tokenCustomizations),
	};

	const path = getPath(type);
	const displayPath = blackBG(yellow(path));

	console.log(`2. Attempting to write theme at: ${displayPath}`);

	try {
		await fs.mkdir(basePath, { recursive: true });
		console.log('3. Directory created successfully\n');

		await fs.writeFile(path, JSON.stringify(publicTheme, null, 2));
		console.log(`${bold(greenBG(' Success: '))} ${green('Theme was successfully created!')}\n`);

		console.log(GOODBYE);
	} catch (error: unknown) {
		error instanceof Error
			? console.log(`${bold(redBG(' Error: '))} ${red(error.message)}\n`)
			: console.log(`${bold(redBG(' Error: '))} ${red(String(error))}\n`);

		process.exit(1);
	}
};
