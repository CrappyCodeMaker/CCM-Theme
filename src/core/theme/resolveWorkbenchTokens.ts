import { Default, DEFAULT, TESTER, TRANSPARENT, type HexColor } from '../../colors';
import { NestedObject } from '../../customizations';
import { resolvePaletteColor } from '../colors/resolvePaletteColor';
import { isNestedObject } from '../validators';

export type Theme = Record<string, HexColor | Default>;

/**
 * @description Recursively flattens a nested theme object into a single-level object.
 *
 * This function iterates over each key/value pair in the provided nested theme object.
 * Its behavior depends on the `isTest` flag:
 *
 * - When `isTest` is **false** (default):
 *    - If a value is defined and is equal to `TRANSPARENT` or `DEFAULT`, it is copied as-is.
 *    - If a value is an array of length 2 or 3, it is assumed to be a color token in the form
 *      `[colorName, shade, opacity?]`. In that case, the token is resolved using `resolvePaletteColor`
 *      and the resulting HEX color string is stored.
 *    - All other defined values are copied as-is.
 *
 * - When `isTest` is **true**:
 *    - Any key with an `undefined` value is replaced with the fallback value `TESTER`.
 *    - Defined values are left unchanged.
 *
 * Note: The function recursively flattens all nested objects into a single-level accumulator.
 *
 * @param {NestedObject} obj - The nested theme object to flatten.
 * @param {boolean} [isTest=false] - If true, replaces undefined values with a fallback.
 * @param {Theme} [result={}] - The accumulator object that collects flattened theme values.
 * @returns {Theme} The flattened theme object with keys mapping to HEX color strings or Default values.
 *
 * @example
 * const themeCustomization = {
 *   "editor.inactiveSelectionBackground": ["neutral", 400, 10],
 *   "editor.tokenColorCustomizations": {
 *     "textMateRules": {
 *       "scope": ["comment"],
 *       "foreground": ["neutral", 200]
 *     }
 *   }
 * };
 *
 * const flatTheme = resolveWorkbenchTokens(themeCustomization);
 * // flatTheme will contain HEX color strings for the color tokens.
 */
export const resolveWorkbenchTokens = (obj: NestedObject, isTest: boolean = false, result: Theme = {}): any => {
	Object.entries(obj).forEach(([key, value]) => {
		if (isNestedObject(value) && !Array.isArray(value)) resolveWorkbenchTokens(value, isTest, result);
		if (isTest && value === undefined) result[key] = TESTER;
		if (!isTest && value !== undefined) {
			if (value === TRANSPARENT || value === DEFAULT) result[key] = value;
			if (Array.isArray(value) && (value.length === 2 || value.length === 3)) {
				const [color, shade, opacity] = value;
				result[key] = resolvePaletteColor(color, shade, opacity);
			}
		}
	});
	return result;
};
