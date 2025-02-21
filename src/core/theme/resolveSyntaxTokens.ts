import { Token } from '../../customizations';
import { resolvePaletteColor } from '../colors/resolvePaletteColor';

/**
 * @description Resolves syntax tokens by processing an array of token objects.
 *
 * For each token object in the array, if the token's settings contain a "foreground"
 * property and its value is an array of length 2 or 3 (i.e. a color token in the form
 * `[colorName, shade, opacity?]`), this property is replaced with the corresponding
 * HEX color obtained via `resolvePaletteColor`. All other properties (e.g. "scope", "fontStyle")
 * remain unchanged.
 *
 * @param {Token[]} tokens - The array of token objects to process.
 * @returns {Token[]} A new array of tokens with resolved foreground colors.
 *
 * @example
 * const tokens = [{
 *   scope: ["comment", "punctuation.accessor"],
 *   settings: {
 *     fontStyle: "bold",
 *     foreground: ["neutral", 200]
 *   }
 * }];
 *
 * const resolvedTokens = resolveSyntaxTokens(tokens);
 * // resolvedTokens[0].settings.foreground now holds the HEX color from resolvePaletteColor('neutral', 200)
 */
export const resolveSyntaxTokens = (tokens: Token[]): Token[] =>
	tokens.map((token) => {
		const newToken = { ...token };
		if (newToken.settings && newToken.settings?.foreground) {
			const fg = newToken.settings.foreground;
			if (Array.isArray(fg) && (fg.length === 2 || fg.length === 3)) {
				const [color, shade, opacity] = fg;
				newToken.settings.foreground = resolvePaletteColor(color, shade, opacity);
			}
		}
		return newToken;
	});
