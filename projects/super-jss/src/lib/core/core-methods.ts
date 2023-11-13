import {signal} from "@angular/core";
import {  ResponsiveStyle, SjBreakPoints, SjStyle, SjTheme } from "../models/interfaces";

export const activeListeners = signal(false);


const defaultTheme: SjTheme = {breakpoints: {xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920, xxl: 2560}};

const sjTheme = signal(defaultTheme);


export const getCurrentBreakpoint = (breakpoints:SjBreakPoints,screenWidth: number): string => {
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



export const applyResponsiveStyle = (element: HTMLElement, sjStyle: SjStyle, screenWidth: number): void => {
    if (typeof sjStyle === 'object' && sjStyle !== null) {
        Object.keys(sjStyle).forEach(key => {
            const cssKey = key as keyof CSSStyleDeclaration;
            const value = sjStyle[cssKey];
            if (typeof value === 'string') {
                applyStyle(element, {[cssKey]: value});
            } else if (typeof value === 'object' && value !== null) {
                
                const responsiveStyle= value as ResponsiveStyle;
                const currentBreakpoint:string = getCurrentBreakpoint(sjTheme().breakpoints, screenWidth) ;
                console.log('currentBreakpoint', currentBreakpoint);
                const styleInWidth = responsiveStyle[currentBreakpoint as keyof ResponsiveStyle];
                console.log('styleInWidth', styleInWidth);
                const responsiveStyleValue: Partial<CSSStyleDeclaration> = {[cssKey]: styleInWidth};
                console.log('responsiveStyleValue', responsiveStyleValue);
                applyStyle(element, responsiveStyleValue);
            }
        });
    }
};


export const applyStyle = (element: HTMLElement, styleValue: Partial<CSSStyleDeclaration>): void => {
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

