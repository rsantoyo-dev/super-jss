import {
  Directive, effect,
  Input,
  OnDestroy,
  OnInit, signal,
  ViewContainerRef,
} from "@angular/core";
import {activeListeners, applyResponsiveStyle, applyTypography, getCurrentBreakpoint} from "../core/core-methods";
import { SjStyle} from "../models/interfaces";
import { SjThemeService } from "../services/sj-theme.service";

@Directive({
  selector: '[sj]'
})

export class SjDirective implements OnDestroy, OnInit {

  @Input() sj: SjStyle | undefined = {};
  breakpoint = signal('xs');
  constructor(public vcr: ViewContainerRef, private sjt: SjThemeService) {

    effect(() => {
      if(this.breakpoint()){
        applyTypography(this.vcr.element.nativeElement, sjt.sjTheme(), window.innerWidth);
        if(this.sj){
          applyResponsiveStyle(this.vcr.element.nativeElement, this.sj, window.innerWidth, sjt.sjTheme());
        }
      }
    })
  }

  ngOnInit() {
   // if (!activeListeners()) {
      window.addEventListener('resize', () => this.updateRender());
      window.addEventListener('load', () => this.updateRender());
      activeListeners.set(true);
   // }
  }
  updateRender(){
    this.breakpoint.set(getCurrentBreakpoint(this.sjt.sjTheme().breakpoints, window.innerWidth))
  }
  ngOnDestroy() {
    if(activeListeners()) {
      window.removeEventListener('resize', this.updateRender);
      window.removeEventListener('load', this.updateRender);
    }
  }
}
