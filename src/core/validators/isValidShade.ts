import { SHADES, type Shade } from '../../colors';

/**
 * @group Validators
 *
 * @description Determines whether the given value is a valid shade.
 *
 * This function accepts a value as a string, number, or a Shade.
 * If the value is a string, it is converted to a number.
 * The function returns `true` if the numeric value is included in the predefined
 * SHADES array, otherwise it returns `false`.
 *
 * @param {string | number | Shade} shade - The shade value to check. For example:
 *   - "400" (string)
 *   - 400 (number)
 *   - 400 as Shade
 * @returns {shade is Shade} Returns `true` if the parsed value is a valid shade, otherwise `false`.
 *
 * @example
 * isValidShade("400"); // => true (if SHADES includes 400)
 * isValidShade(400);   // => true
 * isValidShade("abc"); // => false
 * isValidShade(999);   // => false
 */
export const isValidShade = (shade: string | number | Shade): shade is Shade => {
	const parsed = typeof shade === 'string' ? Number(shade) : shade;
	return Number.isNaN(parsed) ? false : SHADES.includes(parsed as Shade);
};
