import { ThemeState, ThemeType } from './core/theme/themeState';
import {
	parseCLIArgs,
	generateAllThemes,
	generateSingleTheme,
	runTestColors,
	runThemeGeneration,
	FancyText,
	HELLO,
	GOODBYE,
	ERROR_HEADER,
} from './core';

const { generateDark, generateLight, generateBoth, testMode, testUnsetMode } = parseCLIArgs();

export const themeContextManager = new ThemeState();
themeContextManager.setTestUnsetMode(testUnsetMode);

console.log(HELLO);

const { red } = FancyText;
const themes = new Map<string, any>();

if (generateDark) generateSingleTheme('dark' as ThemeType, themes);
if (generateLight) generateSingleTheme('light' as ThemeType, themes);
if (generateBoth) generateAllThemes(themes);

if (!testMode) {
	runThemeGeneration(themes)
		.then(() => console.log(GOODBYE))
		.catch((error: Error) => {
			console.log(`${ERROR_HEADER} ${red(error?.message)}\n`);
			process.exit();
		});
} else {
	const type = generateDark ? 'dark' : generateLight ? 'light' : 'dark';

	runTestColors(type, testUnsetMode, themes)
		.then(() => console.log(GOODBYE))
		.catch((error: Error) => {
			console.log(`${ERROR_HEADER} ${red(error?.message)}\n`);
			process.exit();
		});
}
