import { DEFAULT } from '../../colors';

// The Minimap shows a minified version of the current file
export const minimap = {
	// Highlight color for matches from search within files
	'minimap.findMatchHighlight': ['violet', 400, 40],
	// Highlight color for the editor selection
	'minimap.selectionHighlight': ['neutral', 200, 10],
	// Highlight color for errors within the editor
	'minimap.errorHighlight': DEFAULT,
	// Highlight color for warnings within the editor
	'minimap.warningHighlight': DEFAULT,
	// Minimap background color
	'minimap.background': ['neutral', 900, 30],
	// Minimap marker color for repeating editor selections
	'minimap.selectionOccurrenceHighlight': DEFAULT,
	// Opacity of foreground elements rendered in the minimap. For example, "#000000c0" will render the elements with 75% opacity
	'minimap.foregroundOpacity': ['neutral', 900, 80],
	// Minimap marker color for infos
	'minimap.infoHighlight': DEFAULT,
	// Minimap slider background color
	'minimapSlider.background': DEFAULT,
	// Minimap slider background color when hovering
	'minimapSlider.hoverBackground': DEFAULT,
	// Minimap slider background color when clicked on
	'minimapSlider.activeBackground': DEFAULT,
	// Minimap gutter color for added content
	'minimapGutter.addedBackground': DEFAULT,
	// Minimap gutter color for modified content
	'minimapGutter.modifiedBackground': DEFAULT,
	// Minimap gutter color for deleted content
	'minimapGutter.deletedBackground': DEFAULT,
};
