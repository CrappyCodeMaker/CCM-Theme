import { DEFAULT, TRANSPARENT } from '../../colors';

export const debug = {
	// Debug toolbar background color
	'debugToolBar.background': ['neutral', 700],
	// Debug toolbar border color
	'debugToolBar.border': TRANSPARENT,
	// Background color of the top stack frame highlight in the editor
	'editor.stackFrameHighlightBackground': DEFAULT,
	// Background color of the focused stack frame highlight in the editor
	'editor.focusedStackFrameHighlightBackground': DEFAULT,
	// Color for the debug inline value text
	'editor.inlineValuesForeground': DEFAULT,
	// Color for the debug inline value background
	'editor.inlineValuesBackground': DEFAULT,
	// Foreground color for a label shown in the CALL STACK view when the debugger breaks on an exception
	'debugView.exceptionLabelForeground': DEFAULT,
	// Background color for a label shown in the CALL STACK view when the debugger breaks on an exception
	'debugView.exceptionLabelBackground': DEFAULT,
	// Foreground color for a label in the CALL STACK view showing the current session's or thread's state
	'debugView.stateLabelForeground': DEFAULT,
	// Background color for a label in the CALL STACK view showing the current session's or thread's state
	'debugView.stateLabelBackground': DEFAULT,
	// Color used to highlight value changes in the debug views (such as in the Variables view)
	'debugView.valueChangedHighlight': DEFAULT,
	// Foreground color for the token names shown in debug views (such as in the Variables or Watch view)
	'debugTokenExpression.name': DEFAULT,
	// Foreground color for the token values shown in debug views
	'debugTokenExpression.value': DEFAULT,
	// Foreground color for strings in debug views
	'debugTokenExpression.string': DEFAULT,
	// Foreground color for booleans in debug views
	'debugTokenExpression.boolean': DEFAULT,
	// Foreground color for numbers in debug views
	'debugTokenExpression.number': DEFAULT,
	// Foreground color for expression errors in debug views
	'debugTokenExpression.error': DEFAULT,
	// Foreground color for the token types shown in the debug views (ie. the Variables or Watch view)
	'debugTokenExpression.type': DEFAULT,
};
