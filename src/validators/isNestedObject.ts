import { Default, HSLColor, NestedObject } from '../colors/types';

/**
 * @group Validators
 *
 * @description Checks if the given value qualifies as a nested object,
 * meaning it is non-null, of type 'object', and **not** an array.
 *
 * This function only ensures `value != null`, `typeof value === 'object'`,
 * and that `value` is not an array. It does **not** recursively validate
 * properties against the full `NestedObject` structure.
 *
 * @param {string | undefined | NestedObject} value - The value to check.
 * @returns {value is NestedObject} `true` if `value` is a non-null, non-array object otherwise `false`.
 *
 * @example
 * // Simple usage
 * const maybeObj: NestedObject | string = {
 *   editor: {
 *     bracketHighlight: {
 *       'editorBracketHighlight.foreground1': '#FF0000',
 *       'editorBracketHighlight.foreground2': '#00FF00',
 *       'editorBracketHighlight.foreground3': '#0000FF',
 *     },
 *   },
 * };
 *
 * isNestedObject(maybeObj);
 * // => true
 *
 * isNestedObject([]);
 * // => false
 *
 * isNestedObject(undefined);
 * // => false
 */
export const isNestedObject = (value: string | NestedObject | Default | HSLColor | undefined): value is NestedObject =>
	value != null && typeof value === 'object' && !Array.isArray(value);
