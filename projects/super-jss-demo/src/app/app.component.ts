import { Component } from "@angular/core";

import {SjStyle} from "../../../super-jss/src/lib/models/interfaces";
import { HeaderComponent } from "./header/header.component";
import { SuperJssModule } from "projects/super-jss/src/lib/super-jss.module";
@Component({
    selector: 'app-root',
  standalone: true,
    imports: [SuperJssModule, HeaderComponent],
    template: `
    <div [sj]="{bg:{xs:'red', sm:'blue'},}">
    <app-header></app-header>
      ss
    </div>
  `
})


export class AppComponent {
  mySjClass:SjStyle = {display:'flex', p: 5, margin: 1, flexDirection:{xs: 'column', sm: 'row'}, backgroundColor:'yellow', color:'purple'}
}

