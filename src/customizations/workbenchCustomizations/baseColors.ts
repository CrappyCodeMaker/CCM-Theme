import { DEFAULT, TRANSPARENT } from '../../colors';

export const baseColors = {
	// Overall border color for focused elements. This color is only used if not overridden by a component
	focusBorder: TRANSPARENT,
	// Overall foreground color. This color is only used if not overridden by a component
	foreground: ['neutral', 200],
	// Overall foreground for disabled elements. This color is only used if not overridden by a component
	disabledForeground: ['neutral', 500],
	// Border color of widgets such as Find/Replace inside the editor
	'widget.border': ['neutral', 900],
	// Shadow color of widgets such as Find/Replace inside the editor
	'widget.shadow': ['neutral', 800],
	// Background color of text selections in the workbench (for input fields or text areas, does not apply to selections within the editor and the terminal)
	'selection.background': ['neutral', 200, 10],
	// Foreground color for description text providing additional information, for example for a label
	descriptionForeground: ['neutral', 200],
	// Overall foreground color for error messages (this color is only used if not overridden by a component)
	errorForeground: ['red', 500],
	// The default color for icons in the workbench
	'icon.foreground': ['neutral', 200],
	// The hover border color for draggable sashes
	'sash.hoverBorder': DEFAULT,
};
