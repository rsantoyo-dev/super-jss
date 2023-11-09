import { sjShadow } from '../sjStyling/sjStyles';
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperJssDirective, sjTheme, sjColor, sjSpace } from 'super-jss';
import {changeTheme} from "../sjStyling/themeHandler";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, SuperJssDirective],
  template: `
    <div [sj]="[
      {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: { xs: sjSpace(1), md: sjSpace(2) },
        backgroundColor: { xs: sjTheme().palette.primary.main, md: sjColor.primaryLight }
      },
      sjShadow
    ]">
      <h3 [sj]="{ color: sjColor.primaryContrast }">SUPER-JSS-DEMO</h3>
      <span
        (click)="updateTheme()"
        [sj]="{ color: sjColor.primaryDark, cursor: 'pointer' }"
      >
        click here to update theme
      </span>
    </div>
    <div [sj]="[
      {
        backgroundColor: sjColor.secondaryLight,
        padding: sjSpace(0.5),
        display: 'flex',
        justifyContent: 'center'
      }
    ]">
      <span [sj]="{ color: sjColor.secondaryDark, fontSize: sjSpace(1) }">
        sjBreakpoints: {{ JSON.stringify(myTheme().breakpoints) }}
      </span>
    </div>
  `,
})
export class HeaderComponent {
  protected readonly sjColor = sjColor;
  protected readonly myTheme= sjTheme
  protected readonly sjShadow = sjShadow;
  protected readonly sjSpace = sjSpace;
  protected readonly JSON = JSON;

  toggleTheme = signal(false);

  updateTheme = () => {
    this.toggleTheme.set(!this.toggleTheme());
    changeTheme(this.toggleTheme());
  };
  protected readonly sjTheme = sjTheme;
}
