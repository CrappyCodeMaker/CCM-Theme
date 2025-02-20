// Editor Groups are the containers of editors
// There can be many editor groups. A Tab is the container of an editor
// Multiple Tabs can be opened in one editor group

import { DEFAULT, TRANSPARENT } from '../../colors';

export const editorGroupsTabs = {
	// Color to separate multiple editor groups from each other
	'editorGroup.border': ['neutral', 900],
	// Background color when dragging editors around
	'editorGroup.dropBackground': ['neutral', 200, 10],
	// Background color of the editor group title header when using single Tab (set "workbench.editor.showTabs": "single")
	'editorGroupHeader.noTabsBackground': DEFAULT,
	// Background color of the Tabs container
	'editorGroupHeader.tabsBackground': ['neutral', 800],
	// Border color below the editor tabs control when tabs are enabled
	'editorGroupHeader.tabsBorder': ['neutral', 900],
	// Border color between editor group header and editor (below breadcrumbs if enabled)
	'editorGroupHeader.border': TRANSPARENT,
	// Background color of an empty editor group
	'editorGroup.emptyBackground': ['neutral', 700],
	// Border color of an empty editor group that is focused
	'editorGroup.focusedEmptyBorder': DEFAULT,
	// Foreground color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor
	'editorGroup.dropIntoPromptForeground': ['neutral', 200],
	// Background color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor
	'editorGroup.dropIntoPromptBackground': ['neutral', 700],
	// Border color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor
	'editorGroup.dropIntoPromptBorder': ['neutral', 900],
	// Active Tab background color in an active group
	'tab.activeBackground': ['neutral', 700],
	// Active Tab background color in an inactive editor group
	'tab.unfocusedActiveBackground': ['neutral', 700],
	// Active Tab foreground color in an active group
	'tab.activeForeground': ['neutral', 100],
	// Border to separate Tabs from each other
	'tab.border': ['neutral', 900],
	// Bottom border for the active tab
	'tab.activeBorder': ['neutral', 700],
	// Border to the top of a selected tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups
	'tab.selectedBorderTop': ['green', 400],
	// Background of a selected tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups
	'tab.selectedBackground': DEFAULT,
	// Foreground of a selected tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups
	'tab.selectedForeground': DEFAULT,
	// Border between tabs to indicate that a tab can be inserted between two tabs. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups
	'tab.dragAndDropBorder': ['green', 400],
	// Bottom border for the active tab in an inactive editor group
	'tab.unfocusedActiveBorder': ['neutral', 700],
	// Top border for the active tab
	'tab.activeBorderTop': ['green', 400],
	// Top border for the active tab in an inactive editor group
	'tab.unfocusedActiveBorderTop': ['green', 400, 60],
	// Border on the right of the last pinned editor to separate from unpinned editors
	'tab.lastPinnedBorder': DEFAULT,
	// Inactive Tab background color
	'tab.inactiveBackground': ['neutral', 800],
	// Inactive Tab background color in an unfocused group
	'tab.unfocusedInactiveBackground': ['neutral', 800],
	// Inactive Tab foreground color in an active group
	'tab.inactiveForeground': ['neutral', 500],
	// Active tab foreground color in an inactive editor group
	'tab.unfocusedActiveForeground': ['neutral', 300],
	// Inactive tab foreground color in an inactive editor group
	'tab.unfocusedInactiveForeground': ['neutral', 500],
	// Tab background color when hovering
	'tab.hoverBackground': ['neutral', 700],
	// Tab background color in an unfocused group when hovering
	'tab.unfocusedHoverBackground': ['neutral', 700],
	// Tab foreground color when hovering
	'tab.hoverForeground': ['neutral', 100],
	// Tab foreground color in an unfocused group when hovering
	'tab.unfocusedHoverForeground': ['neutral', 100],
	// Border to highlight tabs when hovering
	'tab.hoverBorder': ['neutral', 700],
	// Border to highlight tabs in an unfocused group when hovering
	'tab.unfocusedHoverBorder': ['neutral', 700],
	// Border on the top of modified (dirty) active tabs in an active group
	'tab.activeModifiedBorder': ['violet', 400],
	// Border on the top of modified (dirty) inactive tabs in an active group
	'tab.inactiveModifiedBorder': ['violet', 400, 60],
	// Border on the top of modified (dirty) active tabs in an unfocused group
	'tab.unfocusedActiveModifiedBorder': ['violet', 400, 60],
	// Border on the top of modified (dirty) inactive tabs in an unfocused group
	'tab.unfocusedInactiveModifiedBorder': ['violet', 400, 60],
	// Background color of the editor pane visible on the left and right side of the centered editor layout
	'editorPane.background': DEFAULT,
	// Color to separate two editors from each other when shown side by side in an editor group from top to bottom
	'sideBySideEditor.horizontalBorder': DEFAULT,
	// Color to separate two editors from each other when shown side by side in an editor group from left to right
	'sideBySideEditor.verticalBorder': DEFAULT,
};
