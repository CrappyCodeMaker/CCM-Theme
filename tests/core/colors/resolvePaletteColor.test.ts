import { describe, it, expect } from 'vitest';
import { ThemeState } from '../../../src/core';
import { ColorName, HexColor, opacityLevelMap, SHADES } from '../../../src/colors';
import { isValidHexColor, resolvePaletteColor } from '../../../src/core';

const themeContextManager = new ThemeState();
themeContextManager.setThemeType('dark');

describe('resolvePaletteColor()', () => {
	it('returns a valid HEX color for a known palette and valid shade without opacity', () => {
		const hex: HexColor = resolvePaletteColor('neutral', 800);
		expect(hex).toMatch(/^#[A-Fa-f0-9]{6,8}$/);
		expect(isValidHexColor(hex)).toBe(true);
	});

	it('returns a valid HEX color with opacity appended when provided', () => {
		const hexWithOp: HexColor = resolvePaletteColor('neutral', 800, 50);
		const opacityHex = opacityLevelMap.get(50);
		expect(hexWithOp.endsWith(opacityHex ?? '')).toBe(true);
	});

	it('converts string inputs for shade and opacity correctly', () => {
		const hexFromString: HexColor = resolvePaletteColor('neutral', '800', '50');
		const hexFromNumber: HexColor = resolvePaletteColor('neutral', 800, 50);
		expect(hexFromString).toEqual(hexFromNumber);
	});

	it('throws an error if palette (colorName) is invalid', () => {
		expect(() => resolvePaletteColor('unknown', 800)).toThrowError(/Invalid palette/);
	});

	it('throws an error if shade is invalid', () => {
		expect(() => resolvePaletteColor('neutral', 999)).toThrowError(/Invalid Shade/);
	});

	it('throws an error if opacity is invalid', () => {
		expect(() => resolvePaletteColor('neutral', 800, 999 as any)).toThrowError(/Invalid Opacity value/);
	});

	it('works for a variety of palette names', () => {
		const validPalettes: ColorName[] = ['neutral', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'violet', 'orange'];
		validPalettes.forEach((colorName) => {
			const hex = resolvePaletteColor(colorName, 500);
			expect(hex).toMatch(/^#[A-Fa-f0-9]{6,8}$/);
		});
	});

	it('supports all valid shade keys (900 to 50) for a given palette', () => {
		SHADES.forEach((shade) => {
			const hex = resolvePaletteColor('blue', shade);
			expect(hex).toMatch(/^#[A-Fa-f0-9]{6,8}$/);
		});
	});
});
