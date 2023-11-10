import { Component } from "@angular/core";
import {SuperJssModule} from "../../../super-jss/src/lib";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SuperJssModule],
  template: `
  <div [sj]="'blue'">
    hello

    </div>
  `
})
export class AppComponent {

}

