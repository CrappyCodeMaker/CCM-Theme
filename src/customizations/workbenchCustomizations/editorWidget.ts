// The Editor widget is shown in front of the editor content. Examples are the Find/Replace dialog, the suggestion widget, and the editor hover
// The Debug Exception widget is a peek view that shows in the editor when debug stops at an exception

import { DEFAULT, TRANSPARENT } from '../../colors';

export const editorWidget = {
	// Foreground color of editor widgets, such as find/replace
	'editorWidget.foreground': ['neutral', 300],
	// Background color of editor widgets, such as Find/Replace
	'editorWidget.background': ['neutral', 700],
	// Border color of the editor widget unless the widget does not contain a border or defines its own border color
	'editorWidget.border': ['neutral', 900],
	// Border color of the resize bar of editor widgets. The color is only used if the widget chooses to have a resize border and if the color is not overridden by a widget
	'editorWidget.resizeBorder': ['violet', 400],
	// Background color of the suggestion widget
	'editorSuggestWidget.background': ['neutral', 800],
	// Border color of the suggestion widget
	'editorSuggestWidget.border': ['neutral', 900],
	// Foreground color of the suggestion widget
	'editorSuggestWidget.foreground': ['neutral', 300],
	// Color of the match highlights in the suggest widget when an item is focused
	'editorSuggestWidget.focusHighlightForeground': ['violet', 400],
	// Color of the match highlights in the suggestion widget
	'editorSuggestWidget.highlightForeground': ['violet', 200],
	// Background color of the selected entry in the suggestion widget
	'editorSuggestWidget.selectedBackground': ['neutral', 600],
	// Foreground color of the selected entry in the suggest widget
	'editorSuggestWidget.selectedForeground': ['neutral', 100],
	// Icon foreground color of the selected entry in the suggest widget
	'editorSuggestWidget.selectedIconForeground': ['neutral', 100],
	// Foreground color of the suggest widget status
	'editorSuggestWidgetStatus.foreground': DEFAULT,
	// Foreground color of the editor hover
	'editorHoverWidget.foreground': DEFAULT,
	// Background color of the editor hover
	'editorHoverWidget.background': ['neutral', 800],
	// Border color of the editor hover
	'editorHoverWidget.border': ['neutral', 900],
	// Foreground color of the active item in the parameter hint
	'editorHoverWidget.highlightForeground': DEFAULT,
	// Background color of the editor hover status bar
	'editorHoverWidget.statusBarBackground': DEFAULT,
	// Border color of the ghost text shown by inline completion providers and the suggest preview
	'editorGhostText.border': DEFAULT,
	// Background color of the ghost text in the editor
	'editorGhostText.background': DEFAULT,
	// Foreground color of the ghost text shown by inline completion providers and the suggest preview
	'editorGhostText.foreground': ['neutral', 500],
	// Editor sticky scroll background color
	'editorStickyScroll.background': ['neutral', 700],
	// Border color of sticky scroll in the editor
	'editorStickyScroll.border': TRANSPARENT,
	// Shadow color of sticky scroll in the editor
	'editorStickyScroll.shadow': ['neutral', 900, 30],
	// Editor sticky scroll on hover background color
	'editorStickyScrollHover.background': ['neutral', 600],
	// Exception widget background color
	'debugExceptionWidget.background': DEFAULT,
	// Exception widget border color
	'debugExceptionWidget.border': DEFAULT,
	// Editor marker navigation widget background
	'editorMarkerNavigation.background': DEFAULT,
	// Editor marker navigation widget error color
	'editorMarkerNavigationError.background': DEFAULT,
	// Editor marker navigation widget warning color
	'editorMarkerNavigationWarning.background': DEFAULT,
	// Editor marker navigation widget info color
	'editorMarkerNavigationInfo.background': DEFAULT,
	// Editor marker navigation widget error heading background
	'editorMarkerNavigationError.headerBackground': DEFAULT,
	// Editor marker navigation widget warning heading background
	'editorMarkerNavigationWarning.headerBackground': DEFAULT,
	// Editor marker navigation widget info heading background
	'editorMarkerNavigationInfo.headerBackground': DEFAULT,
};
