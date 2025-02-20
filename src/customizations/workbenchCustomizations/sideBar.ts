import { DEFAULT, TRANSPARENT } from '../../colors';

// The Side Bar contains views like the Explorer and Search
export const sideBar = {
	// Side Bar background color
	'sideBar.background': ['neutral', 800],
	// Side Bar foreground color. The Side Bar is the container for views like Explorer and Search
	'sideBar.foreground': ['neutral', 300],
	// Side Bar border color on the side separating the editor
	'sideBar.border': ['neutral', 900],
	// Drag and drop feedback color for the side bar sections. The color should have transparency so that the side bar sections can still shine through
	'sideBar.dropBackground': ['neutral', 200, 10],
	// Side Bar title foreground color
	'sideBarTitle.foreground': ['neutral', 300],
	// Side Bar section header background color
	'sideBarSectionHeader.background': ['neutral', 800],
	// Side Bar section header foreground color
	'sideBarSectionHeader.foreground': ['neutral', 300],
	// Side bar section header border color
	'sideBarSectionHeader.border': TRANSPARENT,
	// Border color between the activity bar at the top/bottom and the views
	'sideBarActivityBarTop.border': TRANSPARENT,
	// Side bar title background color. The side bar is the container for views like explorer and search
	'sideBarTitle.background': TRANSPARENT,
	// Background color of sticky scroll in the side bar
	'sideBarStickyScroll.background': ['neutral', 800, 80],
	// Border color of sticky scroll in the side bar
	'sideBarStickyScroll.border': DEFAULT,
	// Shadow color of sticky scroll in the side bar
	'sideBarStickyScroll.shadow': ['neutral', 900, 60],
};
