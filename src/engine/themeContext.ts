export type ThemeContext = { name: string; type: 'dark' | 'light' };
type ThemeType = ThemeContext['type'];

let themeType: ThemeType = 'dark';

export const setThemeType = (type: ThemeType) => (themeType = type);
export const getThemeType = () => themeType;
