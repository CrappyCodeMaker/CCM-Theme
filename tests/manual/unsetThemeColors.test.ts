// 👉 Get UNSET colors for manual UI testing
import { promises as fs } from 'fs';
import { ANSIcolors } from '../../src/colors';
import { resolveWorkbenchTokens } from '../../src/resolvers';
import { workbenchCustomizations } from '../../src/customizations';
import { GOODBYE, HELLO, settingsFile, shortPathToVscodeSettings, vscodeDir } from '../test-constants';

const { green, greenBG, yellow, yellowBG, redBG, blackBG, reset } = ANSIcolors;

const unsetThemeColors = {
	'workbench.colorCustomizations': resolveWorkbenchTokens(workbenchCustomizations as any, true),
	'editor.tokenColorCustomizations': { textMateRules: [] },
};

const displayPath = shortPathToVscodeSettings(settingsFile);

console.log(HELLO);
console.log(`> ${yellow}Writing ${yellowBG} UNSET COLORS ${reset}${yellow} settings to:${reset} ${blackBG}${displayPath}${reset}`);

fs.mkdir(vscodeDir, { recursive: true })
	.then(() => fs.writeFile(settingsFile, JSON.stringify(unsetThemeColors, null, 2)))
	.then(() => {
		console.log(`> ${green}File written ${reset}${greenBG} successfully ${reset}`);
		console.log(GOODBYE);
	})
	.catch((error: Error) => {
		console.warn(`${redBG}ERROR: ${reset}`, error.message);
		process.exit(1);
	});
