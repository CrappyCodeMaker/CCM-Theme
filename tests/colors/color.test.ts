import { describe, it, expect } from 'vitest';
import { Color, HexColor, HSLColor } from '../../src/colors';

describe('Color class', () => {
	describe('fromHSL()', () => {
		it('creates a Color instance from valid HSL values', () => {
			const hsl: HSLColor = { H: 120, S: 100, L: 50, A: 255 };
			const color = Color.fromHSL(hsl);
			expect(color).toBeInstanceOf(Color);
			expect(color.hsl).toEqual(hsl);
		});

		it('applies default alpha of 255 if not provided', () => {
			const hsl: HSLColor = { H: 200, S: 50, L: 30 };
			const color = Color.fromHSL(hsl);
			expect(color.hsl.A).toBe(255);
		});
	});

	describe('fromHEX()', () => {
		it('creates a Color instance from a valid 6-digit HEX', () => {
			const hex = '#FF0000' as HexColor;
			const color = Color.fromHEX(hex);
			expect(color).toBeInstanceOf(Color);
			expect(color.hsl.H).toBeGreaterThanOrEqual(0);
			expect(color.hsl.H).toBeLessThanOrEqual(1);
			expect(color.hsl.S).toBe(100);
			expect(color.hsl.L).toBe(50);
			expect(color.hsl.A).toBe(255);
		});

		it('creates a Color instance from an 8-digit HEX with alpha', () => {
			const hex = '#FF000080' as HexColor; // Red + alpha=128
			const color = Color.fromHEX(hex);
			expect(color.hsl.A).toBe(128);
			expect(color.hsl.H).toBeGreaterThanOrEqual(0);
			expect(color.hsl.S).toBe(100);
			expect(color.hsl.L).toBe(50);
		});

		it('creates a Color instance from a short 3-digit HEX', () => {
			const hex = '#F00' as HexColor; // same as #FF0000
			const color = Color.fromHEX(hex);
			expect(color.hsl.H).toBeGreaterThanOrEqual(0);
			expect(color.hsl.S).toBe(100);
			expect(color.hsl.L).toBe(50);
			expect(color.hsl.A).toBe(255);
		});

		it('creates a Color instance from a short 4-digit HEX with alpha', () => {
			const hex = '#F00A' as HexColor; // #FF0000AA
			const color = Color.fromHEX(hex);
			expect(color.hsl.A).toBe(parseInt('AA', 16));
		});

		it('returns a fallback color if the hex is invalid', () => {
			const invalidHex = '#XYZ123' as HexColor;
			const color = Color.fromHEX(invalidHex);
			expect(color.hsl).toEqual({ H: 0, S: 0, L: 0, A: 255 });
		});
	});

	describe('hex getter', () => {
		it('returns an uppercase 7 or 9 digit string (when alpha != 255)', () => {
			const color = Color.fromHSL({ H: 0, S: 100, L: 50, A: 255 });
			const hex = color.hex;
			expect(hex).toMatch(/^#[A-F0-9]{6}$/);
			// e.g. "#FF0000"

			const colorWithAlpha = Color.fromHSL({ H: 0, S: 100, L: 50, A: 128 });
			expect(colorWithAlpha.hex).toMatch(/^#[A-F0-9]{8}$/);
		});

		it('converts any hex string to uppercase format', () => {
			const color = Color.fromHEX('#aa11bb' as HexColor);
			expect(color.hex).toBe('#AA11BB');
		});
	});

	describe('hsl getter', () => {
		it('returns the internal HSL object', () => {
			const inputHSL: HSLColor = { H: 100, S: 60, L: 40, A: 123 };
			const color = Color.fromHSL(inputHSL);
			expect(color.hsl).toEqual(inputHSL);
		});
	});

	describe('hslWeb getter', () => {
		it('returns a valid HSLA string with alpha in [0..1]', () => {
			const color = Color.fromHSL({ H: 200, S: 50, L: 40, A: 128 });
			const result = color.hslWeb;
			// e.g., "hsla(200, 50%, 40%, 0.5)"
			expect(result).toMatch(/^hsla\(\d{1,3}, \d{1,3}%, \d{1,3}%, 0?\.\d+\)$/);
			expect(result).toContain('200');
			expect(result).toContain('50%');
			expect(result).toContain('40%');
			// alpha ~ 128/255 => ~0.5
			expect(result).toContain('0.5');
		});

		it('handles alpha=255 as alpha=1 in the string', () => {
			const color = Color.fromHSL({ H: 10, S: 20, L: 30 });
			// A not specified => default 255
			expect(color.hslWeb).toBe('hsla(10, 20%, 30%, 1)');
		});
	});
});
