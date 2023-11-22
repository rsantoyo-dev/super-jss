import { Component } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { SuperJssModule } from "projects/super-jss/src/lib/super-jss.module";
import { TypographyComponent } from "./components/typography/typography.component";
import { PaletteComponent } from "./components/palette/palette.component";
@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <div [sj]="{d:'flex', fxDir: 'column', bg:'light'}">
      <app-header [sj]="{width:'100%'}"></app-header>
      <div [sj]="{d:'flex', fxDir: 'column', p: {xs: 2, md: 4}, gap: 2, fxAItems:'center'}">
        <app-typography [sj]="{d:'flex', fxDir:'column', width:'100%', maxWidth: 100}"></app-typography>
        <app-palette [sj]="{d:'flex', fxDir:'column', width:'100%', maxWidth: 100}"></app-palette>
      </div>
    </div>
  `,
    imports: [SuperJssModule, HeaderComponent, TypographyComponent, PaletteComponent]
})


export class AppComponent {}

