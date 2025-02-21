import type { HexColor } from '../../colors';

/**
 * @group Validators
 *
 * @description Checks if a given value is a valid hex color string.
 * This validator supports the following hex color formats (case-insensitive):
 * - `#RGB`
 * - `#RGBA`
 * - `#RRGGBB`
 * - `#RRGGBBAA`
 * If the input is not a string or is undefined, the function returns false.
 *
 * @param {unknown} color - The value to check. May be undefined.
 * @returns {color is HexColor} Returns `true` if the input is a valid hex color string, otherwise `false`.
 *
 * @example
 * isValidHexColor('#FFF');      // => true  (short 3-digit format)
 * isValidHexColor('#FFFA');     // => true  (short 4-digit with alpha)
 * isValidHexColor('#FFFFFF');   // => true  (6-digit format)
 * isValidHexColor('#FFFFFFFF'); // => true  (8-digit with alpha)
 * isValidHexColor('#xyz');      // => false
 * isValidHexColor(undefined);   // => false
 */
export const isValidHexColor = (color: unknown): color is HexColor =>
	!color || typeof color !== 'string' ? false : /^#([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i.test(color);
