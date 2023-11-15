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
  //padding margin
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

  // sizes
  w?: ResponsiveStyle | string | number; // shorthand for width
  h?: ResponsiveStyle | string | number; // shorthand for height
  minW?: ResponsiveStyle | string | number; // shorthand for minWidth
  minH?: ResponsiveStyle | string | number; // shorthand for minHeight
  maxW?: ResponsiveStyle | string | number; // shorthand for maxWidth
  maxH?: ResponsiveStyle | string | number; // shorthand for maxHeight

  // borders
  b?: ResponsiveStyle | string | number; // shorthand for border
  bt?: ResponsiveStyle | string | number; // shorthand for borderTop
  br?: ResponsiveStyle | string | number; // shorthand for borderRight
  bb?: ResponsiveStyle | string | number; // shorthand for borderBottom
  bl?: ResponsiveStyle | string | number; // shorthand for borderLeft
  bx?: ResponsiveStyle | string | number; // shorthand for borderLeft and borderRight
  by?: ResponsiveStyle | string | number; // shorthand for borderTop and borderBottom
  bs?: ResponsiveStyle | string | number; // shorthand for borderStyle
  bw?: ResponsiveStyle | string | number; // shorthand for borderWidth
  bc?: ResponsiveStyle | string | number; // shorthand for borderColor
  brad?: ResponsiveStyle | string | number; // shorthand for borderRadius

  // colors
  bg?: ResponsiveStyle | string | number; // shorthand for backgroundColor
  c?: ResponsiveStyle | string | number; // shorthand for color

  //flexbox
  d?: ResponsiveStyle | string | number; // shorthand for display
  fxDir?: ResponsiveStyle | string | number; // shorthand for flexDirection
  fxWrap?: ResponsiveStyle | string | number; // shorthand for flexWrap
  fxFlow?: ResponsiveStyle | string | number; // shorthand for flexFlow
  fxJustify?: ResponsiveStyle | string | number; // shorthand for justifyContent
  fxAItems?: ResponsiveStyle | string | number; // shorthand for alignItems
  fxAContent?: ResponsiveStyle | string | number; // shorthand for alignContent
  fxOrder?: ResponsiveStyle | string | number; // shorthand for order
  fxGrow?: ResponsiveStyle | string | number; // shorthand for flexGrow
  fxShrink?: ResponsiveStyle | string | number; // shorthand for flexShrink
  fxBasis?: ResponsiveStyle | string | number; // shorthand for flexBasis
  fxASelf?: ResponsiveStyle | string | number; // shorthand for alignSelf
};


export type SjStyle = {
  [Property in keyof CSSStyleDeclaration | keyof SjShorthandStyle] ? : ResponsiveStyle | string | number;
};







