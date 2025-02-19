import { isNestedObject, isValidHexColor, isValidOpacity } from '../validators';
import { Color } from './color';
import { HSLColors, opacityLevelMap } from './constants';
import { ColorName, ColorShades, HexColor, HSLColor, NestedObject, OpacityLevel, Shade, Theme } from './types';

/**
 * Appends an opacity value to a HEX color using the opacity level map.
 *
 * @param {HexColor} color - The base HEX color.
 * @param {OpacityLevel} opacity - The opacity level to append.
 * @returns {HexColor} The HEX color with appended opacity.
 */
const hexWithOpacity = (color: HexColor, opacity: OpacityLevel): HexColor => `${color}${opacityLevelMap.get(opacity)}`;

/**
 * Generates a HEX color from a given color value. If the input is a string,
 * it is interpreted as a HEX color; otherwise, it is treated as an HSL color.
 *
 * @param {HexColor | HSLColor} color - The input color in HEX or HSL format.
 * @returns {HexColor} The generated HEX color.
 */
const generateColor = (color: HexColor | HSLColor): HexColor => (typeof color === 'string' ? Color.fromHEX(color) : Color.fromHSL(color)).hex;

/**
 * Generates a shades Map from an array of colors.
 * The input array must have exactly 10 items, where:
 * - Index 0 corresponds to shade 900 (darkest),
 * - Index 1 corresponds to shade 800,
 * - ... and
 * - Index 9 corresponds to shade 50 (lightest).
 *
 * @param {(HexColor | HSLColor)[]} colors - Array of colors in HEX or HSL format.
 * @returns {ColorShades} A Map mapping shade keys (900, 800, …, 50) to HEX color strings.
 * @throws {Error} If the input array does not have exactly 10 items.
 */
export const generateShades = (colors: (HexColor | HSLColor)[]): ColorShades => {
	if (colors.length !== 10) throw new Error('Input array must have a length of 10.');

	const shadeKeys: Shade[] = [900, 800, 700, 600, 500, 400, 300, 200, 100, 50];
	const shades = new Map<Shade, HexColor>();

	colors.forEach((color, index) => shades.set(shadeKeys[index], generateColor(color)));

	return shades;
};

/**
 * Retrieves a HEX color for a given color name and shade, with an optional opacity.
 *
 * This function uses the HSLColors constant to generate a shades map for the specified
 * color name. It then returns the HEX color for the requested shade. If an opacity is
 * provided, the corresponding opacity hex is appended.
 *
 * @param {ColorName} colorName - The name of the color (e.g. "red", "blue", etc.).
 * @param {Shade} shade - The shade value (e.g. 900, 800, ..., 50).
 * @param {number} [opacity] - Optional opacity value.
 * @returns {HexColor} The resulting HEX color, optionally with opacity appended.
 * @throws {Error} If the generated HEX color is invalid or the opacity value is invalid.
 */
export const getHEXColor = (colorName: ColorName, shade: Shade, opacity?: number): HexColor => {
	const colorsMap = generateShades(HSLColors?.[colorName]);
	const hexColor = colorsMap.get(shade);

	if (!isValidHexColor(hexColor)) throw new Error(`Invalid HEX color: ${hexColor}`);
	if (!opacity) return hexColor;

	if (!isValidOpacity(opacity)) throw new Error(`Invalid Opacity value: ${opacity}`);
	return hexWithOpacity(hexColor, opacity);
};

/**
 * Recursively flattens a nested theme object into a flat theme object.
 *
 * This function walks through each key/value pair in the input object. Its behavior
 * depends on the `isTest` flag:
 *
 * - When `isTest` is **false** (the default), defined (non-undefined) values are copied
 *   into the result object as HEX color strings.
 * - When `isTest` is **true**, only keys with undefined values are assigned a fallback
 *   HEX color (`'#f007'`). (Defined values are ignored.)
 *
 * @param {NestedObject} obj - The nested theme object to flatten.
 * @param {boolean} [isTest=false] - If true, keys with undefined values are replaced with a fallback color.
 * @param {Theme} [result={}] - The accumulator object that collects flattened theme values.
 * @returns {Theme} The flattened theme object with keys mapping to HEX color strings.
 */
export const flattenOptimizedTheme = (obj: NestedObject, isTest: boolean = false, result: Theme = {}): Theme => {
	Object.entries(obj).forEach(([key, value]) => {
		if (isNestedObject(value)) {
			flattenOptimizedTheme(value, isTest, result);
		} else if (!isTest && value !== undefined) {
			result[key] = value as HexColor;
		} else if (isTest && value === undefined) {
			result[key] = '#f007';
		}
	});

	return result;
};
