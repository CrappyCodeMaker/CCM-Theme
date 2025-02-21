import { describe, expect, it } from 'vitest';
import { isValidOpacity } from '../../../src/core';

describe('Validators -> isValidOpacity -> tests', () => {
	it('returns true for valid numeric opacity levels', () => {
		expect(isValidOpacity(10)).toBe(true);
		expect(isValidOpacity(20)).toBe(true);
		expect(isValidOpacity(30)).toBe(true);
		expect(isValidOpacity(40)).toBe(true);
		expect(isValidOpacity(50)).toBe(true);
		expect(isValidOpacity(60)).toBe(true);
		expect(isValidOpacity(70)).toBe(true);
		expect(isValidOpacity(80)).toBe(true);
		expect(isValidOpacity(90)).toBe(true);
	});

	it('returns true for valid string representations of opacity levels', () => {
		expect(isValidOpacity('10')).toBe(true);
		expect(isValidOpacity('20')).toBe(true);
		expect(isValidOpacity('50')).toBe(true);
		expect(isValidOpacity('90')).toBe(true);
	});

	it('returns false for invalid numbers', () => {
		expect(isValidOpacity(0)).toBe(false);
		expect(isValidOpacity(100)).toBe(false);
		expect(isValidOpacity(999)).toBe(false);
		expect(isValidOpacity(-10)).toBe(false);
	});

	it('returns false for invalid string inputs', () => {
		expect(isValidOpacity('abcd')).toBe(false);
		expect(isValidOpacity('50px')).toBe(false);
		expect(isValidOpacity('0')).toBe(false);
		expect(isValidOpacity('100')).toBe(false);
	});

	it('returns false for NaN or non-finite values', () => {
		expect(isValidOpacity(NaN)).toBe(false);
		expect(isValidOpacity(Number.POSITIVE_INFINITY)).toBe(false);
	});

	it('returns false if not a string or number', () => {
		expect(isValidOpacity(null as any)).toBe(false);
		expect(isValidOpacity(undefined as any)).toBe(false);
		expect(isValidOpacity({} as any)).toBe(false);
		expect(isValidOpacity([] as any)).toBe(false);
	});
});
