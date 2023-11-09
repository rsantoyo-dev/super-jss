import { defaultThemeConfig, sjSpace, sjTheme } from 'super-jss';

export const changeTheme = (toggle: boolean) => {
  let theme=defaultThemeConfig();
  if (toggle) {
    theme.typography.default = {
      fontFamily: 'Courier New',
    };
    theme.typography.H1 = {
      fontSize: { xs: sjSpace(3), md: sjSpace(4) },
      fontWeight: 'bold',
    };
    theme.palette.primary = {
      main: '#800080', // Purple
      light: '#E0B0FF', // Lighter Purple
      dark: '#4B0082', // Darker Purple
      contrastText: '#FFFFFF', // White for contrast
    };
    theme.palette.secondary = {
      main: '#FFDB58', // Mustard
      light: '#FFEA70', // Lighter Mustard
      dark: '#B08D57', // Darker Mustard
      contrastText: '#FFFFFF', // White for contrast
    };
    theme.palette.tertiary = {
      main: '#0000FF', // Blue
      light: '#8A2BE2', // Lighter Blue
      dark: '#00008B', // Darker Blue
      contrastText: '#FFFFFF', // White for contrast
    };
  }
  sjTheme.set(theme);
};
