import type { Default, HexColor, HexOpacity, OpacityLevel, Shade } from './types';

// #region DEFAULTS

export const TRANSPARENT: HexColor = '#0000';
export const DEFAULT: Default = 'default';
export const TESTER: HexColor = '#f009';
export const SHADES: Shade[] = [900, 800, 700, 600, 500, 400, 300, 200, 100, 50];
export const OPACITY_LVL: OpacityLevel[] = [90, 80, 70, 60, 50, 40, 30, 20, 10];
export const OPACITY_VALUE: HexOpacity[] = ['E6', 'CC', 'B3', '99', '80', '66', '4D', '33', '1A'];

// #endregion DEFAULTS

const fallback: HexOpacity = 'FF';
export const opacityLevelMap = new Map<OpacityLevel, HexOpacity>(OPACITY_LVL.map((lvl, idx) => [lvl, OPACITY_VALUE?.[idx] ?? fallback]));
