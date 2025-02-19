import { getHEXColor } from '../../colors';

// The theme colors for breadcrumbs navigation
export const breadcrumbs = {
	// Color of breadcrumb items
	'breadcrumb.foreground': getHEXColor('neutral', 300),
	// Background color of breadcrumb items
	'breadcrumb.background': getHEXColor('neutral', 700),
	// Color of focused breadcrumb items
	'breadcrumb.focusForeground': getHEXColor('neutral', 100),
	// Color of selected breadcrumb items
	'breadcrumb.activeSelectionForeground': getHEXColor('neutral', 100),
	// Background color of breadcrumb item picker
	'breadcrumbPicker.background': getHEXColor('neutral', 700),
};
