import { promises as fs } from 'fs';
import { tokenCustomizations, workbenchCustomizations } from '../customizations';
import { resolveSyntaxTokens, resolveWorkbenchTokens } from './resolvers';
import { ThemeContext, ThemeType } from './themeContext';
import { getNotification } from '../notifications';

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
	const publicTheme = {
		name,
		type,
		semanticHighlighting: true,
		colors: resolveWorkbenchTokens(workbenchCustomizations),
		tokenColors: resolveSyntaxTokens(tokenCustomizations),
	};

	fs.mkdir(basePath, { recursive: true })
		.then(() => Promise.all([fs.writeFile(getPath(type), JSON.stringify(publicTheme, null, 2))]))
		.then(() => console.log(getNotification('success', `Theme "${name}" successfully created\n`)))
		.catch((error: Error) => {
			console.log(getNotification('error', error?.message));
			process.exit(1);
		});
};
