import {
  Directive,
  Input,
  OnChanges,
  SimpleChanges,
  ViewContainerRef,
  effect,
} from "@angular/core";
import { applyResponsiveStyle, applyTypography } from "../core/core-methods";
import { SjStyle } from "../models/interfaces";
import { SjThemeService } from "../services";

@Directive({
  standalone: true, // This directive is not dependent on any other module
  selector: '[sj]' // Selector for the directive
})
export class SjDirective implements OnChanges {

  @Input() sj: SjStyle | SjStyle[] | undefined; // Input property to receive the style(s)

  constructor(public vcr: ViewContainerRef, private sjt: SjThemeService) {
    // Effect to render styles when the current breakpoint changes
    effect(() => {
      if (this.sjt.currentBreakpoint()) {
        this.renderStyles();
      }
    })
  }

  // Method to render the styles
  private renderStyles() {
    // Apply typography styles
    applyTypography(this.vcr.element.nativeElement, this.sjt.sjTheme(), window.innerWidth);

    if (this.sj) {
      // Apply responsive styles based on the current breakpoint
      if (Array.isArray(this.sj)) {
        this.sj.forEach(style => applyResponsiveStyle(this.vcr.element.nativeElement, style as SjStyle, window.innerWidth, this.sjt.sjTheme()));
      } else {
        applyResponsiveStyle(this.vcr.element.nativeElement, this.sj as SjStyle, window.innerWidth, this.sjt.sjTheme());
      }
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    // Re-render styles when the input property changes
    this.renderStyles();
  }
}
