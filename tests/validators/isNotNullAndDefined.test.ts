import { describe, expect, it } from 'vitest';
import { isNotNullAndDefined } from '../../src/validators';

describe('Validators -> isNotNullAndDefined -> tests', () => {
	it('should return true if the value is not null and not undefined', () => {
		expect(isNotNullAndDefined(5)).toBe(true);
		expect(isNotNullAndDefined('hello')).toBe(true);
		expect(isNotNullAndDefined(0)).toBe(true);
		expect(isNotNullAndDefined(false)).toBe(true);
		expect(isNotNullAndDefined([])).toBe(true);
	});

	it('should return false if the value is null or undefined', () => {
		expect(isNotNullAndDefined(null)).toBe(false);
		expect(isNotNullAndDefined(undefined)).toBe(false);
	});

	it('should return true if the value is an object', () => {
		expect(isNotNullAndDefined({})).toBe(true);
		expect(isNotNullAndDefined({ a: 1 })).toBe(true);
	});

	it('should return true if the value is an array', () => {
		expect(isNotNullAndDefined([])).toBe(true);
		expect(isNotNullAndDefined([1, 2, 3])).toBe(true);
	});
});
