import {
  Directive,
  Input,
  OnDestroy,
  OnInit,
  ViewContainerRef,
} from "@angular/core";
import {activeListeners, applyResponsiveStyle} from "../core/core-methods";
import { SjStyle } from "../models/interfaces";

@Directive({
  standalone: true,
  selector: '[sj]'
})

export class SjDirective implements OnDestroy, OnInit {

    @Input() sj: SjStyle = {}

    constructor(public vcr: ViewContainerRef) {}

    ngOnInit() {
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
        window.removeEventListener('load', this.render);
      }
    }

  }
