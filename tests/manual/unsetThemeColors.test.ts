// 👉 Get UNSET colors for manual UI testing
import { promises as fs } from 'fs';
import { displayPath, GOODBYE, HELLO, settingsFile, vscodeDir } from './utils';
import { workbenchCustomizations } from '../../src/customizations';
import { resolveWorkbenchTokens, FancyText } from '../../src/core';

const { blue, red, redBG, bold, green, greenBG } = FancyText;

console.log(HELLO);
console.log(blue('Creating theme tokens\n'));

const unsetThemeColors = {
	'workbench.colorCustomizations': resolveWorkbenchTokens(workbenchCustomizations as any, true),
	'editor.tokenColorCustomizations': { textMateRules: [] },
};

console.log(`${blue('Writing "UNSET COLORS" for testing at:')} ${displayPath}\n`);

fs.mkdir(vscodeDir, { recursive: true })
	.then(() => fs.writeFile(settingsFile, JSON.stringify(unsetThemeColors, null, 2)))
	.then(() => {
		console.log(`${bold(greenBG(' Success: '))} ${green('Theme was successfully created')}\n`);
		console.log(GOODBYE);
	})
	.catch((error: Error) => {
		console.log(`${redBG(' Error: ')} ${red(error?.message)}`);
		process.exit(1);
	});
