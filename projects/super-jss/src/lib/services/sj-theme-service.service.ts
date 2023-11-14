import {Injectable, signal} from '@angular/core';
import { SjTheme } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SjThemeServiceService {

  sjTheme = signal<SjTheme>({
    breakpoints: {xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920, xxl: 2560},

  });

  constructor() { }
}
