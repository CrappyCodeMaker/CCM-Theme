// import { describe, expect, it } from 'vitest';
// import { isValidHexColor } from '../../src/validators';

// describe('Validators -> isValidHexColor -> tests', () => {
// 	it('returns true for valid hex color strings', () => {
// 		expect(isValidHexColor('#FFF')).toBe(true);
// 		expect(isValidHexColor('#FFFA')).toBe(true);
// 		expect(isValidHexColor('#FFFFFF')).toBe(true);
// 		expect(isValidHexColor('#FFFFFFFF')).toBe(true);
// 	});

// 	it('returns false for invalid strings or undefined', () => {
// 		expect(isValidHexColor('FFF')).toBe(false);
// 		expect(isValidHexColor('#FF')).toBe(false);
// 		expect(isValidHexColor('#xyz')).toBe(false);
// 		expect(isValidHexColor('#ZZZZ')).toBe(false);
// 		expect(isValidHexColor('')).toBe(false);
// 		expect(isValidHexColor(undefined)).toBe(false);
// 		expect(isValidHexColor('hello')).toBe(false);
// 		expect(isValidHexColor('#FFFZ')).toBe(false);
// 	});
// });
