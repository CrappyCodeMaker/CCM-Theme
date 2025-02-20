import { DEFAULT, TRANSPARENT } from '../../../colors';

// Search colors are used in the search viewlet's global search results
export const search = {
	// Color of the text in the search viewlet's completion message. For example, this color is used in the text that says "{x} results in {y} files"
	'search.resultsInfoForeground': ['neutral', 500],
};

/**
 * Search Editor colors highlight results in a Search Editor
 * This can be configured separately from other find matches in order to better differentiate between different classes of match in the same editor
 */
export const searchEditor = {
	// Color of the editor's results
	'searchEditor.findMatchBackground': DEFAULT,
	// Border color of the editor's results
	'searchEditor.findMatchBorder': DEFAULT,
	// Search editor text input box border
	'searchEditor.textInputBorder': DEFAULT,
};

// Find colors depend on the current find string in the Find/Replace dialog
export const findMatch = {
	// Color of the current search match
	'editor.findMatchBackground': ['yellow', 400, 40],
	// Text color of the current search match
	'editor.findMatchForeground': DEFAULT,
	// Border color of the current search match
	'editor.findMatchBorder': ['yellow', 400],
	// Color of the other search matches. The color must not be opaque so as not to hide underlying decorations
	'editor.findMatchHighlightBackground': ['violet', 400, 40],
	// Foreground color of the other search matches
	'editor.findMatchHighlightForeground': DEFAULT,
	// Border color of the other search matches
	'editor.findMatchHighlightBorder': ['violet', 400],
	// Color the range limiting the search (Enable 'Find in Selection' in the find widget). The color must not be opaque so as not to hide underlying decorations
	'editor.findRangeHighlightBackground': ['violet', 400, 20],
	// Border color the range limiting the search (Enable 'Find in Selection' in the find widget)
	'editor.findRangeHighlightBorder': TRANSPARENT,
	// Background color for highlighting the line at the findMatch position (`default` is equal to the color of `editor.lineHighlightBackground`)
	'editor.rangeHighlightBackground': DEFAULT,
};
