import { promises as fs } from 'fs';
import { ANSIcolors } from '../colors';
import { tokenCustomizations, workbenchCustomizations } from '../customizations';
import { resolveSyntaxTokens, resolveWorkbenchTokens } from './resolvers';
import { setThemeType, ThemeContext } from './themeContext';

const getPath = (name: string) => {
	const base = './public/themes/';

	switch (name) {
		case 'Crappy Night':
			return `${base}crappy-night-theme.json`;
		case 'Crappy Daylight':
			return `${base}crappy-daylight-theme.json`;
		default:
			return `${base}ERROR.json`;
	}
};

export const generateTheme = ({ name, type }: ThemeContext) => {
	setThemeType(type);

	const publicTheme = {
		name,
		type,
		semanticHighlighting: true,
		colors: resolveWorkbenchTokens(workbenchCustomizations),
		tokenColors: resolveSyntaxTokens(tokenCustomizations),
	};

	fs.mkdir('./public/themes', { recursive: true })
		.then(() => Promise.all([fs.writeFile(getPath(name), JSON.stringify(publicTheme, null, 2))]))
		.then(() => console.log(`${ANSIcolors.green}Theme "${name}" successfully written.${ANSIcolors.reset} `))
		.catch((error: Error) => {
			console.warn('ERROR:', error);
			process.exit(1);
		});
};
