import {signal} from "@angular/core";
import { Breakpoints, ResponsiveStyle } from "../models/interfaces";

export const activeListeners = signal(false);


export interface SjTheme {
    breakpoints: Breakpoints;
}

const defaultTheme = {breakpoints: {xs: '0px', sm: '600px', md: '960px', lg: '1280px', xl: '1920px'}};

const sjTheme = signal(defaultTheme);
export const getCurrentBreakpoint = (screenWidth: number): string => {
    const breakpoints = sjTheme().breakpoints;
    if (screenWidth >= parseInt(breakpoints.xl)) {
        return 'xl';
    } else if (screenWidth >= parseInt(breakpoints.lg)) {
        return 'lg';
    } else if (screenWidth >= parseInt(breakpoints.md)) {
        return 'md';
    } else if (screenWidth >= parseInt(breakpoints.sm)) {
        return 'sm';
    } else {
        return 'xs';
    }

}

export const currentBreakpoint = getCurrentBreakpoint(0);

const getBreakpointStyleValue = (breakpoints: Breakpoints, currentBreakpoint: string): string | undefined => {
    // This function assumes that if a value for a larger breakpoint is defined, 
    // it applies to smaller sizes unless overridden by a smaller breakpoint.
    const bpOrder = ['xs', 'sm', 'md', 'lg', 'xl'];
    let selectedValue: string | undefined;

    bpOrder.forEach(bp => {
        if (breakpoints[bp as keyof Breakpoints] !== undefined && currentBreakpoint >= bp) {
            selectedValue = breakpoints[bp as keyof Breakpoints];
        }
    });

    return selectedValue;
};


export const applyResponsiveStyle = (element: HTMLElement, sjStyle: Partial<CSSStyleDeclaration> | ResponsiveStyle, screenWidth: number): void => {
    console.log('applyResponsiveStyle', element, sjStyle, screenWidth);
    const currentBreakpoint = getCurrentBreakpoint(screenWidth);
    if (typeof sjStyle === 'object' && sjStyle !== null) {
        Object.keys(sjStyle).forEach(key => {
            const cssKey = key as keyof CSSStyleDeclaration;
            const value = sjStyle[cssKey];
            if (typeof value === 'string') {
                applyStyle(element, {[cssKey]: value}, screenWidth);
            } else if (typeof value === 'object' && value !== null) {
                const responsiveValue = value as Breakpoints; // Cast value to Breakpoints for clarity
                const breakpointValue = getBreakpointStyleValue(responsiveValue, currentBreakpoint);
                if (breakpointValue !== undefined) {
                    applyStyle(element, {[cssKey]: breakpointValue}, screenWidth);
                }
            }
        });
    }
   
}

export const applyStyle = (element: HTMLElement, styleValue: Partial<CSSStyleDeclaration>, screenWidth: number): void => {
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

