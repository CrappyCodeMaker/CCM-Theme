import { DEFAULT, TRANSPARENT } from '../../colors';

// The Activity Bar is usually displayed either on the far left or right of the workbench and allows fast switching between views of the Side Bar
export const activityBar = {
	// Activity Bar background color
	'activityBar.background': ['neutral', 800],
	// Drag and drop feedback color for the activity bar items. The activity bar is showing on the far left or right and allows to switch between views of the side bar
	'activityBar.dropBorder': ['green', 400],
	// Activity Bar foreground color (for example used for the icons)
	'activityBar.foreground': ['neutral', 100],
	// Activity Bar item foreground color when it is inactive
	'activityBar.inactiveForeground': ['neutral', 500],
	// Activity Bar border color with the Side Bar
	'activityBar.border': TRANSPARENT,
	// Activity notification badge background color
	'activityBarBadge.background': ['violet', 400],
	// Activity notification badge foreground color
	'activityBarBadge.foreground': ['neutral', 50],
	// Activity Bar active indicator border color
	'activityBar.activeBorder': ['green', 400],
	// Activity Bar optional background color for the active element
	'activityBar.activeBackground': TRANSPARENT,
	// Activity bar focus border color for the active item
	'activityBar.activeFocusBorder': DEFAULT,
	// Active foreground color of the item in the Activity bar when it is on top. The activity allows to switch between views of the side bar
	'activityBarTop.foreground': ['neutral', 100],
	// Focus border color for the active item in the Activity bar when it is on top. The activity allows to switch between views of the side bar
	'activityBarTop.activeBorder': ['green', 400],
	// Inactive foreground color of the item in the Activity bar when it is on top. The activity allows to switch between views of the side bar
	'activityBarTop.inactiveForeground': ['neutral', 500],
	// Drag and drop feedback color for the items in the Activity bar when it is on top. The activity allows to switch between views of the side bar
	'activityBarTop.dropBorder': ['green', 400],
	// Background color of the activity bar when set to top / bottom
	'activityBarTop.background': DEFAULT,
	// Background color for the active item in the Activity bar when it is on top / bottom. The activity allows to switch between views of the side bar
	'activityBarTop.activeBackground': DEFAULT,
};
