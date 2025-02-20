// Panels are shown below the editor area and contain views like Output and Integrated Terminal

import { DEFAULT } from '../../colors';

export const panel = {
	// Panel background color
	'panel.background': ['neutral', 700],
	// Panel border color to separate the panel from the editor
	'panel.border': ['neutral', 900],
	// Drag and drop feedback color for the panel titles. Panels are shown below the editor area and contain views like output and integrated terminal
	'panel.dropBorder': DEFAULT,
	// Border color for the active panel title
	'panelTitle.activeBorder': ['green', 400],
	// Title color for the active panel
	'panelTitle.activeForeground': ['neutral', 100],
	// Title color for the inactive panel
	'panelTitle.inactiveForeground': ['neutral', 500],
	// Input box border for inputs in the panel
	'panelInput.border': ['neutral', 900],
	// Panel section border color used when multiple views are stacked horizontally in the panel. Panels are shown below the editor area and contain views like output and integrated terminal
	'panelSection.border': DEFAULT,
	// Drag and drop feedback color for the panel sections. The color should have transparency so that the panel sections can still shine through. Panels are shown below the editor area and contain views like output and integrated terminal
	'panelSection.dropBackground': ['neutral', 200, 10],
	// Panel section header background color. Panels are shown below the editor area and contain views like output and integrated terminal
	'panelSectionHeader.background': ['neutral', 600],
	// Panel section header foreground color. Panels are shown below the editor area and contain views like output and integrated terminal
	'panelSectionHeader.foreground': DEFAULT,
	// Background color of sticky scroll in the panel
	'panelStickyScroll.background': DEFAULT,
	// Border color of sticky scroll in the panel
	'panelStickyScroll.border': DEFAULT,
	// Shadow color of sticky scroll in the panel
	'panelStickyScroll.shadow': DEFAULT,
	// Panel section header border color used when multiple views are stacked vertically in the panel. Panels are shown below the editor area and contain views like output and integrated terminal
	'panelSectionHeader.border': DEFAULT,
	// Output view background color
	'outputView.background': DEFAULT,
	// Output view sticky scroll background color
	'outputViewStickyScroll.background': DEFAULT,
};
