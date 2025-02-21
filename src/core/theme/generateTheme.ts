import { promises as fs } from 'fs';
import { tokenCustomizations, workbenchCustomizations } from '../../customizations';
import { resolveSyntaxTokens } from './resolveSyntaxTokens';
import { FancyText } from '../fancyText';
import { setThemeType, ThemeContext, ThemeType } from './themeContext';
import { resolveWorkbenchTokens } from './resolveWorkbenchTokens';

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
	setThemeType(type);
	const { red, redBG, bold, green, greenBG } = FancyText;
	const publicTheme = {
		name,
		type,
		semanticHighlighting: true,
		colors: resolveWorkbenchTokens(workbenchCustomizations),
		tokenColors: resolveSyntaxTokens(tokenCustomizations),
	};

	fs.mkdir(basePath, { recursive: true })
		.then(() => Promise.all([fs.writeFile(getPath(type), JSON.stringify(publicTheme, null, 2))]))
		.then(() => console.log(`${bold(greenBG(' Success: '))} ${green(`Theme "${bold(name)}" was successfully created`)}\n`))
		.catch((error: Error) => {
			console.log(`${bold(redBG(' Error: '))} ${red(error?.message)}`);
			process.exit(1);
		});
};
