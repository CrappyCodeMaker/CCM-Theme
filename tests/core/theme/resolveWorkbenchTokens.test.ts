import { describe, it, expect } from 'vitest';
import { NestedObject, Token } from '../../../src/customizations';
import { FancyText, resolveSyntaxTokens, resolveWorkbenchTokens } from '../../../src/core';
import { DEFAULT, TESTER, TRANSPARENT } from '../../../src/colors';

describe('resolveWorkbenchTokens()', () => {
	it('flattens a simple nested object (isTest=false)', () => {
		const nestedObj: NestedObject = {
			foo: '#000000',
			bar: {
				baz: '#ffffff',
			},
		};
		const result = resolveWorkbenchTokens(nestedObj, false);
		expect(result).toEqual({
			foo: '#000000',
			baz: '#ffffff',
		});
	});

	it('replaces undefined keys with fallback (TESTER) when isTest is true', () => {
		const nestedObj: NestedObject = {
			key1: '#123456',
			key2: undefined,
			group: {
				key3: undefined,
				key4: '#abcdef',
			},
		};
		const result = resolveWorkbenchTokens(nestedObj, true);
		expect(result).toEqual({
			key2: TESTER,
			key3: TESTER,
		});
	});

	it('handles deeply nested objects', () => {
		const nestedObj: NestedObject = {
			a: {
				b: {
					c: undefined,
					d: '#ff0000',
				},
			},
		};
		const resultFalse = resolveWorkbenchTokens(nestedObj, false);
		expect(resultFalse).toEqual({
			d: '#ff0000',
		});
		const resultTrue = resolveWorkbenchTokens(nestedObj, true);
		expect(resultTrue).toEqual({
			c: TESTER,
		});
	});

	it('returns an empty object when input is empty', () => {
		expect(resolveWorkbenchTokens({}, false)).toEqual({});
		expect(resolveWorkbenchTokens({}, true)).toEqual({});
	});

	it('copies non-token string values when isTest is false', () => {
		const nestedObj: NestedObject = {
			randomString: 'hello-world',
			validHex: '#cc00cc',
		};
		const result = resolveWorkbenchTokens(nestedObj, false);
		expect(result).toEqual({ validHex: '#cc00cc' });
	});

	it('processes color token arrays using resolvePaletteColor', () => {
		const nestedObj: NestedObject = {
			borderColor: ['neutral', 400],
		};
		const result = resolveWorkbenchTokens(nestedObj, false);
		expect(typeof result.borderColor).toBe('string');
		expect(result.borderColor as string).toMatch(/^#[A-Fa-f0-9]{6,8}$/);
	});

	it('throws an error with a specific message when an invalid color token is encountered', () => {
		// This array is interpreted as a color token; "1" is used as colorName.
		const invalidObj: NestedObject = { invalidKey: [1, 2, 3] as any };
		const expectedErrorMessage = `${FancyText.bold(FancyText.redBG(' Error: '))} ${FancyText.red('Invalid palette for color:')} ${FancyText.bold(FancyText.redBG('1'))}\n`;
		expect(() => resolveWorkbenchTokens(invalidObj, false)).toThrowError(expectedErrorMessage);
	});

	it('preserves TRANSPARENT and DEFAULT values', () => {
		const nestedObj: NestedObject = {
			focusBorder: TRANSPARENT,
			'sash.hoverBorder': DEFAULT,
			panel: {
				background: TRANSPARENT,
				border: DEFAULT,
			},
		};
		const result = resolveWorkbenchTokens(nestedObj, false);
		expect(result).toEqual({
			focusBorder: TRANSPARENT,
			'sash.hoverBorder': DEFAULT,
			background: TRANSPARENT,
			border: DEFAULT,
		});
	});
});

describe('resolveSyntaxTokens()', () => {
	it('resolves foreground color tokens in syntax tokens', () => {
		const tokens: Token[] = [
			{
				scope: ['comment'],
				settings: {
					fontStyle: 'italic',
					foreground: ['neutral', 200],
				},
			},
		];
		const resolvedTokens = resolveSyntaxTokens(tokens);
		expect(typeof resolvedTokens[0].settings.foreground).toBe('string');
		expect(resolvedTokens[0].settings.foreground).toMatch(/^#[A-Fa-f0-9]{6,8}$/);
	});

	it('leaves syntax tokens unchanged if foreground is already a HEX string', () => {
		const tokens: Token[] = [
			{
				scope: ['keyword'],
				settings: {
					fontStyle: 'bold',
					foreground: '#ff00ff',
				},
			},
		];
		const resolvedTokens = resolveSyntaxTokens(tokens);
		expect(resolvedTokens[0].settings.foreground).toBe('#ff00ff');
	});

	it('does not fail if a token does not have a foreground property', () => {
		const tokens: Token[] = [
			{
				scope: ['string'],
				settings: {
					fontStyle: 'italic',
				},
			},
		];
		const resolvedTokens = resolveSyntaxTokens(tokens);
		expect(resolvedTokens[0].settings.fontStyle).toBe('italic');
		expect(resolvedTokens[0].settings.foreground).toBeUndefined();
	});
});
