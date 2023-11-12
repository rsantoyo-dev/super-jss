

export interface Breakpoints {
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  // Add more breakpoints as angular material does
}

export type ResponsiveStyle = {
  [Property in keyof CSSStyleDeclaration]?: Breakpoints | string;
};





