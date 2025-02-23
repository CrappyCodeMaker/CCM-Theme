/**
 * Represents the available theme types.
 */
export type ThemeType = 'dark' | 'light';
export type ThemeDescriptor = { name: string; type: ThemeType };

/**
 * Manages the current theme context including the theme type and the testUnsetMode flag.
 */
export class ThemeState {
	private themeType: ThemeType;
	private testUnsetMode: boolean;

	/**
	 * Creates an instance of ThemeState.
	 * @param initialType - The initial theme type. Defaults to 'dark'.
	 * @param initialTestUnsetMode - The initial testUnsetMode flag. Defaults to false.
	 */
	constructor(initialType: ThemeType = 'dark', initialTestUnsetMode: boolean = false) {
		this.themeType = initialType;
		this.testUnsetMode = initialTestUnsetMode;
	}

	/**
	 * Sets the current theme type.
	 * @param type - The new theme type ('dark' or 'light').
	 */
	public setThemeType(type: ThemeType): void {
		this.themeType = type;
	}

	/**
	 * Returns the current theme type.
	 * @returns The current theme type.
	 */
	public getThemeType(): ThemeType {
		return this.themeType;
	}

	/**
	 * Sets the testUnsetMode flag.
	 * @param flag - A boolean indicating if testUnsetMode is enabled.
	 */
	public setTestUnsetMode(flag: boolean): void {
		this.testUnsetMode = flag;
	}

	/**
	 * Returns the current testUnsetMode flag.
	 * @returns A boolean indicating if testUnsetMode is enabled.
	 */
	public getTestUnsetMode(): boolean {
		return this.testUnsetMode;
	}
}
