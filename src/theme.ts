import { promises as fs } from 'fs';
import { ANSIcolors } from './colors';
import { tokenCustomizations, workbenchCustomizations } from './customizations';
import { resolveSyntaxTokens, resolveWorkbenchTokens } from './resolvers';

// #region Theme Type

type ThemeContext = { name: string; type: 'dark' | 'light' };
type ThemeType = ThemeContext['type'];

let themeType: ThemeType = 'dark';

export const setThemeType = (type: ThemeType) => (themeType = type);
export const getThemeType = () => themeType;

// #endregion Theme Type

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

export const getTheme = ({ name, type }: ThemeContext) => {
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
