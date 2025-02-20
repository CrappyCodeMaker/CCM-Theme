import { DEFAULT } from '../../colors';

// Colors for input controls such as in the Search view or the Find/Replace dialog
export const inputControl = {
	// Input box background
	'input.background': ['neutral', 600],
	// Input box border
	'input.border': ['neutral', 900],
	// Input box foreground
	'input.foreground': ['neutral', 300],
	// Input box foreground color for placeholder text
	'input.placeholderForeground': ['neutral', 500],
	// Background color of activated options in input fields
	'inputOption.activeBackground': ['violet', 400, 40],
	// Border color of activated options in input fields
	'inputOption.activeBorder': ['violet', 400],
	// Foreground color of activated options in input fields
	'inputOption.activeForeground': DEFAULT,
	// Background color of activated options in input fields
	'inputOption.hoverBackground': DEFAULT,
	// Input validation background color for error severity
	'inputValidation.errorBackground': ['red', 800],
	// Input validation foreground color for error severity
	'inputValidation.errorForeground': ['neutral', 100],
	// Input validation border color for error severity
	'inputValidation.errorBorder': ['red', 500],
	// Input validation background color for information severity
	'inputValidation.infoBackground': ['blue', 800],
	// Input validation foreground color for information severity
	'inputValidation.infoForeground': ['neutral', 100],
	// Input validation border color for information severity
	'inputValidation.infoBorder': ['blue', 500],
	// Input validation background color for information warning
	'inputValidation.warningBackground': ['yellow', 800],
	// Input validation foreground color for warning severity
	'inputValidation.warningForeground': ['neutral', 100],
	// Input validation border color for warning severity
	'inputValidation.warningBorder': ['yellow', 500],
};
