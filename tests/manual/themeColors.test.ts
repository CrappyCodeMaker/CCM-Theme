// 👉 Get SET colors for manual UI testing
import { promises as fs } from 'fs';
import { displayPath, GOODBYE, HELLO, settingsFile, vscodeDir } from './utils';
import { tokenCustomizations, workbenchCustomizations } from '../../src/customizations';
import { resolveSyntaxTokens, resolveWorkbenchTokens, FancyText } from '../../src/core';

const { red, redBG, bold, green, greenBG } = FancyText;

console.log(HELLO);
console.log('1. Creating theme tokens');

const themeColors = {
	'workbench.colorCustomizations': resolveWorkbenchTokens(workbenchCustomizations),
	'editor.tokenColorCustomizations': { textMateRules: resolveSyntaxTokens(tokenCustomizations) },
};

console.log(`2. Attempting to write the specified tokens to: ${displayPath}\n`);

fs.mkdir(vscodeDir, { recursive: true })
	.then(() => fs.writeFile(settingsFile, JSON.stringify(themeColors, null, 2)))
	.then(() => {
		console.log(`${bold(greenBG(' Success: '))} ${green('File was successfully created!')}\n`);
		console.log(GOODBYE);
	})
	.catch((error: Error) => {
		console.log(`${bold(redBG(' Error: '))} ${red(error?.message)}\n`);
		process.exit(1);
	});
