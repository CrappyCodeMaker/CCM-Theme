// 👉 Get SET colors for manual UI testing
import { promises as fs } from 'fs';
import { flattenOptimizedTheme, ANSIcolors } from '../../src/colors';
import { tokenCustomizations, workbenchCustomizations } from '../../src/customizations';
import { HELLO, GOODBYE, settingsFile, vscodeDir, shortPathToVscodeSettings } from '../test-constants';

const { green, greenBG, yellow, yellowBG, redBG, blackBG, reset } = ANSIcolors;

const themeColors = {
	'workbench.colorCustomizations': flattenOptimizedTheme(workbenchCustomizations),
	'editor.tokenColorCustomizations': { textMateRules: tokenCustomizations },
};

const displayPath = shortPathToVscodeSettings(settingsFile);

console.log(HELLO);
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
