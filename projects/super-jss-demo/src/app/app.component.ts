import { Component } from "@angular/core";

import {SjStyle} from "../../../super-jss/src/lib/models/interfaces";
import { HeaderComponent } from "./header/header.component";
import { SuperJssModule } from "projects/super-jss/src/lib/super-jss.module";
import { TypographyComponent } from "./components/typography/typography.component";
import { PaletteComponent } from "./components/palette/palette.component";
@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <div [sj]="mySjClass">
      <app-header></app-header>
      <app-typography></app-typography>
      <app-palette></app-palette>
    </div>
  `,
    imports: [SuperJssModule, HeaderComponent, TypographyComponent, PaletteComponent]
})


export class AppComponent {
  mySjClass:SjStyle = {d:'flex', fxDir: 'column', bg:'light.light'};
}

