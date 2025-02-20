// 👉 Get SET colors for manual UI testing
import { promises as fs } from 'fs';
import { ANSIcolors } from '../../src/colors';
import { GOODBYE, HELLO, settingsFile, shortPathToVscodeSettings, vscodeDir } from '../test-constants';
import { setThemeType } from '../../src/theme';
import { resolveSyntaxTokens, resolveWorkbenchTokens } from '../../src/resolvers';
import { tokenCustomizations, workbenchCustomizations } from '../../src/customizations';

const { green, greenBG, yellow, yellowBG, redBG, blackBG, reset } = ANSIcolors;

console.log(HELLO);
console.log(`> ${yellow}Creating theme tokens${reset}`);

setThemeType('dark');

const themeColors = {
	'workbench.colorCustomizations': resolveWorkbenchTokens(workbenchCustomizations),
	'editor.tokenColorCustomizations': { textMateRules: resolveSyntaxTokens(tokenCustomizations as any) },
};

const displayPath = shortPathToVscodeSettings(settingsFile);

console.log(`> ${yellow}Writing ${yellowBG} SET COLORS ${reset}${yellow} settings to:${reset} ${blackBG}${displayPath}${reset}`);

fs.mkdir(vscodeDir, { recursive: true })
	.then(() => fs.writeFile(settingsFile, JSON.stringify(themeColors, null, 2)))
	.then(() => {
		console.log(`> ${green}File written ${reset}${greenBG} successfully ${reset}`);
		console.log(GOODBYE);
	})
	.catch((error: Error) => {
		console.warn(`${redBG}ERROR: ${reset}`, error.message);
		process.exit(1);
	});
