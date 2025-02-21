import { NestedObject } from '../../customizations';

/**
 * @group Validators
 *
 * @description This function **does not** deeply validate that the object's structure
 * adheres to the full {@link NestedObject} specification; it only checks
 * for the top-level criteria.
 *
 * @param {unknown} value - The value to check.
 * @returns {value is NestedObject} Returns `true` if the value is a non-null, non-array object, otherwise `false`.
 *
 * @example
 * // Basic usage
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
 * console.log(isNestedObject(maybeObj));
 * // => true
 *
 * console.log(isNestedObject([]));
 * // => false (arrays are excluded)
 *
 * console.log(isNestedObject(null));
 * // => false
 */
export const isNestedObject = (value: unknown): value is NestedObject => value != null && typeof value === 'object' && !Array.isArray(value);
