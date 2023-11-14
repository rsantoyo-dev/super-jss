import {signal} from "@angular/core";
import {  ResponsiveStyle, SjBreakPoints, SjStyle, SjTheme } from "../models/interfaces";

export const activeListeners = signal(false);

const defaultTheme: SjTheme = {
    breakpoints: {xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920, xxl: 2560},
    spacing: (factor: number): string => `${factor * 0.8}rem`
};

const sjTheme = signal(defaultTheme);
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
    return responsiveStyle[currentBreakpoint as keyof ResponsiveStyle];
}

const applyStyle = (element: HTMLElement, styleValue: Partial<CSSStyleDeclaration>): void => {
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

export const applyResponsiveStyle = (element: HTMLElement, sjStyle: SjStyle, screenWidth: number): void => {
    if (typeof sjStyle === 'object' && sjStyle !== null) {
        Object.keys(sjStyle).forEach(key => {
            const cssKey = key as keyof CSSStyleDeclaration;
            const value = sjStyle[cssKey];
            applyStyle(element, {[cssKey]:
                typeof value === 'string' ? value : getStyleByScreenWidth(value as ResponsiveStyle, sjTheme(), screenWidth)
            });
        });
    }
};
