import { FancyText } from '../fancyText';

const { cyan, bold } = FancyText;

export const HELLO = (themeName: string) => {
	const divider = themeName === 'Crappy Night' ? '--------------------------------' : '-----------------------------------';
	return `${cyan(`∙${divider}∙\n| STARTING GENERATE`)} ${bold(cyan(themeName))} ${cyan(`|\n∙${divider}∙`)}\n`;
};

export const GOODBYE = cyan('∙-----------------∙\n| GENERATION DONE |\n∙-----------------∙\n');
