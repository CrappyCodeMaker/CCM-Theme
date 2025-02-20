import { DEFAULT, TRANSPARENT } from '../../colors';

// A set of colors for button widgets such as Open Folder button in the Explorer of a new window
export const buttonControl = {
	// Button background color
	'button.background': ['violet', 400],
	// Button foreground color
	'button.foreground': ['neutral', 50],
	// Button border color
	'button.border': TRANSPARENT,
	// Button separator color
	'button.separator': ['neutral', 50],
	// Button background color when hovering
	'button.hoverBackground': ['violet', 400, 60],
	// Secondary button foreground color
	'button.secondaryForeground': ['neutral', 50],
	// Secondary button background color
	'button.secondaryBackground': ['neutral', 500],
	// Secondary button background color when hovering
	'button.secondaryHoverBackground': ['neutral', 400],
	// Background color of checkbox widget
	'checkbox.background': ['neutral', 800],
	// Foreground color of checkbox widget
	'checkbox.foreground': ['neutral', 200],
	// Border color of checkbox widget
	'checkbox.border': ['neutral', 900],
	// Background color of checkbox widget when the element it's in is selected
	'checkbox.selectBackground': DEFAULT,
	// Border color of checkbox widget when the element it's in is selected
	'checkbox.selectBorder': DEFAULT,
};
