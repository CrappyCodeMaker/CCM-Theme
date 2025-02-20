import { DEFAULT, TRANSPARENT } from '../../colors';

// Colors for list and trees like the File Explorer. An active list/tree has keyboard focus, an inactive does not
export const listsAndTrees = {
	// List/Tree background color for the selected item when the list/tree is active
	'list.activeSelectionBackground': ['violet', 400, 40],
	// List/Tree foreground color for the selected item when the list/tree is active
	'list.activeSelectionForeground': ['neutral', 100],
	// List/Tree icon foreground color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not
	'list.activeSelectionIconForeground': ['neutral', 100],
	// List/Tree drag and drop background when moving items around using the mouse
	'list.dropBackground': ['neutral', 200, 10],
	// List/Tree background color for the focused item when the list/tree is active
	'list.focusBackground': ['violet', 400, 40],
	// List/Tree foreground color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not
	'list.focusForeground': ['neutral', 100],
	// List/Tree foreground color of the match highlights on actively focused items when searching inside the list/tree
	'list.focusHighlightForeground': ['neutral', 100],
	// List/Tree outline color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not
	'list.focusOutline': ['violet', 400],
	// List/Tree outline color for the focused item when the list/tree is active and selected. An active list/tree has keyboard focus, an inactive does not
	'list.focusAndSelectionOutline': ['violet', 400],
	// List/Tree foreground color of the match highlights when searching inside the list/tree
	'list.highlightForeground': ['violet', 300],
	// List/Tree background when hovering over items using the mouse
	'list.hoverBackground': ['neutral', 600],
	// List/Tree foreground when hovering over items using the mouse
	'list.hoverForeground': ['neutral', 100],
	// List/Tree background color for the selected item when the list/tree is inactive
	'list.inactiveSelectionBackground': ['neutral', 600],
	// List/Tree foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not
	'list.inactiveSelectionForeground': DEFAULT,
	// List/Tree icon foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not
	'list.inactiveSelectionIconForeground': DEFAULT,
	// List background color for the focused item when the list is inactive. An active list has keyboard focus, an inactive does not. Currently only supported in lists
	'list.inactiveFocusBackground': ['neutral', 600],
	// List/Tree outline color for the focused item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not
	'list.inactiveFocusOutline': TRANSPARENT,
	// List/Tree foreground color for invalid items, for example an unresolved root in explorer
	'list.invalidItemForeground': DEFAULT,
	// Foreground color of list items containing errors
	'list.errorForeground': ['red', 500],
	// Foreground color of list items containing warnings
	'list.warningForeground': ['yellow', 400],
	// List/Tree Filter background color of typed text when searching inside the list/tree
	'listFilterWidget.background': DEFAULT,
	// List/Tree Filter Widget's outline color of typed text when searching inside the list/tree
	'listFilterWidget.outline': DEFAULT,
	// List/Tree Filter Widget's outline color when no match is found of typed text when searching inside the list/tree
	'listFilterWidget.noMatchesOutline': DEFAULT,
	// Shadow color of the type filter widget in lists and tree
	'listFilterWidget.shadow': DEFAULT,
	// Background color of the filtered matches in lists and trees
	'list.filterMatchBackground': DEFAULT,
	// Border color of the filtered matches in lists and trees
	'list.filterMatchBorder': DEFAULT,
	// List/Tree foreground color for items that are deemphasized
	'list.deemphasizedForeground': DEFAULT,
	// List/Tree drag and drop border color when moving items between items when using the mouse
	'list.dropBetweenBackground': DEFAULT,
	// Tree Widget's stroke color for indent guides
	'tree.indentGuidesStroke': ['neutral', 400],
	// Tree stroke color for the indentation guides that are not active
	'tree.inactiveIndentGuidesStroke': ['neutral', 600],
	// Tree stroke color for the indentation guides
	'tree.tableColumnsBorder': DEFAULT,
	// Background color for odd table rows
	'tree.tableOddRowsBackground': DEFAULT,
};
