import { Component } from "@angular/core";
import { SjDirective } from "projects/super-jss/src/lib/directives/sj.directive";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SjDirective],
  template: `
    <div [sj]="{display:'flex', padding: 5, margin: 1, flexDirection:{xs: 'column', sm: 'row'}, backgroundColor:'yellow', color:'purple'}">
      <div [sj]="{fontWeight:'bold'}">BOLD</div>
      <div>hello</div>
    </div>
  `
})
export class AppComponent {
}

