export type ThemeContext = { name: string; type: 'dark' | 'light' };
export type ThemeType = ThemeContext['type'];

// TODO: think 'bout it

let themeType: ThemeType = 'dark';

export const setThemeType = (type: ThemeType) => (themeType = type);
export const getThemeType = () => themeType;

export class ThemeContextManager {
	private themeType: ThemeType;

	constructor(initialType: ThemeType = 'dark') {
		this.themeType = initialType;
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
}
