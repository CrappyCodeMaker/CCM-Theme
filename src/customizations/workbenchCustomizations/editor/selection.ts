import { DEFAULT } from '../../../colors';
/**
 * Selection colors are visible when selecting one or more characters
 * In addition to the selection also all regions with the same content are highlighted
 */
export const selectionHighlight = {
	// Color of the editor selection
	'editor.selectionBackground': ['neutral', 200, 10],
	// Color of the selected text for high contrast
	'editor.selectionForeground': DEFAULT,
	// Color of the selection in an inactive editor. The color must not be opaque so as not to hide underlying decorations
	'editor.inactiveSelectionBackground': ['neutral', 400, 10],
	// Color for regions with the same content as the selection. The color must not be opaque so as not to hide underlying decorations
	'editor.selectionHighlightBackground': ['violet', 400, 30],
	// Border color for regions with the same content as the selection
	'editor.selectionHighlightBorder': ['violet', 400],
};
