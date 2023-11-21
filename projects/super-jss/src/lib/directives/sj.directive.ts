import {
  Directive, effect,
  Input,
  OnDestroy,
  OnInit,
  ViewContainerRef,
} from "@angular/core";
import {applyResponsiveStyle, applyTypography} from "../core/core-methods";
import { SjStyle} from "../models/interfaces";
import {SjThemeService} from "../services";


@Directive({
  selector: '[sj]'
})

export class SjDirective implements OnDestroy, OnInit {

  @Input() sj: SjStyle | SjStyle[] | undefined;

  constructor(public vcr: ViewContainerRef, private sjt: SjThemeService) {

    effect(() => {
      if(this.sjt.currentBreakpoint()){
        applyTypography(this.vcr.element.nativeElement, sjt.sjTheme(), window.innerWidth);
        if(this.sj){
          if(Array.isArray(this.sj)){
            this.sj.forEach(style => applyResponsiveStyle(this.vcr.element.nativeElement, style as SjStyle, window.innerWidth, this.sjt.sjTheme()));
          }
          else{
            applyResponsiveStyle(this.vcr.element.nativeElement, this.sj as SjStyle, window.innerWidth, this.sjt.sjTheme());
          }
        }
      }
    })
  }

  ngOnInit() {
   // if (!activeListeners()) {
     /* window.addEventListener('resize', () => this.updateRender());
      window.addEventListener('load', () => this.updateRender());
      activeListeners.set(true);*/
   // }
  }
/*  updateRender(){
    this.breakpoint.set(getCurrentBreakpoint(this.sjt.sjTheme().breakpoints, window.innerWidth))
  }*/
  ngOnDestroy() {
    /*if(activeListeners()) {
      window.removeEventListener('resize', this.updateRender);
      window.removeEventListener('load', this.updateRender);
    }*/
  }
}
