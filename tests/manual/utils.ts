import path from 'path';
import { getNotification } from '../../src/notifications';

export const vscodeDir = path.resolve(process.cwd(), '.vscode');
export const settingsFile = path.join(vscodeDir, 'settings.json');

/**
 * Replace the path to settings.json with simply "~/.vscode/settings.json"
 * whenever we detect `.vscode/settings.json` at the end of the path.
 */
const shortPathToVscodeSettings = (fullPath: string): string => {
	const searchPart = '.vscode/settings.json';
	return getNotification('text', fullPath.endsWith(searchPart) ? `~/${searchPart}` : fullPath, { bg: 'blackBG' });
};

export const displayPath = shortPathToVscodeSettings(settingsFile);

export const HELLO = getNotification('text', '∙---------------------------∙\n| STARTING COLOR GENERATION |\n∙---------------------------∙\n', {
	fg: 'cyan',
});

export const GOODBYE = getNotification('text', '∙-----------------∙\n| GENERATION DONE |\n∙-----------------∙\n', { fg: 'cyan' });
