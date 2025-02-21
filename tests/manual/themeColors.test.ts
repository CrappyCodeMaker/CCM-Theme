// 👉 Get SET colors for manual UI testing
import { promises as fs } from 'fs';
import { displayPath, GOODBYE, HELLO, settingsFile, vscodeDir } from './utils';
import { tokenCustomizations, workbenchCustomizations } from '../../src/customizations';
import { resolveSyntaxTokens, resolveWorkbenchTokens } from '../../src/core';
import { getNotification } from '../../src/notifications';

console.log(HELLO);
console.log(getNotification('info', 'Creating theme tokens\n'));

const themeColors = {
	'workbench.colorCustomizations': resolveWorkbenchTokens(workbenchCustomizations),
	'editor.tokenColorCustomizations': { textMateRules: resolveSyntaxTokens(tokenCustomizations) },
};

console.log(`${getNotification('info', 'Writing "SET COLORS" for testing at:')} ${displayPath}\n`);

fs.mkdir(vscodeDir, { recursive: true })
	.then(() => fs.writeFile(settingsFile, JSON.stringify(themeColors, null, 2)))
	.then(() => {
		console.log(getNotification('success', `Theme was successfully created\n`));
		console.log(GOODBYE);
	})
	.catch((error: Error) => {
		console.log(getNotification('error', error?.message));
		process.exit(1);
	});
