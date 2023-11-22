import {
  Directive, effect,
  Input, OnChanges, SimpleChanges,
  ViewContainerRef,
} from "@angular/core";
import {applyResponsiveStyle, applyTypography} from "../core/core-methods";
import { SjStyle} from "../models/interfaces";
import {SjThemeService} from "../services";


@Directive({
  selector: '[sj]'
})

export class SjDirective implements OnChanges{

  @Input() sj: SjStyle | SjStyle[] | undefined;

  constructor(public vcr: ViewContainerRef, private sjt: SjThemeService) {

    effect(() => {
      if(this.sjt.currentBreakpoint()){
        this.renderStyles();
      }
    })
  }

  renderStyles(){
    applyTypography(this.vcr.element.nativeElement, this.sjt.sjTheme(), window.innerWidth);
    if(this.sj){

      if(Array.isArray(this.sj)){
        this.sj.forEach(style => applyResponsiveStyle(this.vcr.element.nativeElement, style as SjStyle, window.innerWidth, this.sjt.sjTheme()));
      }
      else{
        applyResponsiveStyle(this.vcr.element.nativeElement, this.sj as SjStyle, window.innerWidth, this.sjt.sjTheme());
      }
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.renderStyles();
  }


}
