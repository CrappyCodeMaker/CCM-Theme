import { DEFAULT, TRANSPARENT } from '../../colors';

// For coloring inserted and removed text, use either a background or a border color but not both
export const diffEditor = {
	// Background color for text that got inserted. The color must not be opaque so as not to hide underlying decorations
	'diffEditor.insertedTextBackground': ['green', 500, 10],
	// Outline color for the text that got inserted
	'diffEditor.insertedTextBorder': TRANSPARENT,
	// Background color for text that got removed. The color must not be opaque so as not to hide underlying decorations
	'diffEditor.removedTextBackground': ['red', 500, 10],
	// Outline color for text that got removed
	'diffEditor.removedTextBorder': TRANSPARENT,
	// Border color between the two text editors
	'diffEditor.border': TRANSPARENT,
	// Color of the diff editor's diagonal fill. The diagonal fill is used in side-by-side diff views
	'diffEditor.diagonalFill': ['neutral', 500],
	// Background color for lines that got inserted. The color must not be opaque so as not to hide underlying decorations
	'diffEditor.insertedLineBackground': ['green', 500, 10],
	// Background color for lines that got removed. The color must not be opaque so as not to hide underlying decorations
	'diffEditor.removedLineBackground': ['red', 500, 10],
	// Background color for the margin where lines got inserted
	'diffEditorGutter.insertedLineBackground': TRANSPARENT,
	// Background color for the margin where lines got removed
	'diffEditorGutter.removedLineBackground': TRANSPARENT,
	// Diff overview ruler foreground for inserted content
	'diffEditorOverview.insertedForeground': DEFAULT,
	// Diff overview ruler foreground for removed content
	'diffEditorOverview.removedForeground': DEFAULT,
	// The color of unchanged blocks in diff editor
	'diffEditor.unchangedRegionBackground': DEFAULT,
	// The foreground color of unchanged blocks in the diff editor
	'diffEditor.unchangedRegionForeground': DEFAULT,
	// The color of the shadow around unchanged region widgets
	'diffEditor.unchangedRegionShadow': DEFAULT,
	// The background color of unchanged code in the diff editor`
	'diffEditor.unchangedCodeBackground': DEFAULT,
	// The border color for text that got moved in the diff editor
	'diffEditor.move.border': DEFAULT,
	// The active border color for text that got moved in the diff editor
	'diffEditor.moveActive.border': DEFAULT,
	// The background color of the diff editor's header
	'multiDiffEditor.headerBackground': DEFAULT,
	// The background color of the multi file diff editor
	'multiDiffEditor.background': DEFAULT,
	// The border color of the multi file diff editor
	'multiDiffEditor.border': DEFAULT,
};
