import { DEFAULT } from '../../colors';

// Debug Icons colors
export const debugIcons = {
	// Icon color for breakpoints
	'debugIcon.breakpointForeground': ['red', 500],
	// Icon color for disabled breakpoints
	'debugIcon.breakpointDisabledForeground': DEFAULT,
	// Icon color for unverified breakpoints
	'debugIcon.breakpointUnverifiedForeground': ['red', 500],
	// Icon color for the current breakpoint stack frame
	'debugIcon.breakpointCurrentStackframeForeground': DEFAULT,
	// Icon color for all breakpoint stack frames
	'debugIcon.breakpointStackframeForeground': DEFAULT,
	// Debug toolbar icon for start debugging
	'debugIcon.startForeground': ['green', 400],
	// Debug toolbar icon for pause
	'debugIcon.pauseForeground': ['blue', 400],
	// Debug toolbar icon for stop
	'debugIcon.stopForeground': ['orange', 400],
	// Debug toolbar icon for disconnect
	'debugIcon.disconnectForeground': ['red', 400],
	// Debug toolbar icon for restart
	'debugIcon.restartForeground': ['green', 400],
	// Debug toolbar icon for step over
	'debugIcon.stepOverForeground': ['blue', 400],
	// Debug toolbar icon for step into
	'debugIcon.stepIntoForeground': ['cyan', 400],
	// Debug toolbar icon for step over
	'debugIcon.stepOutForeground': ['cyan', 400],
	// Debug toolbar icon for continue
	'debugIcon.continueForeground': ['blue', 400],
	// Debug toolbar icon for step back
	'debugIcon.stepBackForeground': ['blue', 400],
	// Foreground color for info messages in debug REPL console
	'debugConsole.infoForeground': ['blue', 400],
	// Foreground color for warning messages in debug REPL console
	'debugConsole.warningForeground': ['yellow', 400],
	// Foreground color for error messages in debug REPL console
	'debugConsole.errorForeground': ['red', 400],
	// Foreground color for source filenames in debug REPL console
	'debugConsole.sourceForeground': DEFAULT,
	// Foreground color for debug console input marker icon
	'debugConsoleInputIcon.foreground': ['neutral', 500],
};
