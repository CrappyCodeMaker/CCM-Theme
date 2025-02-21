import { Default, DEFAULT, TESTER, TRANSPARENT, type HexColor } from '../colors';
import { NestedObject, Token } from '../customizations';
import { getHEXColor } from './helpers';
import { isNestedObject } from './validators';

export type Theme = Record<string, HexColor | Default>;

/**
 * Recursively flattens a nested theme object into a flat theme object.
 *
 * This function walks through each key/value pair in the input object. Its behavior
 * depends on the `isTest` flag:
 *
 * - When `isTest` is **false** (the default), defined (non-undefined) values are copied
 *   into the result object as HEX color strings.
 * - When `isTest` is **true**, only keys with undefined values are assigned a fallback
 *   HEX color (`'#f009'`). (Defined values are ignored.)
 *
 * @param {NestedObject} obj - The nested theme object to flatten.
 * @param {boolean} [isTest=false] - If true, keys with undefined values are replaced with a fallback color.
 * @param {Theme} [result={}] - The accumulator object that collects flattened theme values.
 * @returns {Theme} The flattened theme object with keys mapping to HEX color strings.
 */
export const resolveWorkbenchTokens = (obj: NestedObject, isTest: boolean = false, result: Theme = {}): any => {
	Object.entries(obj).forEach(([key, value]) => {
		if (isNestedObject(value) && !Array.isArray(value)) resolveWorkbenchTokens(value, isTest, result);
		if (isTest && value === undefined) result[key] = TESTER;
		if (!isTest && value !== undefined) {
			if (value === TRANSPARENT || value === DEFAULT) result[key] = value;
			if (Array.isArray(value) && (value.length === 2 || value.length === 3)) {
				const [color, shade, opacity] = value as any[];
				const hexColor = getHEXColor(color, shade, opacity);
				result[key] = hexColor as HexColor;
			}
		}
	});

	return result;
};

export const resolveSyntaxTokens = (tokens: Token[]) =>
	tokens.map((token) => {
		const newToken = { ...token };
		if (newToken.settings && newToken.settings?.foreground) {
			const fg = newToken.settings.foreground;
			if (Array.isArray(fg) && (fg.length === 2 || fg.length === 3)) {
				const [color, shade, opacity] = fg;
				newToken.settings.foreground = getHEXColor(color, shade, opacity);
			}
		}
		return newToken;
	});
