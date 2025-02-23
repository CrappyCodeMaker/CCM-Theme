import { opacityLevelMap, type ColorName, type HexColor, type OpacityLevel, type Shade } from '../../colors';
import { palettes } from '../../colors/palettes';
import { FancyText } from '../fancyText';
import { generateShades } from './generateShades';
import { isValidHexColor, isValidOpacity, isValidShade } from '../validators';
import { themeContextManager } from '../..';
import { ERROR_HEADER } from '../cli';

/**
 * @private
 * @description Appends an opacity value to a HEX color using the opacity level map.
 *
 * @param {HexColor} color - The base HEX color.
 * @param {OpacityLevel} opacity - The opacity level to append.
 * @returns {HexColor} The HEX color with appended opacity.
 */
const hexWithOpacity = (color: HexColor, opacity: OpacityLevel): HexColor => `${color}${opacityLevelMap.get(opacity)}`;

/**
 * @description Retrieves a HEX color for a given color name and shade, with an optional opacity.
 *
 * This function uses the current theme type (via getThemeType) to select the appropriate
 * color set from palettes, generates a shades map for the specified color name, and returns
 * the HEX color for the requested shade. If an opacity is provided, it is validated and
 * applied using hexWithOpacity.
 *
 * @param {ColorName | string} colorName - The name of the color palette (e.g. "red", "neutral").
 * @param {Shade | string | number} shade - The shade value (e.g. 900, 800, ..., 50).
 * @param {OpacityLevel | string | number} [opacity] - Optional opacity value.
 * @returns {HexColor} The resulting HEX color, optionally with opacity appended.
 *
 * @throws {Error} If:
 *  - No color palette exists for the given colorName.
 *  - The provided shade is invalid.
 *  - The resolved HEX color is invalid.
 *  - The provided opacity is invalid.
 *
 * @example
 * const hex = resolvePaletteColor('neutral', 800);
 * const hexWithOp = resolvePaletteColor('neutral', 800, 50);
 */
export const resolvePaletteColor = (
	colorName: ColorName | string,
	shade: Shade | string | number,
	opacity?: OpacityLevel | string | number,
): HexColor => {
	const palette = palettes?.[themeContextManager.getThemeType()]?.[colorName];
	const { red, redBG, bold } = FancyText;

	if (!palette) throw new Error(`${ERROR_HEADER} ${red('Invalid palette for color:')} ${bold(redBG(colorName))}\n`);
	if (!isValidShade(shade)) throw new Error(`${ERROR_HEADER} ${red('Invalid Shade:')} ${bold(redBG(shade))}\n`);

	const shadesMap = generateShades(palette);
	const hexColor = shadesMap.get(Number(shade) as Shade);

	if (!hexColor || !isValidHexColor(hexColor)) {
		throw new Error(`${ERROR_HEADER} ${red('Invalid HEX color:')} ${redBG(`${JSON.stringify(shadesMap, null, 2)} | ${shade} | ${colorName}`)}\n`);
	}
	if (opacity == null) return hexColor;

	const numericOpacity = Number(opacity);
	if (!isValidOpacity(numericOpacity)) throw new Error(`${ERROR_HEADER} ${red('Invalid Opacity value:')} ${bold(redBG(opacity))}\n`);

	return hexWithOpacity(hexColor, numericOpacity);
};
