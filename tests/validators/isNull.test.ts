import { describe, expect, it } from 'vitest';
import { isNull } from '../../src/validators';

describe('Validators -> isNull -> tests', () => {
	it('should return true if the value is null', () => {
		expect(isNull(null)).toBe(true);
	});

	it('should return false if the value is not null', () => {
		expect(isNull(undefined)).toBe(false);
		expect(isNull(0)).toBe(false);
		expect(isNull('')).toBe(false);
		expect(isNull({})).toBe(false);
		expect(isNull([])).toBe(false);
		expect(isNull(false)).toBe(false);
	});
});
