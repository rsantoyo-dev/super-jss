import {
  Directive,
  Input,
  OnDestroy,
  ViewContainerRef,
} from "@angular/core";
import {activeListeners, applyStyle} from "../core/core-methods";

@Directive({
  standalone: true,
  selector: '[sj]'
})

export class SjDirective implements OnDestroy {

  @Input() sj: Partial<CSSStyleDeclaration> = { backgroundColor: 'red' }
  constructor(public vcr: ViewContainerRef) {
    if (!activeListeners()) {
      window.addEventListener('resize', () => this.render());
      window.addEventListener('load', () => this.render());
      activeListeners.set(true);
    }
  }
  private render = (): void => {
    applyStyle(
      this.vcr.element.nativeElement,
      this.sj,
      {width: window.innerWidth, height: window.innerHeight}
    );
  }

  ngOnDestroy() {
    if(activeListeners()) {
      window.removeEventListener('resize', this.render);
      window.removeEventListener('onLoad', this.render);
    }
  }

}
