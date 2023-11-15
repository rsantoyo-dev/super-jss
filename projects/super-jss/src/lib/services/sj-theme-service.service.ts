import {Injectable, signal} from '@angular/core';
import { SjTheme } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SjThemeServiceService {

  sjTheme = signal<SjTheme>({
    breakpoints: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920, xxl: 2560 },
    spacing: (factor: number): string => `${factor * 0.8}rem`,
    typography: {
      default: { fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', fontSize: 1, lineHeight: 1.6 },
      H1: { fontSize: { xs: 2.5, md: 3.5 }, fontWeight: '600', lineHeight: 2.5 },
      H2: { fontSize: { xs: 2, md: 3 }, fontWeight: '600', lineHeight: 2.5 },
      H3: { fontSize: { xs: 1.75, md: 2.5 }, fontWeight: '600', lineHeight: 2 },
      H4: { fontSize: { xs: 1.5, md: 2 }, fontWeight: '600', lineHeight: 1.7},
      H5: { fontSize: { xs: 1.25, md: 1.75 }, fontWeight: '600', lineHeight: 1.4 },
      H6: { fontSize: { xs: 1, md: 1.25 }, fontWeight: '600', lineHeight: 1.5 },
      p: { fontSize: 1, fontWeight: 'normal', lineHeight: 1.6 },
      span: { fontSize: 0.9, fontWeight: 'normal', lineHeight: 1.6 },
      strong: { fontSize: 1, fontWeight: 'bold', lineHeight: 1.6 },
      body: { fontSize: 1, fontWeight: 'normal', lineHeight: 1.6 },
      caption: { fontSize: 0.8, fontWeight: 'normal', lineHeight: 1.6 },
      button: { fontSize: 1, fontWeight: '500', lineHeight: 1.6 },
    }
  });
  constructor() { }
}
