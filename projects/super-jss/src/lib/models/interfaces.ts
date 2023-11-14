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
  xs?: string | number;
  sm?: string | number;
  md?: string | number;
  lg?: string | number;
  xl?: string | number;
  xxl?: string | number;
}


export type SjShorthandStyle = {
  p?: ResponsiveStyle | string | number; // shorthand for padding
  pt?: ResponsiveStyle | string | number; // shorthand for paddingTop
  pr?: ResponsiveStyle | string | number; // shorthand for paddingRight
  pb?: ResponsiveStyle | string | number; // shorthand for paddingBottom
  pl?: ResponsiveStyle | string | number; // shorthand for paddingLeft
  m?: ResponsiveStyle | string | number; // shorthand for margin
  mt?: ResponsiveStyle | string | number; // shorthand for marginTop
  mr?: ResponsiveStyle | string | number; // shorthand for marginRight
  mb?: ResponsiveStyle | string | number; // shorthand for marginBottom
  ml?: ResponsiveStyle | string | number; // shorthand for marginLeft
  d?: ResponsiveStyle | string | number; // shorthand for display
  fxDir?: ResponsiveStyle | string | number; // shorthand for flexDirection
  // Add other shorthand properties as needed
};


export type SjStyle = {
  [Property in keyof CSSStyleDeclaration | keyof SjShorthandStyle]?: ResponsiveStyle | string | number;
};







