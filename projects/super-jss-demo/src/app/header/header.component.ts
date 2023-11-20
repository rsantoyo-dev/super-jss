import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperJssModule } from 'projects/super-jss/src/lib/';
import { SjThemeService } from 'projects/super-jss/src/lib';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, SuperJssModule],
  template: `
    <div [sj]="
      {
        d: 'flex',
        fxDir: 'column',
        fxAItems: 'center',
        fxJustify: 'center',
        p: { xs: 1, sm: 2 },
        bg: { xs: 'primary', md: 'primary.light'}
      }">
      <h3 [sj]="{ color: 'primary.contrast' }">SUPER-JSS-DEMO</h3>
      <span
        (click)="updateTheme()"
        [sj]="{ color: 'primary.dark', cursor: 'pointer' }"
      >
        click here to update theme
      </span>
    </div>
    <div [sj]="
      {
        bg: 'secondary.light',
        padding: 0.5,
        display: 'flex',
        justifyContent: 'center'
      }
    ">
      <span [sj]="{ color: 'secondary.dark', fontSize: 1 }">
       <!--  sjBreakpoints: {{ JSON.stringify(myTheme().breakpoints) }} -->
      </span>
    </div>
  `,
})
export class HeaderComponent {

  defaultThemeConfig = this.th.sjTheme();

  toggleTheme = signal(false);

  constructor(private th:SjThemeService) {

  }


  updateTheme() {
    console.log('updating theme');
    if(!this.toggleTheme()) {
      this.th.setPalette({
        primary: {
          main: 'purple',
          light: 'purple.700',
          dark: 'purple.200',
          contrast: 'yellow.600',
        }      
      });
  
      this.th.setBreakpoints({
        sm: 630,
      });
    }
    else{
      this.th.setPalette(this.defaultThemeConfig.palette);
    }

    this.toggleTheme.set(!this.toggleTheme());
    
  }
}
