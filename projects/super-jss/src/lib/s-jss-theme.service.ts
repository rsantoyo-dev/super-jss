import { Injectable} from '@angular/core';
import {SJssTheme} from "./super-jss-model";
import {BehaviorSubject, fromEvent} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SJssThemeService {

  theme: SJssTheme;
  breakPoint:string | undefined = 'xs';
  readonly themeChanges$: BehaviorSubject<SJssTheme>;
  readonly breakPointChanges$: BehaviorSubject<string | undefined>;


  constructor() {
    this.theme = this.defaultTheme()
    this.themeChanges$ = new BehaviorSubject<SJssTheme>(this.theme);
    this.breakPointChanges$ = new BehaviorSubject<string | undefined>(this.breakPoint);
    this.themeChanges().subscribe(()=>{this.onResize()});
    fromEvent(window, 'resize').subscribe(() => this.onResize());
    fromEvent(window, 'load').subscribe(() => this.onResize());
  }

  onResize(){
    const bp = Object.keys(this.theme.breakpoints)
      // @ts-ignore
      .filter(key =>(this.theme.breakpoints[key] <this.getInnerWidth() ? this.getInnerWidth() : 0) && key)
      .pop();

    if(bp!==this.breakPoint){
      this.breakPoint = bp;
      this.breakPointChanges$.next(this.breakPoint);
    }
  }

  setTheme(newValue:SJssTheme): void {
    this.theme = newValue;
    this.themeChanges$.next(this.theme);
  }

  themeChanges(): BehaviorSubject<SJssTheme> {
    return this.themeChanges$;
  }
  breakpointChanges(): BehaviorSubject<string | undefined> {
    return this.breakPointChanges$;
  }

  getInnerWidth(){
    return window.innerWidth;
  }


  defaultTheme(): SJssTheme {
    return {
      breakpoints: {xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536},
      spacing: (factor) => `${0.25 * factor}rem`,
      typography: {
        default: {fontFamily: '"Roboto","Helvetica"', fontSize: '1.2em'},
        H1: {fontSize: {xs: '3em', md: '3.5em'}, fontWeight: 'bold'},
        H2: {fontSize: {xs: '2.5em', md: '3em'}, fontWeight: 'bolder'},
        H3: {fontSize: {xs: '2.0em', md: '2.5em'}, fontWeight: 'bolder'},
        H4: {fontSize: {xs: '1.8em', md: '2em'}, fontWeight: 'bolder'},
        H5: {fontSize: {xs: '1.5em', md: '1.8em'}, fontWeight: 'bolder'},
        H6: {fontSize: {xs: '1em', md: '1.2em'}, fontWeight: 'bolder'},
        P: {fontSize: '1em', fontWeight: 'normal'},
        SPAN: {fontSize: '0.8em', fontWeight: 'normal'},
      },
      palette: {
        common: {
          black: "#030303",
          white: "#fafafa",
          gray: {
            main: '#888888',
            light: '#aaaaaa',
            dark: '#555555',
            contrastText: '#dddddd',
          }
        },
        primary: {
          main: '#147a81',
          light: '#5aeae7',
          dark: '#0f5d73',
          contrastText: '#f9fff7',
        },
        secondary: {
          main: '#c72488',
          light: '#e54f99',
          dark: '#aa0c3f',
          contrastText: '#e7d9bf',
        },
        error: {
          main: '#cc1d1d',
          light: '#e3543d',
          dark: '#801f13',
          contrastText: '#e7d9bf',
        },
        warning: {
          main: '#be5419',
          light: '#f39363',
          dark: '#b03c08',
          contrastText: '#e7d9bf',
        },
        info: {
          main: '#0b619f',
          light: '#3795d9',
          dark: '#073556',
          contrastText: '#e7d9bf',
        },
        success: {
          main: '#35850e',
          light: '#7eee47',
          dark: '#163807',
          contrastText: '#e7d9bf',
        },
        text: {
          primary: '#e7e7e7',
          secondary: '#1a1a1a',
          disabled: 'rgba(16,16,16,0.39)',
        },
      }

    }
  }
}
