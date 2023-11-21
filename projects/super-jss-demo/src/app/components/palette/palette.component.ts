import {Component, signal} from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperJssModule } from 'projects/super-jss/src/lib';
import { sjBorderShadow} from "../../sjStyling/sjStyles";

@Component({
  selector: 'app-palette',
  standalone: true,
  imports: [CommonModule, SuperJssModule],
  template: `
    <div *ngFor="let color of demoColors()"
      [sj]="[{
        d: 'flex',
        fxDir: 'column',
        m: 1,
        p: 1,
       }, sjBorderShadow]"
    >
      <p [sj]="{p:1, c:color[0], fontWeight:'bold'}">{{ color[0] }}</p>
      <div [sj]="{display:'flex', flexDirection:{xs:'column', md:'row'}}">
        <div *ngFor="let colorVariant of color" [sj]="
          {
            display: 'flex',
            flexGrow: '1',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 1,
            margin: 0.5,
            backgroundColor: colorVariant
          }"
        >
          <span [sj]="{c:'neutral.dark'}">{{ colorVariant }}</span>

        </div>
      </div>

    </div>
  `
})
export class PaletteComponent {


  demoColors = signal([
    ['primary','primary.light', 'primary.dark', 'primary.contrast'],
    ['secondary', 'secondary.light', 'secondary.dark', 'secondary.contrast'],
    ['tertiary', 'tertiary.light', 'tertiary.dark', 'tertiary.contrast'],
    ['success', 'success.light', 'success.dark', 'success.contrast'],
    ['info', 'info.light', 'info.dark', 'info.contrast'],
    ['warning', 'warning.light', 'warning.dark', 'warning.contrast'],
    ['error', 'error.light', 'error.dark', 'error.contrast'],
    ['dark', 'dark.light', 'dark.dark', 'dark.contrast'],
    ['neutral', 'neutral.light', 'neutral.dark', 'neutral.contrast'],
    ['light', 'light.light', 'light.dark', 'light.contrast'],

  ]);

  protected readonly sjBorderShadow = sjBorderShadow;
}
