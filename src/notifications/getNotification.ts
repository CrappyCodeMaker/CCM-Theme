import { ANSIcolors } from './constants';

type Status = 'success' | 'info' | 'warning' | 'error' | 'dim' | 'text';

type ForegroundColorKey = {
	[K in keyof typeof ANSIcolors]: K extends `${string}BG` | 'reset' ? never : K;
}[keyof typeof ANSIcolors];

type BackgroundColorKey = {
	[K in keyof typeof ANSIcolors]: K extends `${string}BG` ? K : never;
}[keyof typeof ANSIcolors];

type ColorMeta = {
	fg?: ForegroundColorKey;
	bg?: BackgroundColorKey;
};

const { reset, black, red, green, yellow, blue, dim, redBG, blueBG, yellowBG, greenBG } = ANSIcolors;

// Predefined labels for statuses
const labels = {
	error: `${redBG}${black} Error: ${reset} `,
	info: `${blueBG}${black} Info: ${reset} `,
	warning: `${yellowBG} Warning: ${reset} `,
	success: `${greenBG} Success: ${reset} `,
	dim: '', // No label for dim status
	text: '', // No label for dim status
};

// Utility function to format messages with ANSIcolors based on status
export const getNotification = (status: Status, text: string, meta?: ColorMeta): string => {
	const label = labels[status] || '';
	let textColor: string = '';

	switch (status) {
		case 'success':
			textColor = green;
			break;
		case 'info':
			textColor = blue;
			break;
		case 'warning':
			textColor = yellow;
			break;
		case 'error':
			textColor = red;
			break;
		case 'dim':
			textColor = dim;
			break;
		case 'text': {
			if (meta) {
				const { bg, fg } = meta;
				textColor = `${bg ? ANSIcolors[bg] : ''}${fg ? ANSIcolors[fg] : ''}`;
			}
			break;
		}
		default:
			textColor = reset;
	}

	return `${label}${textColor}${text}${reset}`;
};
