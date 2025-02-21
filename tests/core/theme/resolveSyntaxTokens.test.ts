import { describe, it, expect } from 'vitest';
import { Token } from '../../../src/customizations';
import { resolveSyntaxTokens } from '../../../src/core';

const hexRegex = /^#[A-Fa-f0-9]{6,8}$/;

describe('resolveSyntaxTokens()', () => {
	it('resolves foreground tokens for a token with a valid foreground array of length 2', () => {
		const tokens: Token[] = [
			{
				scope: ['comment', 'punctuation.accessor'],
				settings: {
					fontStyle: 'bold',
					foreground: ['neutral', 200],
				},
			},
		];
		const resolved = resolveSyntaxTokens(tokens);
		expect(typeof resolved[0].settings.foreground).toBe('string');
		expect(resolved[0].settings.foreground as string).toMatch(hexRegex);
	});

	it('resolves foreground tokens for a token with a valid foreground array of length 3', () => {
		const tokens: Token[] = [
			{
				scope: ['keyword'],
				settings: {
					foreground: ['neutral', 400, 50],
				},
			},
		];
		const resolved = resolveSyntaxTokens(tokens);
		expect(typeof resolved[0].settings.foreground).toBe('string');
		expect(resolved[0].settings.foreground as string).toMatch(hexRegex);
	});

	it('leaves foreground unchanged if it is already a HEX color string', () => {
		const tokens: Token[] = [
			{
				scope: ['variable'],
				settings: {
					fontStyle: 'italic',
					foreground: '#ff00ff',
				},
			},
		];
		const resolved = resolveSyntaxTokens(tokens);
		expect(resolved[0].settings.foreground).toBe('#ff00ff');
	});

	it('leaves token unchanged if settings.foreground is not present', () => {
		const tokens: Token[] = [
			{
				scope: ['string'],
				settings: {
					fontStyle: 'italic',
				},
			},
		];
		const resolved = resolveSyntaxTokens(tokens);
		expect(resolved[0].settings.fontStyle).toBe('italic');
		expect(resolved[0].settings.foreground).toBeUndefined();
	});

	it('leaves foreground unchanged when the array length is not 2 or 3', () => {
		const tokens: Token[] = [
			{
				scope: ['comment'],
				settings: {
					foreground: ['neutral', 200, 50, 'extra'] as any,
				},
			},
		];
		const resolved = resolveSyntaxTokens(tokens);
		expect(Array.isArray(resolved[0].settings.foreground)).toBe(true);
		expect(resolved[0].settings.foreground).toEqual(['neutral', 200, 50, 'extra']);
	});
});
