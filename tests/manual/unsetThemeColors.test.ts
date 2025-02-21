// 👉 Get UNSET colors for manual UI testing
import { promises as fs } from 'fs';
import { displayPath, GOODBYE, HELLO, settingsFile, vscodeDir } from './utils';
import { workbenchCustomizations } from '../../src/customizations';
import { resolveWorkbenchTokens, FancyText } from '../../src/core';

const { red, redBG, bold, green, greenBG } = FancyText;

console.log(HELLO);
console.log('1. Creating theme tokens');

const unsetThemeColors = {
	'workbench.colorCustomizations': resolveWorkbenchTokens(workbenchCustomizations as any, true),
	'editor.tokenColorCustomizations': { textMateRules: [] },
};

console.log(`2. Attempting to write unset tokens for identification and testing at: ${displayPath}\n`);

fs.mkdir(vscodeDir, { recursive: true })
	.then(() => fs.writeFile(settingsFile, JSON.stringify(unsetThemeColors, null, 2)))
	.then(() => {
		console.log(`${bold(greenBG(' Success: '))} ${green('File was successfully created!')}\n`);
		console.log(GOODBYE);
	})
	.catch((error: Error) => {
		console.log(`${bold(redBG(' Error: '))} ${red(error?.message)}\n`);
		process.exit(1);
	});
