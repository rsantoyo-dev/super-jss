
import {Injectable, computed, signal} from '@angular/core';
import {SjBreakPoints, SjPalette} from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SjThemeService {

  breakpoints = signal({xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920, xxl: 2560});
  typography = signal({
    default: {fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', fontSize: 1, lineHeight: 1.6},
    H1: {fontSize: {xs: 2.5, md: 3.5}, fontWeight: '600', lineHeight: 2.5},
    H2: {fontSize: {xs: 2, md: 3}, fontWeight: '600', lineHeight: 2.5},
    H3: {fontSize: {xs: 1.75, md: 2.5}, fontWeight: '600', lineHeight: 2},
    H4: {fontSize: {xs: 1.5, md: 2}, fontWeight: '600', lineHeight: 1.7},
    H5: {fontSize: {xs: 1.25, md: 1.75}, fontWeight: '600', lineHeight: 1.4},
    H6: {fontSize: {xs: 1, md: 1.25}, fontWeight: '600', lineHeight: 1.5},
    p: {fontSize: 1, fontWeight: 'normal', lineHeight: 1.6},
    span: {fontSize: 0.9, fontWeight: 'normal', lineHeight: 1.6},
    strong: {fontSize: 1, fontWeight: 'bold', lineHeight: 1.6},
    body: {fontSize: 1, fontWeight: 'normal', lineHeight: 1.6},
    caption: {fontSize: 0.8, fontWeight: 'normal', lineHeight: 1.6},
    button: {fontSize: 1, fontWeight: '500', lineHeight: 1.6}
  });
  colors = signal({
    blue: {
    50: '#EFFAFF',
    100: '#E3F2FD',
    200: '#BBDEFB',
    300: '#90CAF9',
    400: '#64B5F6',
    500: '#42A5F5',
    600: '#2196F3',
    700: '#1E88E5',
    800: '#1976D2',
    900: '#1565C0',
    contrast: '#c26d29'
  },
    indigo: {
    50: '#E8EAF6',
    100: '#C5CAE9',
    200: '#9FA8DA',
    300: '#7986CB',
    400: '#5C6BC0',
    500: '#3F51B5',
    600: '#3949AB',
    700: '#303F9F',
    800: '#283593',
    900: '#1A237E',
    contrast: '#f59242'
  },
    purple: {
    50: '#F3E5F5',
    100: '#E1BEE7',
    200: '#CE93D8',
    300: '#BA68C8',
    400: '#AB47BC',
    500: '#9C27B0',
    600: '#8E24AA',
    700: '#7B1FA2',
    800: '#6A1B9A',
    900: '#4A148C',
    contrast: '#f59242'
  },
    pink: {
      50: '#FCE4EC',
      100: '#F8BBD0',
      200: '#F48FB1',
      300: '#F06292',
      400: '#EC407A',
      500: '#E91E63',
      600: '#D81B60',
      700: '#C2185B',
      800: '#AD1457',
      900: '#880E4F',
      contrast: '#f59242'
    },
    red: {
      50: '#FFEBEE',
      100: '#FFCDD2',
      200: '#EF9A9A',
      300: '#E57373',
      400: '#EF5350',
      500: '#F44336',
      600: '#E53935',
      700: '#D32F2F',
      800: '#C62828',
      900: '#B71C1C',
      contrast: '#f59242'
    },
    orange: {
      50: '#FFF3E0',
      100: '#FFE0B2',
      200: '#FFCC80',
      300: '#FFB74D',
      400: '#FFA726',
      500: '#FF9800',
      600: '#FB8C00',
      700: '#F57C00',
      800: '#EF6C00',
      900: '#E65100',
      contrast: '#f59242'
    },
    yellow: {
      50: '#FFFDE7',
      100: '#FFF9C4',
      200: '#FFF59D',
      300: '#FFF176',
      400: '#FFEE58',
      500: '#FFEB3B',
      600: '#FDD835',
      700: '#FBC02D',
      800: '#F9A825',
      900: '#F57F17',
      contrast: '#f59242'
    },
    green: {
      50: '#E8F5E9',
      100: '#C8E6C9',
      200: '#A5D6A7',
      300: '#81C784',
      400: '#66BB6A',
      500: '#4CAF50',
      600: '#43A047',
      700: '#388E3C',
      800: '#2E7D32',
      900: '#1B5E20',
      contrast: '#f59242'
    },
    teal: {
      50: '#E0F2F1',
      100: '#B2DFDB',
      200: '#80CBC4',
      300: '#4DB6AC',
      400: '#26A69A',
      500: '#009688',
      600: '#00897B',
      700: '#00796B',
      800: '#00695C',
      900: '#004D40',
      contrast: '#f59242'
    },
    cyan: {
      50: '#E0F7FA',
      100: '#B2EBF2',
      200: '#80DEEA',
      300: '#4DD0E1',
      400: '#26C6DA',
      500: '#00BCD4',
      600: '#00ACC1',
      700: '#0097A7',
      800: '#00838F',
      900: '#006064',
      contrast: '#f59242'
    },
    gray: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      contrast: '#f59242'
    },
    black: '#000000',
    white: '#FFFFFF'
  });
  private palette = signal({
      primary: {
        main: this.colors().blue[500],
        light: this.colors().blue[300],
        dark: this.colors().blue[700],
        contrast: this.colors().yellow[500]
      },
      secondary: {
        main: this.colors().indigo[500],
        light: this.colors().indigo[300],
        dark: this.colors().indigo[700],
        contrast: this.colors().gray[50],
      },
      tertiary: {
        main: this.colors().teal[500],
        light: this.colors().teal[300],
        dark: this.colors().teal[700],
        contrast: this.colors().gray[50],
      },
      success: {
        main: this.colors().green[500],
        light: this.colors().green[300],
        dark: this.colors().green[700],
        contrast: this.colors().gray[50],
      },
      info: {
        main: this.colors().cyan[500],
        light: this.colors().cyan[300],
        dark: this.colors().cyan[700],
        contrast: this.colors().gray[50],
      },
      warning: {
        main: this.colors().orange[500],
        light: this.colors().orange[300],
        dark: this.colors().orange[700],
        contrast: this.colors().gray[50],
      },
      error: {
        main: this.colors().red[500],
        light: this.colors().red[300],
        dark: this.colors().red[700],
        contrast: this.colors().gray[50],
      },
      dark: {
        main: this.colors().gray[800],
        light: this.colors().gray[600],
        dark: this.colors().black,
        contrast: this.colors().gray[50],
      },
      neutral: {
        main: this.colors().gray[500],
        light: this.colors().gray[300],
        dark: this.colors().gray[700],
        contrast: this.colors().gray[50],
      },
      light: {
        main: this.colors().gray[200],
        light: this.colors().gray[50],
        dark: this.colors().gray[400],
        contrast: this.colors().gray[900],
      }
    })

  sjTheme = computed(() => {
    return {
      breakpoints: this.breakpoints(),
      spacing: (factor: number): string => `${factor}rem`,
      typography: this.typography(),
      colors: this.colors(),
      palette: this.palette(),
    }
  });

  public setPalette(palette: Partial<SjPalette>) {
    this.palette.set({ ...this.palette(), ...palette });  }

  public setBreakpoints(breakpoints: Partial<SjBreakPoints>) {
    this.breakpoints.set({...this.breakpoints(), ...breakpoints});
  }

  constructor() { }


}

