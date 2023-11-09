import { Directive, Input, ViewContainerRef, effect } from '@angular/core';

import {
  activeListeners,
  applyStylesToElement,
  applyTypography,
  onResize
} from './helpers';

import { sjTheme, sjInnerWidth } from './public-api';
import { SJss } from '../model';

@Directive({
  standalone: true,
  selector: "[sj]"
})
export class SuperJssDirective {

  @Input() sj: SJss = {};

  constructor(private vcr: ViewContainerRef) {
    // Apply typography and styles to the element
    effect(() => {
      const el: HTMLElement = this.vcr.element.nativeElement;
      applyTypography(el, sjTheme(), sjInnerWidth());
      applyStylesToElement(el, this.sj, sjTheme(), sjInnerWidth());
    });

    // Add a listener for window resize events
    effect(() => {
      onResize(sjTheme())
    }, { allowSignalWrites: true });

    // Add window resize and load event listeners if they don't exist
    if (!activeListeners()) {
      activeListeners.set(true);
      window.addEventListener('resize', () => onResize(sjTheme()));
      window.addEventListener('load', () => onResize(sjTheme()));
    }
  }

  // Remove event listeners on destroy
  ngOnDestroy(): void {
    window.removeEventListener('resize', () => onResize(sjTheme()));
    window.removeEventListener('load', () => onResize(sjTheme()));
  }
}
