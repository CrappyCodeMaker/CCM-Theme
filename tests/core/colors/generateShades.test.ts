import { describe, it, expect } from 'vitest';
import { Color, HexColor, HSLColor, Shade, SHADES } from '../../../src/colors';
import { generateShades } from '../../../src/core';

const validHexColors: HexColor[] = ['#000000', '#111111', '#222222', '#333333', '#444444', '#555555', '#666666', '#777777', '#888888', '#999999'];
const validHSLColors: HSLColor[] = [
	{ H: 0, S: 0, L: 0 },
	{ H: 0, S: 0, L: 17 },
	{ H: 0, S: 0, L: 34 },
	{ H: 0, S: 0, L: 51 },
	{ H: 0, S: 0, L: 68 },
	{ H: 0, S: 0, L: 85 },
	{ H: 0, S: 0, L: 12 },
	{ H: 0, S: 0, L: 19 },
	{ H: 0, S: 0, L: 13 },
	{ H: 5, S: 10, L: 13 },
];

describe('generateShades()', () => {
	it('throws an error when input array length is not exactly 10', () => {
		const invalidArray = new Array(9).fill('#000000');
		expect(() => generateShades(invalidArray)).toThrowError(/length of 10/i);
	});

	it('returns a valid ColorShades map for a valid HEX colors array', () => {
		const shadesMap = generateShades(validHexColors);
		expect(shadesMap.size).toBe(10);
		SHADES.forEach((shade: Shade) => {
			expect(shadesMap.has(shade)).toBe(true);
			const hex = shadesMap.get(shade);
			expect(hex).toMatch(/^#[A-Fa-f0-9]{6,8}$/);
		});
	});

	it('returns a valid ColorShades map for a valid HSL colors array', () => {
		const shadesMap = generateShades(validHSLColors);
		expect(shadesMap.size).toBe(10);
		SHADES.forEach((shade: Shade) => {
			const hex = shadesMap.get(shade);
			expect(hex).toMatch(/^#[A-Fa-f0-9]{6,8}$/);
		});
	});

	it('converts HEX color strings correctly using Color.fromHEX', () => {
		const shadesMap = generateShades(validHexColors);
		const expectedHex = Color.fromHEX(validHexColors[0]).hex;
		expect(shadesMap.get(SHADES[0])).toEqual(expectedHex);
	});
});
