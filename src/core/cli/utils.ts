import path from 'path';
import { FancyText } from '../fancyText';

const { blackBG, yellow, cyan, bold, green, redBG } = FancyText;

/**
 * Replace the path to settings.json with simply "~/.vscode/settings.json"
 * whenever we detect `.vscode/settings.json` at the end of the path.
 */
export const shortPathToVscodeSettings = (fullPath: string): string => {
	const searchPart = '.vscode/settings.json';
	return blackBG(yellow(fullPath.endsWith(searchPart) ? `~/${searchPart}` : fullPath));
};

export const releaseDir = path.resolve(process.cwd(), 'build/themes');
export const vscodeDir = path.resolve(process.cwd(), '.vscode');
export const settingsFile = path.join(vscodeDir, 'settings.json');

export const HELLO = cyan('∙--------∙\n| HELLO! |\n∙--------∙\n');
export const GOODBYE = cyan('∙----------∙\n| GOODBYE! |\n∙----------∙\n');

export const START = (themeName: string) => `${cyan('Starting generate:')} ${bold(cyan(themeName))}\n`;
export const DONE = `${green('Theme was successfully generated!')}\n`;

export const ERROR_HEADER = bold(redBG(' Error: '));
