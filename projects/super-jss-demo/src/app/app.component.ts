import { Component } from "@angular/core";
import { SjDirective } from "projects/super-jss/src/lib/directives/sj.directive";
import {SjStyle} from "../../../super-jss/src/lib/models/interfaces";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SjDirective],
  template: `
    <div [sj]="{d:'flex', p: {xs:3, md:7}, gap:{xs:0.5, md:5}, fxDir:{xs:'column', md:'row'}, bg:{xs:'yellow', sm:'orange', md:'light-green'}, c:'purple'}">
      <div [sj]="{fontWeight:'bold'}">BOLD</div>
      <div>hello</div>
    </div>
  `
})


export class AppComponent {
  mySjClass:SjStyle = {display:'flex', p: 5, margin: 1, flexDirection:{xs: 'column', sm: 'row'}, backgroundColor:'yellow', color:'purple'}
}

