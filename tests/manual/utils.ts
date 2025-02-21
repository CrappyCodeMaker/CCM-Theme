import path from 'path';
import { FancyText } from '../../src/core/fancyText';

const { cyan, yellow, blackBG } = FancyText;

export const vscodeDir = path.resolve(process.cwd(), '.vscode');
export const settingsFile = path.join(vscodeDir, 'settings.json');

/**
 * Replace the path to settings.json with simply "~/.vscode/settings.json"
 * whenever we detect `.vscode/settings.json` at the end of the path.
 */
const shortPathToVscodeSettings = (fullPath: string): string => {
	const searchPart = '.vscode/settings.json';
	return blackBG(yellow(fullPath.endsWith(searchPart) ? `~/${searchPart}` : fullPath));
};

export const displayPath = shortPathToVscodeSettings(settingsFile);

export const HELLO = cyan('∙---------------------------∙\n| STARTING COLOR GENERATION |\n∙---------------------------∙\n');

export const GOODBYE = cyan('∙-----------------∙\n| GENERATION DONE |\n∙-----------------∙\n');
