import { DEFAULT } from '../../colors';

export const gitDecoration = {
	// Color for added Git resources. Used for file labels and the SCM viewlet
	'gitDecoration.addedResourceForeground': ['green', 600],
	// Color for modified Git resources. Used for file labels and the SCM viewlet
	'gitDecoration.modifiedResourceForeground': ['violet', 300],
	// Color for deleted Git resources. Used for file labels and the SCM viewlet
	'gitDecoration.deletedResourceForeground': ['red', 400],
	// Color for renamed or copied Git resources. Used for file labels and the SCM viewlet
	'gitDecoration.renamedResourceForeground': ['green', 300],
	// Color for staged modifications git decorations. Used for file labels and the SCM viewlet
	'gitDecoration.stageModifiedResourceForeground': ['violet', 400],
	// Color for staged deletions git decorations. Used for file labels and the SCM viewlet
	'gitDecoration.stageDeletedResourceForeground': ['red', 500],
	// Color for untracked Git resources. Used for file labels and the SCM viewlet
	'gitDecoration.untrackedResourceForeground': ['green', 400],
	// Color for ignored Git resources. Used for file labels and the SCM viewlet
	'gitDecoration.ignoredResourceForeground': ['neutral', 500],
	// Color for conflicting Git resources. Used for file labels and the SCM viewlet
	'gitDecoration.conflictingResourceForeground': ['yellow', 300],
	// Color for submodule resources
	'gitDecoration.submoduleResourceForeground': DEFAULT,

	// Gutter Decoration
	// Color for modified line of code
	'editorGutter.modifiedBackground': ['violet', 400],
	// Color for new added line of code
	'editorGutter.addedBackground': ['green', 400],
	// Color for deleted line of code
	'editorGutter.deletedBackground': ['red', 400],
};
