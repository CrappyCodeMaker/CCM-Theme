import { DEFAULT, getColor } from '../../colors';

// Note: These colors are for the GUI settings editor which can be opened with the Preferences: Open Settings (UI) command
export const settings = {
	// The foreground color for a section header or active title
	'settings.headerForeground': DEFAULT,
	// The line that indicates a modified setting
	'settings.modifiedItemIndicator': getColor('violet', 400),
	// Dropdown background
	'settings.dropdownBackground': getColor('neutral', 800),
	// Dropdown foreground
	'settings.dropdownForeground': DEFAULT,
	// Dropdown border
	'settings.dropdownBorder': getColor('neutral', 900),
	// Dropdown list border
	'settings.dropdownListBorder': getColor('neutral', 900),
	// Checkbox background
	'settings.checkboxBackground': DEFAULT,
	// Checkbox foreground
	'settings.checkboxForeground': DEFAULT,
	// Checkbox border
	'settings.checkboxBorder': DEFAULT,
	// The background color of a settings row when hovered
	'settings.rowHoverBackground': getColor('neutral', 600),
	// Text input box background
	'settings.textInputBackground': getColor('neutral', 800),
	// Text input box foreground
	'settings.textInputForeground': DEFAULT,
	// Text input box border
	'settings.textInputBorder': DEFAULT,
	// Number input box background
	'settings.numberInputBackground': getColor('neutral', 800),
	// Number input box foreground
	'settings.numberInputForeground': DEFAULT,
	// Number input box border
	'settings.numberInputBorder': DEFAULT,
	// Background color of a focused setting row
	'settings.focusedRowBackground': getColor('neutral', 600),
	// The color of the row's top and bottom border when the row is focused
	'settings.focusedRowBorder': getColor('violet', 400),
	// The color of the header container border
	'settings.headerBorder': DEFAULT,
	// The color of the Settings editor splitview sash border
	'settings.sashBorder': DEFAULT,
	// The foreground color for a section header or hovered title
	'settings.settingsHeaderHoverForeground': getColor('neutral', 100),
};
