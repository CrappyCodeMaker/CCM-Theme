import { opacityLevelMap } from '../colors/constants';
import { OpacityLevel } from '../colors/types';

/**
 * @group Validators
 *
 * @description Determines whether the given value is a valid opacity level.
 *
 * @param {string | number | OpacityLevel} opacity - A value to check. May be
 *   a string (like "50"), a number (50), or an `OpacityLevel` (10 | 20 | ... | 90).
 * @returns {opacity is OpacityLevel} Returns `true` if the value corresponds
 *   to a valid opacity level in the `opacityLevelMap`, otherwise `false`.
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
 * // Wrong numeric
 * isValidOpacity(999);
 * // => false
 *
 * // Non-numeric string
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
	return Number.isNaN(parsed) ? false : opacityLevelMap.has(parsed as OpacityLevel);
};
