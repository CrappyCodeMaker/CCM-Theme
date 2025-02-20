import path from 'path';
import { ANSIcolors } from '../src/colors/constants';

export const vscodeDir = path.resolve(process.cwd(), '.vscode');
export const settingsFile = path.join(vscodeDir, 'settings.json');

/**
 * Replace the path to settings.json with simply "~/.vscode/settings.json"
 * whenever we detect `.vscode/settings.json` at the end of the path.
 */
export const shortPathToVscodeSettings = (fullPath: string): string => {
	const searchPart = '.vscode/settings.json';
	return fullPath.endsWith(searchPart) ? `~/${searchPart}` : fullPath;
};

export const HELLO = `${ANSIcolors.cyan}
∙--------------------------------∙
| ${ANSIcolors.cyanBG} STARTING COLOR GENERATION... ${ANSIcolors.reset} ${ANSIcolors.cyan}|
∙--------------------------------∙
${ANSIcolors.reset}`;

export const GOODBYE = `${ANSIcolors.cyan}
∙-------------------∙
| ${ANSIcolors.cyanBG} GENERATION DONE ${ANSIcolors.reset} ${ANSIcolors.cyan}|
∙-------------------∙
${ANSIcolors.reset}`;
