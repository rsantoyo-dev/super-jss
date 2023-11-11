import { ScreenSize } from "../models/interfaces";
import {signal} from "@angular/core";

export const activeListeners = signal(false);



export const applyStyle = (element: HTMLElement, styleValue: Partial<CSSStyleDeclaration>, screenSize: ScreenSize): void => {

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

