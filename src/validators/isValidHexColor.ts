import { HexColor } from '../colors/types';

/**
 * @group Validators
 *
 * @description Checks if a string is a valid hex color. This validator
 * supports the following hex formats:
 * - `#RGB`
 * - `#RGBA`
 * - `#RRGGBB`
 * - `#RRGGBBAA`
 *
 * @param {string | undefined} color - The string value to check. May be undefined.
 * @returns {color is HexColor} `true` if the input is a valid hex color string, otherwise `false`.
 *
 * @example
 * isValidHexColor('#FFF');      // => true  (short 3-digit format)
 * isValidHexColor('#FFFA');     // => true  (short 4-digit with alpha)
 * isValidHexColor('#FFFFFF');   // => true  (6-digit format)
 * isValidHexColor('#FFFFFFFF'); // => true  (8-digit with alpha)
 * isValidHexColor('#xyz');      // => false
 * isValidHexColor(undefined);   // => false
 */
export const isValidHexColor = (color: string | undefined): color is HexColor =>
	!color ? false : /^#([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i.test(color);
