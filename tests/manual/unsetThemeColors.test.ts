// 👉 Get UNSET colors for manual UI testing
import { promises as fs } from 'fs';
import { workbenchCustomizations } from '../../src/customizations';
import { displayPath, GOODBYE, HELLO, settingsFile, vscodeDir } from './utils';
import { getNotification } from '../../src/notifications';
import { resolveWorkbenchTokens } from '../../src/core';

console.log(HELLO);
console.log(getNotification('info', 'Creating theme tokens\n'));

const unsetThemeColors = {
	'workbench.colorCustomizations': resolveWorkbenchTokens(workbenchCustomizations as any, true),
	'editor.tokenColorCustomizations': { textMateRules: [] },
};

console.log(`${getNotification('info', 'Writing "UNSET COLORS" for testing at:')} ${displayPath}\n`);

fs.mkdir(vscodeDir, { recursive: true })
	.then(() => fs.writeFile(settingsFile, JSON.stringify(unsetThemeColors, null, 2)))
	.then(() => {
		console.log(getNotification('success', `Theme was successfully created\n`));
		console.log(GOODBYE);
	})
	.catch((error: Error) => {
		console.log(getNotification('error', error?.message));
		process.exit(1);
	});
