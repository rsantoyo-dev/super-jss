import {
  computed,
  Directive, effect,
  Input,
  OnDestroy,
  OnInit, signal,
  ViewContainerRef,
} from "@angular/core";
import {activeListeners, applyResponsiveStyle, applyTypography, getCurrentBreakpoint} from "../core/core-methods";
import { SjStyle} from "../models/interfaces";
import { SjThemeServiceService } from "../services/sj-theme-service.service";

@Directive({
  standalone: true,
  selector: '[sj]'
})

export class SjDirective implements OnDestroy, OnInit {

  @Input() sj: SjStyle | undefined = {};

  screenWidth = signal(0);

  breakpoint = computed(() =>
    getCurrentBreakpoint(this.sjt.sjTheme().breakpoints, this.screenWidth())
  );

  currentBreakpoint = '';

  constructor(public vcr: ViewContainerRef, private sjt: SjThemeServiceService) {
    effect(() => {
      if(this.currentBreakpoint !== this.breakpoint()) {
        applyTypography(this.vcr.element.nativeElement, sjt.sjTheme(), this.screenWidth());
        if(this.sj){
          applyResponsiveStyle(this.vcr.element.nativeElement, this.sj, this.screenWidth(), sjt.sjTheme());
        }
        this.currentBreakpoint = this.breakpoint();
      }
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
