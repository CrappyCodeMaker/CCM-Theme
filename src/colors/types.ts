import { colorsDark, colorsLight, opacityLevel } from './constants';

export type HexColor = `#${string}`;
type ColorsDark = keyof typeof colorsDark;
type ColorsLight = keyof typeof colorsLight;
export type Color = ColorsDark | ColorsLight;
export type Shade = keyof (typeof colorsDark)['neutral'];
export type OpacityLevel = keyof typeof opacityLevel;
export type NestedObject = { [key: string]: string | undefined | NestedObject };
