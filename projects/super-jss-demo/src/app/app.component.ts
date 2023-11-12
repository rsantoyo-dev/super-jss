import { Component } from "@angular/core";
import { SjDirective } from "projects/super-jss/src/lib/directives/sj.directive";
import { ResponsiveStyle } from "projects/super-jss/src/lib/models/interfaces";





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SjDirective],
  template: `
  <div [sj]="c">
    <div>1</div>
    <div>2</div>

    </div>
  `
})
export class AppComponent {

  c: ResponsiveStyle = {display:'flex', flexDirection:{xs:'column', sm:'row'}, backgroundColor:'blue', color:'red'};
}

