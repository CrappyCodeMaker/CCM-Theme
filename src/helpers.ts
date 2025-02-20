import {
	ANSIcolors,
	Color,
	opacityLevelMap,
	SHADES,
	type ColorName,
	type ColorShades,
	type HexColor,
	type HSLColor,
	type OpacityLevel,
	type Shade,
} from './colors';
import { colorsSets } from './colors/sets';
import { getThemeType } from './theme';
import { isValidHexColor, isValidOpacity, isValidShade } from './validators';

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

	const shadesMap = new Map<Shade, HexColor>();
	colors.forEach((color, index) => shadesMap.set(SHADES[index], generateColor(color)));

	return shadesMap;
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
 * @param {OpacityLevel} [opacity] - Optional opacity value.
 * @returns {HexColor} The resulting HEX color, optionally with opacity appended.
 * @throws {Error} If the generated HEX color is invalid or the opacity value is invalid.
 */
export const getHEXColor = (colorName: ColorName | string, shade: Shade | string | number, opacity?: OpacityLevel | string | number): HexColor => {
	const type = getThemeType();

	const colorsMap = generateShades(colorsSets[type]?.[colorName]);
	if (!colorsMap)
		throw new Error(`${ANSIcolors.red}Invalid colorsMap color:${ANSIcolors.reset} ${ANSIcolors.redBG} ${colorsMap} ${ANSIcolors.reset}`);

	if (!isValidShade(shade)) throw new Error(`${ANSIcolors.red}Invalid Shade:${ANSIcolors.reset} ${ANSIcolors.redBG} ${shade} ${ANSIcolors.reset}`);

	const hexColor = colorsMap.get(shade);

	if (!isValidHexColor(hexColor))
		throw new Error(`${ANSIcolors.red}Invalid HEX color:${ANSIcolors.reset} ${ANSIcolors.redBG} ${hexColor} ${ANSIcolors.reset}`);

	if (!opacity) return hexColor;

	if (!isValidOpacity(opacity))
		throw new Error(`${ANSIcolors.red}Invalid Opacity value:${ANSIcolors.reset} ${ANSIcolors.redBG} ${opacity} ${ANSIcolors.reset}`);

	return hexWithOpacity(hexColor, opacity);
};
