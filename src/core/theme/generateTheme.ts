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

export const generateTheme = ({ name, type }: ThemeContext) => {
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

	console.log(`2. Attempting to write theme at: ${displayPath}\n`);

	fs.mkdir(basePath, { recursive: true })
		.then(() => Promise.all([fs.writeFile(path, JSON.stringify(publicTheme, null, 2))]))
		.then(() => console.log(`${bold(greenBG(' Success: '))} ${green('Theme was successfully created!')}\n`))
		.then(() => console.log(GOODBYE))
		.catch((error: Error) => {
			console.log(`${bold(redBG(' Error: '))} ${red(error?.message)}\n`);
			process.exit(1);
		});
};
