import { type Shade, SHADES } from '../colors';

export const isValidShade = (shade: string | number | Shade): shade is Shade => {
	const parsed = typeof shade === 'string' ? Number(shade) : shade;
	return Number.isNaN(parsed) ? false : SHADES.includes(parsed as Shade);
};
