import { DEFAULT } from '../../colors';

// TODO: fix some colors
export const terminal = {
	// The background of the Integrated Terminal's viewport
	'terminal.background': ['neutral', 700],
	// The color of the border that separates split panes within the terminal. This defaults to panel.border
	'terminal.border': DEFAULT,
	// The default foreground color of the Integrated Terminal
	'terminal.foreground': ['neutral', 200],

	// 'Black' ANSI color in the terminal
	'terminal.ansiBlack': ['neutral', 600],
	// 'Blue' ANSI color in the terminal
	'terminal.ansiBlue': ['blue', 400],
	// 'Cyan' ANSI color in the terminal
	'terminal.ansiCyan': ['cyan', 400],
	// 'Green' ANSI color in the terminal
	'terminal.ansiGreen': ['green', 400],
	// 'Magenta' ANSI color in the terminal
	'terminal.ansiMagenta': ['magenta', 400],
	// 'Red' ANSI color in the terminal
	'terminal.ansiRed': ['red', 400],
	// 'White' ANSI color in the terminal
	'terminal.ansiWhite': ['neutral', 300],
	// 'Yellow' ANSI color in the terminal
	'terminal.ansiYellow': ['yellow', 400],

	// 'BrightBlack' ANSI color in the terminal
	'terminal.ansiBrightBlack': ['neutral', 500],
	// 'BrightBlue' ANSI color in the terminal
	'terminal.ansiBrightBlue': ['blue', 300],
	// 'BrightCyan' ANSI color in the terminal
	'terminal.ansiBrightCyan': ['cyan', 300],
	// 'BrightGreen' ANSI color in the terminal
	'terminal.ansiBrightGreen': ['green', 300],
	// 'BrightMagenta' ANSI color in the terminal
	'terminal.ansiBrightMagenta': ['magenta', 300],
	// 'BrightRed' ANSI color in the terminal
	'terminal.ansiBrightRed': ['red', 300],
	// 'BrightWhite' ANSI color in the terminal
	'terminal.ansiBrightWhite': ['neutral', 200],
	// 'BrightYellow' ANSI color in the terminal
	'terminal.ansiBrightYellow': ['yellow', 300],

	// The selection background color of the terminal
	'terminal.selectionBackground': ['neutral', 200, 10],
	// The selection foreground color of the terminal. When this is null the selection foreground will be retained and have the minimum contrast ratio feature applied
	'terminal.selectionForeground': DEFAULT,
	// The selection background color of the terminal when it does not have focus
	'terminal.inactiveSelectionBackground': ['neutral', 400, 10],

	// Color of the current search match in the terminal. The color must not be opaque so as not to hide underlying terminal content
	'terminal.findMatchBackground': DEFAULT,
	// Border color of the current search match in the terminal
	'terminal.findMatchBorder': DEFAULT,
	// Color of the other search matches in the terminal. The color must not be opaque so as not to hide underlying terminal content
	'terminal.findMatchHighlightBackground': DEFAULT,
	// Border color of the other search matches in the terminal
	'terminal.findMatchHighlightBorder': DEFAULT,
	// Color of the highlight when hovering a link in the terminal
	'terminal.hoverHighlightBackground': ['neutral', 600, 90],

	// The background color of the terminal cursor. Allows customizing the color of a character overlapped by a block cursor
	'terminalCursor.background': DEFAULT,
	// The foreground color of the terminal cursor
	'terminalCursor.foreground': ['yellow', 400],

	// The background color when dragging on top of terminals. The color should have transparency so that the terminal contents can still shine through
	'terminal.dropBackground': ['neutral', 200, 10],
	// Border on the side of the terminal tab in the panel. This defaults to tab.activeBorder
	'terminal.tab.activeBorder': ['green', 400],

	// The default terminal command decoration background color
	'terminalCommandDecoration.defaultBackground': DEFAULT,
	// The terminal command decoration background color for successful commands
	'terminalCommandDecoration.successBackground': DEFAULT,
	// The terminal command decoration background color for error commands
	'terminalCommandDecoration.errorBackground': DEFAULT,
	// The overview ruler cursor color
	'terminalOverviewRuler.cursorForeground': DEFAULT,
	// Overview ruler marker color for find matches in the terminal
	'terminalOverviewRuler.findMatchForeground': DEFAULT,
	// The background color of the sticky scroll overlay in the terminal
	'terminalStickyScroll.background': DEFAULT,
	// The border of the sticky scroll overlay in the terminal
	'terminalStickyScroll.border': DEFAULT,
	// The background color of the sticky scroll overlay in the terminal when hovered
	'terminalStickyScrollHover.background': DEFAULT,
	// Foreground color of the terminal initial hint
	'terminal.initialHintForeground': DEFAULT,
};
