import {
  Directive,
  Input,
  OnDestroy,
  ViewContainerRef,
} from "@angular/core";
import {activeListeners, applyResponsiveStyle, applyStyle} from "../core/core-methods";
import { ResponsiveStyle } from "../models/interfaces";

@Directive({
  standalone: true,
  selector: '[sj]'
})

export class SjDirective implements OnDestroy {


  
    @Input() sj: ResponsiveStyle = { backgroundColor: 'red' }
    
    constructor(public vcr: ViewContainerRef) {
      if (!activeListeners()) {
        window.addEventListener('resize', () => this.render());
        window.addEventListener('load', () => this.render());
        activeListeners.set(true);
      }
    }
    private render = (): void => {
      applyResponsiveStyle(
        this.vcr.element.nativeElement,
        this.sj,
        window.innerWidth
      );
    }

    ngOnDestroy() {
      if(activeListeners()) {
        window.removeEventListener('resize', this.render);
        window.removeEventListener('onLoad', this.render);
      }
    }

  }
