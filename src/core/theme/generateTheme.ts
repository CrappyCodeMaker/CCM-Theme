import { tokenCustomizations, workbenchCustomizations } from '../../customizations';
import { resolveSyntaxTokens } from './resolveSyntaxTokens';
import { ThemeDescriptor } from './themeState';
import { resolveWorkbenchTokens } from './resolveWorkbenchTokens';
import { themeContextManager } from '../..';
import { DONE, START } from '../cli';

export const generateTheme = ({ name, type }: ThemeDescriptor) => {
	console.log(START(name));
	themeContextManager.setThemeType(type);

	const theme = {
		name,
		type,
		semanticHighlighting: true,
		colors: resolveWorkbenchTokens(workbenchCustomizations, themeContextManager.getTestUnsetMode()),
		tokenColors: resolveSyntaxTokens(tokenCustomizations),
	};

	console.log(DONE);

	return theme;
};
