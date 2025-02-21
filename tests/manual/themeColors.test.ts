// 👉 Get SET colors for manual UI testing
import { promises as fs } from 'fs';
import { displayPath, GOODBYE, HELLO, settingsFile, vscodeDir } from './utils';
import { tokenCustomizations, workbenchCustomizations } from '../../src/customizations';
import { resolveSyntaxTokens, resolveWorkbenchTokens, FancyText } from '../../src/core';

const { blue, red, redBG, bold, green, greenBG } = FancyText;

console.log(HELLO);
console.log(blue('Creating theme tokens\n'));

const themeColors = {
	'workbench.colorCustomizations': resolveWorkbenchTokens(workbenchCustomizations),
	'editor.tokenColorCustomizations': { textMateRules: resolveSyntaxTokens(tokenCustomizations) },
};

console.log(`${blue('Writing "SET COLORS" for testing at:')} ${displayPath}\n`);

fs.mkdir(vscodeDir, { recursive: true })
	.then(() => fs.writeFile(settingsFile, JSON.stringify(themeColors, null, 2)))
	.then(() => {
		console.log(`${bold(greenBG(' Success: '))} ${green('Theme was successfully created')}\n`);
		console.log(GOODBYE);
	})
	.catch((error: Error) => {
		console.log(`${redBG(' Error: ')} ${red(error?.message)}`);
		process.exit(1);
	});
