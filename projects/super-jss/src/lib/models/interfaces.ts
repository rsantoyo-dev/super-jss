export type SjTheme = {
  breakpoints: SjBreakPoints;
  spacing: (factor: number) => string
}

export type SjBreakPoints= {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
}

export type ResponsiveStyle = {
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  xxl?: string;
}

export type SjStyle = {
  [Property in keyof CSSStyleDeclaration]?: ResponsiveStyle | string | number;
};






