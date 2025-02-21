import { OPACITY_LVL, type OpacityLevel } from '../../colors';

/**
 * @group Validators
 *
 * @description Determines whether the given value is a valid opacity level.
 *
 * The function accepts a value that may be a string (e.g. "50"), a number (e.g. 50),
 * or an OpacityLevel (one of 10, 20, ..., 90). It converts a string to a number and then
 * checks whether the resulting number is included in the predefined OPACITY_LVL array.
 *
 * @param {string | number | OpacityLevel} opacity - A value to check. For example:
 *   - "50" (string)
 *   - 50 (number)
 *   - 50 as OpacityLevel
 * @returns {opacity is OpacityLevel} Returns `true` if the parsed value is one of the valid opacity levels,
 *   otherwise returns `false`.
 *
 * @example
 * // String input
 * isValidOpacity("50");
 * // => true
 *
 * // Numeric input
 * isValidOpacity(50);
 * // => true
 *
 * // Wrong numeric input
 * isValidOpacity(999);
 * // => false
 *
 * // Non-numeric string input
 * isValidOpacity("abcd");
 * // => false
 *
 * // Valid if directly typed as OpacityLevel
 * const level: OpacityLevel = 50;
 * isValidOpacity(level);
 * // => true
 */
export const isValidOpacity = (opacity: string | number | OpacityLevel): opacity is OpacityLevel => {
	const parsed = typeof opacity === 'string' ? Number(opacity) : opacity;
	return Number.isNaN(parsed) ? false : OPACITY_LVL.includes(parsed as OpacityLevel);
};
