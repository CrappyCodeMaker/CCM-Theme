import { Default } from '../colors';

export type Token = {
	scope: string | string[];
	settings: {
		foreground?: string | [string, number] | [string, number, number];
		[key: string]: any;
	};
	[key: string]: any;
};

export type NestedObject = { [key: string]: NestedObject | Default | string | [string, number] | [string, number, number] | undefined };
