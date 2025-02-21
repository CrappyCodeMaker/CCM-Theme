// import { describe, expect, it } from 'vitest';
// import { isNestedObject } from '../../src/validators';
// import type { NestedObject } from '../../src/colors';

// describe('Validators -> isNestedObject -> tests', () => {
// 	it('returns true for non-null objects', () => {
// 		expect(isNestedObject({} as NestedObject)).toBe(true);
// 		expect(isNestedObject({ a: 1 } as unknown as NestedObject)).toBe(true);
// 		expect(isNestedObject({ nested: { key: 'value' } } as NestedObject)).toBe(true);
// 	});

// 	it('returns false for null or undefined', () => {
// 		expect(isNestedObject(null as any)).toBe(false);
// 		expect(isNestedObject(undefined)).toBe(false);
// 	});

// 	it('returns false for strings', () => {
// 		expect(isNestedObject('')).toBe(false);
// 		expect(isNestedObject('hello')).toBe(false);
// 	});

// 	it('returns false for other types (numbers, arrays, etc.)', () => {
// 		expect(isNestedObject(123 as any)).toBe(false);
// 		expect(isNestedObject([] as any)).toBe(false);
// 		expect(isNestedObject(true as any)).toBe(false);
// 	});

// 	it('does not validate nested properties, only checks top-level "object"', () => {
// 		// Even if keys are unusual, as long as it's a non-null object
// 		const trickyObj = {
// 			a: null,
// 			b: 'some string',
// 			c: { nested: undefined },
// 		} as unknown as NestedObject;

// 		expect(isNestedObject(trickyObj)).toBe(true);
// 	});
// });
