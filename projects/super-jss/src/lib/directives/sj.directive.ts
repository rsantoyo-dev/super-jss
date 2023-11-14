import {
  Directive, effect,
  Input,
  OnDestroy,
  OnInit, signal,
  ViewContainerRef,
} from "@angular/core";
import {activeListeners, applyResponsiveStyle} from "../core/core-methods";
import {SjStyle, SjTheme} from "../models/interfaces";

const defaultTheme: SjTheme = {
  breakpoints: {xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920, xxl: 2560},
  spacing: (factor: number): string => `${factor * 0.8}rem`
};
const sjTheme = signal(defaultTheme)

@Directive({
  standalone: true,
  selector: '[sj]'
})

export class SjDirective implements OnDestroy, OnInit {

    @Input() sj: SjStyle = {};
    screenWidth = signal(window.innerWidth);
    constructor(public vcr: ViewContainerRef) {
      effect(() => {
        applyResponsiveStyle(this.vcr.element.nativeElement, this.sj, this.screenWidth(), sjTheme());
      })
    }
    ngOnInit() {
      if (!activeListeners()) {
        window.addEventListener('resize', () => this.screenWidth.set(window.innerWidth));
        window.addEventListener('load', () => this.screenWidth.set(window.innerWidth));
        activeListeners.set(true);
      }
    }
    ngOnDestroy() {
      if(activeListeners()) {
        window.removeEventListener('resize', this.screenWidth);
        window.removeEventListener('load', this.screenWidth);
      }
    }
  }
