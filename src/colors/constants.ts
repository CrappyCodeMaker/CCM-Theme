import type { Default, HexColor, HexOpacity, OpacityLevel, Shade } from './types';

// #region DEFAULTS

export const TRANSPARENT: HexColor = '#0000';
export const DEFAULT: Default = 'default';
export const TESTER: HexColor = '#f009';
export const SHADES: Shade[] = [900, 800, 700, 600, 500, 400, 300, 200, 100, 50];

// #endregion DEFAULTS

export const opacityLevelMap = new Map<OpacityLevel, HexOpacity>(
	Object.entries({
		90: 'E6',
		80: 'CC',
		70: 'B3',
		60: '99',
		50: '80',
		40: '66',
		30: '4D',
		20: '33',
		10: '1A',
	}).map(([key, value]) => [Number(key) as OpacityLevel, value as HexOpacity]),
);

export const ANSIcolors = {
	// Reset
	reset: '\x1b[0m',

	// Foreground colors
	black: '\x1b[30m',
	red: '\x1b[31m',
	green: '\x1b[32m',
	yellow: '\x1b[33m',
	blue: '\x1b[34m',
	magenta: '\x1b[35m',
	cyan: '\x1b[36m',
	white: '\x1b[37m',

	// Background colors
	blackBG: '\x1b[40m',
	redBG: '\x1b[41m',
	greenBG: '\x1b[42m',
	yellowBG: '\x1b[43m',
	blueBG: '\x1b[44m',
	magentaBG: '\x1b[45m',
	cyanBG: '\x1b[46m',
	whiteBG: '\x1b[47m',
};
