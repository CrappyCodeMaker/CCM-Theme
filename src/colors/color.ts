import type { HexColor, HSLColor } from './types';

/**
 * A utility class for working with colors.
 */
export class Color {
	private _hsl: HSLColor;

	/**
	 * Creates a new Color instance.
	 *
	 * @param {HSLColor} hsl - An HSL color representation.
	 */
	constructor(hsl: HSLColor) {
		this._hsl = { ...hsl, A: hsl.A ?? 255 };
	}

	/**
	 * Converts RGB values to an HSL representation.
	 *
	 * @private
	 * @param {number} r - Red component (0-255).
	 * @param {number} g - Green component (0-255).
	 * @param {number} b - Blue component (0-255).
	 * @param {number} [a] - Optional alpha component (0-255).
	 * @returns {HSLColor} The corresponding HSL color.
	 */
	private static rgbToHSL(r: number, g: number, b: number, a?: number): HSLColor {
		const R = r / 255,
			G = g / 255,
			B = b / 255;
		const max = Math.max(R, G, B),
			min = Math.min(R, G, B);
		let H = 0,
			S = 0;
		const L = (max + min) / 2;

		if (max !== min) {
			const d = max - min;
			S = L > 0.5 ? d / (2 - max - min) : d / (max + min);
			switch (max) {
				case R:
					H = (G - B) / d + (G < B ? 6 : 0);
					break;
				case G:
					H = (B - R) / d + 2;
					break;
				case B:
					H = (R - G) / d + 4;
					break;
			}
			H /= 6;
		}

		return {
			H: Math.round(H * 360),
			S: Math.round(S * 100),
			L: Math.round(L * 100),
			A: a ?? 255,
		};
	}

	/**
	 * Converts the internal HSL representation to RGB.
	 *
	 * @private
	 * @returns {{ r: number, g: number, b: number }} The RGB representation.
	 */
	private hslToRGB(): { r: number; g: number; b: number } {
		const { H, S, L } = this._hsl;
		const h = H / 360;
		const s = S / 100;
		const l = L / 100;
		let r: number, g: number, b: number;

		if (s === 0) {
			r = g = b = l;
		} else {
			const hue2rgb = (p: number, q: number, t: number): number => {
				if (t < 0) t += 1;
				if (t > 1) t -= 1;
				if (t < 1 / 6) return p + (q - p) * 6 * t;
				if (t < 1 / 2) return q;
				if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
				return p;
			};

			const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
			const p = 2 * l - q;
			r = hue2rgb(p, q, h + 1 / 3);
			g = hue2rgb(p, q, h);
			b = hue2rgb(p, q, h - 1 / 3);
		}

		return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
	}

	/**
	 * Creates a new color instance from HSL values.
	 *
	 * @param {HSLColor} color - An HSL color representation.
	 * @returns {Color} A new Color instance.
	 */
	static readonly fromHSL = (color: HSLColor): Color => {
		return new Color(color);
	};

	/**
	 * Creates a new color instance from a HEX string.
	 *
	 * @param {HexColor} hex - A string representing a color in HEX format, e.g. '#FF0000' or '#FF000080'.
	 * @returns {Color} A new Color instance.
	 */
	static readonly fromHEX = (hex: HexColor): Color => {
		const hexRegex = /^#([A-Fa-f0-9]{3,4}){1,2}$/;
		if (!hex || !hexRegex.test(hex)) return new Color({ H: 0, S: 0, L: 0, A: 255 });

		let hexValues = hex.substring(1).split('');
		if (hexValues.length === 3 || hexValues.length === 4) {
			hexValues = hexValues.reduce((acc, v) => acc.concat([v, v]), [] as string[]);
		}
		const fullHex = hexValues.join('');
		let r: number, g: number, b: number, a: number;
		if (hexValues.length === 8) {
			r = parseInt(fullHex.substring(0, 2), 16);
			g = parseInt(fullHex.substring(2, 4), 16);
			b = parseInt(fullHex.substring(4, 6), 16);
			a = parseInt(fullHex.substring(6, 8), 16);
		} else {
			r = parseInt(fullHex.substring(0, 2), 16);
			g = parseInt(fullHex.substring(2, 4), 16);
			b = parseInt(fullHex.substring(4, 6), 16);
			a = 255;
		}

		const hsl = Color.rgbToHSL(r, g, b, a);
		return new Color(hsl);
	};

	/**
	 * Helper to format a hex string and guarantee it conforms to HexColor.
	 *
	 * @private
	 * @param {string} hex - The hex string.
	 * @returns {HexColor} The formatted hex string.
	 */
	private static formatHex(hex: string): HexColor {
		// Assuming our hex string is valid, we uppercase it.
		return hex.toUpperCase() as HexColor;
	}

	/**
	 * Gets the HEX string representation of the color.
	 *
	 * @returns {HexColor} The HEX representation, e.g. '#FF0000' or '#FF000080'.
	 */
	public get hex(): HexColor {
		const { r, g, b } = this.hslToRGB();
		const a = this._hsl.A ?? 255;
		const toHex = (n: number) => n.toString(16).padStart(2, '0');
		const hexString = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
		const fullHex = a === 255 ? hexString : hexString + toHex(a);
		return Color.formatHex(fullHex);
	}

	/**
	 * Gets the internal HSL color representation.
	 *
	 * @returns {HSLColor} The HSL color object.
	 */
	public get hsl(): HSLColor {
		return this._hsl;
	}

	/**
	 * Gets the color as an HSLA string.
	 *
	 * @returns {string} The HSLA string, e.g. 'hsla(120, 100%, 50%, 0.7)'.
	 */
	public get hslWeb(): string {
		const { H, S, L, A } = this._hsl;
		const alpha = ((A ?? 255) / 255).toFixed(2).replace(/\.?0+$/, '');
		return `hsla(${H}, ${S}%, ${L}%, ${alpha})`;
	}
}
