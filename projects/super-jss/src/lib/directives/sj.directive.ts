import {Directive, Input, OnChanges, OnInit, ViewContainerRef} from "@angular/core";



@Directive({
  selector: '[sj]'
})
export class SjDirective implements OnChanges{

  @Input() sj: string = 'red';

  constructor(public viewContainerRef: ViewContainerRef) {

  }
  ngOnChanges() {
    console.log('SjDirective', this.sj)
    this.viewContainerRef.element.nativeElement.style.backgroundColor = this.sj;
  }

}
