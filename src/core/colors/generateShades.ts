import { Color, ColorShades, HexColor, HSLColor, Shade, SHADES } from '../../colors';
import { FancyText } from '../fancyText';

/**
 * @private
 * @description Generates a shades map from an array of colors.
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
	const { red, redBG, bold } = FancyText;
	if (colors.length !== 10) throw new Error(`${bold(redBG(' Error: '))} ${red('Input array must have a length of 10')}\n`);

	const shadesMap = new Map<Shade, HexColor>();
	colors.forEach((color, index) => shadesMap.set(SHADES[index], typeof color === 'string' ? Color.fromHEX(color).hex : Color.fromHSL(color).hex));
	return shadesMap;
};
