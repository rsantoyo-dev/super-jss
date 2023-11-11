import { Component } from "@angular/core";
import { SjDirective } from "projects/super-jss/src/lib";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SjDirective],
  template: `
  <div [sj]="{display:'flex', backgroundColor:'blue', color:'red'}">
    hello

    </div>
  `
})
export class AppComponent {

  c: Partial<CSSStyleDeclaration> = { backgroundColor: 'red'};
}

