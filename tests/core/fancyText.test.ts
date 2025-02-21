import { describe, it, expect } from 'vitest';
import { FancyText } from '../../src/core';

describe('FancyText', () => {
	const { nodeColorsMap } = FancyText;

	describe('Foreground methods', () => {
		it('formats text with red foreground', () => {
			const text = 'Error occurred';
			const result = FancyText.red(text);
			expect(result).toBe(`${nodeColorsMap.red}${text}${nodeColorsMap.reset}`);
		});

		it('formats numeric input correctly', () => {
			const num = 12345;
			const result = FancyText.blue(num);
			expect(result).toBe(`${nodeColorsMap.blue}${String(num)}${nodeColorsMap.reset}`);
		});
	});

	describe('Background methods', () => {
		it('formats text with redBG background', () => {
			const text = 'Warning!';
			const result = FancyText.redBG(text);
			expect(result).toBe(`${nodeColorsMap.redBG}${text}${nodeColorsMap.reset}`);
		});

		it('formats text with cyanBG background', () => {
			const text = 'Info message';
			const result = FancyText.cyanBG(text);
			expect(result).toBe(`${nodeColorsMap.cyanBG}${text}${nodeColorsMap.reset}`);
		});
	});

	describe('Text style methods', () => {
		it('formats text in bold', () => {
			const text = 'This is bold text';
			const boldCode = '\x1b[1m';
			const result = FancyText.bold(text);
			expect(result).toBe(`${boldCode}${text}${nodeColorsMap.reset}`);
		});

		it('formats text in italic', () => {
			const text = 'This is italic text';
			const italicCode = '\x1b[3m';
			const result = FancyText.italic(text);
			expect(result).toBe(`${italicCode}${text}${nodeColorsMap.reset}`);
		});
	});
});
