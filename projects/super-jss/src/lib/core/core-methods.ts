import {signal} from "@angular/core";
import {
    ResponsiveStyle,
    SjBreakPoints,
    SjStyle,
    SjTheme,
    SjShorthandStyle, SjShorthandCustomStyle,
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
};

const isCustomShorthandKey = (key: string): key is keyof SjShorthandCustomStyle => {
    return key === 'px' || key === 'py' || key === 'mx' || key === 'my' || key === 'bx' || key === 'by';
}

function getCssPropertiesForCustomShorthand(key: keyof SjShorthandCustomStyle): Array<keyof CSSStyleDeclaration> {
    switch (key) {
        case 'px':
            return ['paddingLeft', 'paddingRight'];
        case 'py':
            return ['paddingTop', 'paddingBottom'];
        case 'mx':
            return ['marginLeft', 'marginRight'];
        case 'my':
            return ['marginTop', 'marginBottom'];
        case 'bx':
            return ['borderLeft', 'borderRight'];
        case 'by':
            return ['borderTop', 'borderBottom'];
      // Add more cases as needed for new custom shorthand keys
        default:
            return [];
    }
}

function applySjCustomShorthand(element: HTMLElement, key: keyof SjShorthandCustomStyle, sjStyle: SjStyle, screenWidth: number, theme: SjTheme): void {
    //let cssProperties: Array<keyof CSSStyleDeclaration>;
    let cssProperties = getCssPropertiesForCustomShorthand(key);
    let cssKey = key as keyof SjShorthandCustomStyle;
    let value = sjStyle[cssKey];
    cssProperties.forEach(cssProperty => {
        const cssDeclaration: Partial<CSSStyleDeclaration> = {
            [cssProperty]: typeof value === 'string' ? value
              : typeof value === 'number' ? theme.spacing(value)
                : getStyleByScreenWidth(value as ResponsiveStyle, theme, screenWidth)
        };
        applyCssStyle(element, cssDeclaration, theme);
    });

}

function applySjStyle(element: HTMLElement, key: keyof SjStyle, sjStyle: SjStyle, screenWidth: number, theme: SjTheme): void {
    let cssKey = key as keyof CSSStyleDeclaration | keyof SjShorthandStyle;
    let value = sjStyle[cssKey];
    cssKey = shorthandMappings[cssKey] || cssKey;
    const cssDeclaration: Partial<CSSStyleDeclaration>= {[cssKey]:
          typeof value === 'string' ? value :
            typeof value === 'number' ? theme.spacing(value) :
              getStyleByScreenWidth(value as ResponsiveStyle, theme, screenWidth)
    }
    applyCssStyle(element, cssDeclaration, theme);
}

export const applyResponsiveStyle = (element: HTMLElement, sjStyle: SjStyle, screenWidth: number, theme:SjTheme): void => {
    if (typeof sjStyle === 'object' && sjStyle !== null) {
        Object.keys(sjStyle).forEach(key => {
            isCustomShorthandKey(key) ?
              applySjCustomShorthand(element, key, sjStyle, screenWidth, theme) :
              applySjStyle(element, key as keyof CSSStyleDeclaration | keyof SjShorthandStyle, sjStyle, screenWidth, theme)
        });
    }
};

const applyCssStyle = (element: HTMLElement, styleValue: Partial<CSSStyleDeclaration>, theme:SjTheme): void => {
    Object.keys(styleValue).forEach(key => {
        const cssKey = key as keyof CSSStyleDeclaration;
        // Skip read-only properties
        if (cssKey === 'length' || cssKey === 'parentRule') {
            return;
        }
        // Apply each style property to the element, using type assertion
        let value = styleValue[cssKey];
        if (value !== undefined) {
            // here is where we apply the style to the element
            if(value === 'primary.main' || value === 'primary'){
                value = theme.palette.primary.main;
            }
            if(value === 'primary.light'){
                value = theme.palette.primary.light;
            }
            if(value === 'secondary.main' || value === 'secondary'){
                value = theme.palette.secondary.main;
            }
            if(value === 'tertiary.main' || value === 'tertiary'){
                value = theme.palette.tertiary.main;
            }
            (element.style as any)[cssKey] = value;
        }
    });
};


export const applyTypography = (el: HTMLElement, theme: SjTheme, screenWidth: number) => {
    // Loop through each typography style in the theme
    if(theme.typography[el.nodeName as keyof typeof theme.typography]){
        Object.keys(theme.typography).forEach(key => {
            // Set the default style to the default typography style
            const jss: SjStyle = { marginBlockStart: '0', marginBlockEnd: '0', ...theme.typography.default };
            // Get the specific style for the current element if it exists
            const specificStyle: SjStyle | undefined = theme.typography[key as keyof typeof theme.typography];
            // If the current element matches the current typography style, apply the style to the element
            if (el.nodeName === key && specificStyle) {
                applyResponsiveStyle(el, { ...jss, ...specificStyle }, screenWidth, theme);
            }
        });
    }
};
