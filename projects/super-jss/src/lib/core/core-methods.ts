import {signal} from "@angular/core";
import {
    ResponsiveStyle,
    SjBreakPoints,
    SjStyle,
    SjTheme,
    SjShorthandStyle,
} from "../models/interfaces";

export const activeListeners = signal(false);
const getCurrentBreakpoint = (breakpoints:SjBreakPoints,screenWidth: number): string => {
    let bp = 'xs'
    for (const key of Object.keys(breakpoints)) {
        const breakpoint = key as keyof SjBreakPoints;
        const breakpointValue = breakpoints[breakpoint];
        if (breakpointValue <= screenWidth) {
            bp = key
        }
    }
    return bp;
}

const getStyleByScreenWidth = (value: ResponsiveStyle, sjTheme:SjTheme, screenWidth: number): string | undefined => {
    const responsiveStyle= value;
    const currentBreakpoint:string = getCurrentBreakpoint(sjTheme.breakpoints, screenWidth) ;
    let styleInBreakpoint: string | number | undefined;
    styleInBreakpoint = responsiveStyle[currentBreakpoint as keyof ResponsiveStyle];
    if(typeof styleInBreakpoint === 'number'){
        styleInBreakpoint = sjTheme.spacing(styleInBreakpoint);
    }
    return styleInBreakpoint;
}

const applyStyle = (element: HTMLElement, styleValue: Partial<CSSStyleDeclaration>): void => {
    console.log(styleValue)
    Object.keys(styleValue).forEach(key => {
        const cssKey = key as keyof CSSStyleDeclaration;
        // Skip read-only properties
        if (cssKey === 'length' || cssKey === 'parentRule') {
            return;
        }
        // Apply each style property to the element, using type assertion
        const value = styleValue[cssKey];
        if (value !== undefined) {
            (element.style as any)[cssKey] = value;
        }
    });
};

const shorthandMappings: { [key: string]: keyof CSSStyleDeclaration } = {
    // Padding and Margin
    p: 'padding',
    pt: 'paddingTop',
    pr: 'paddingRight',
    pb: 'paddingBottom',
    pl: 'paddingLeft',
    m: 'margin',
    mt: 'marginTop',
    mr: 'marginRight',
    mb: 'marginBottom',
    ml: 'marginLeft',

    // Sizes
    w: 'width',
    h: 'height',
    minW: 'minWidth',
    minH: 'minHeight',
    maxW: 'maxWidth',
    maxH: 'maxHeight',

    // Borders
    b: 'border',
    bt: 'borderTop',
    br: 'borderRight',
    bb: 'borderBottom',
    bl: 'borderLeft',
    bs: 'borderStyle',
    bw: 'borderWidth',
    bc: 'borderColor',
    brad: 'borderRadius',

    // Colors
    bg: 'backgroundColor',
    c: 'color',

    // Flexbox
    d: 'display',
    fxDir: 'flexDirection',
    fxWrap: 'flexWrap',
    fxFlow: 'flexFlow',
    fxJustify: 'justifyContent',
    fxAItems: 'alignItems',
    fxAContent: 'alignContent',
    fxOrder: 'order',
    fxGrow: 'flexGrow',
    fxShrink: 'flexShrink',
    fxBasis: 'flexBasis',
    fxASelf: 'alignSelf',
    // Skip px, py, mx, my, bx, by for now
    // Add other shorthand mappings as needed
};

export const applyResponsiveStyle = (element: HTMLElement, sjStyle: SjStyle, screenWidth: number, theme:SjTheme): void => {
    if (typeof sjStyle === 'object' && sjStyle !== null) {
        Object.keys(sjStyle).forEach(key => {
            let cssKey = key as keyof CSSStyleDeclaration | keyof SjShorthandStyle;
            let value = sjStyle[cssKey];

            cssKey = shorthandMappings[cssKey] || cssKey;
            const cssDeclaration: Partial<CSSStyleDeclaration>= {[cssKey]:
                  typeof value === 'string' ? value :
                  typeof value === 'number' ? theme.spacing(value) :
                  getStyleByScreenWidth(value as ResponsiveStyle, theme, screenWidth)
            }
            applyStyle(element, cssDeclaration);
        });
    }
};
