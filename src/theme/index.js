import { createMuiTheme, colors } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#FFF5E3',
      paper: colors.common.white
    },
    primary: {
      contrastText: '#ffffff',
      main: '#1B7000'
    },
    text: {
      primary: '#172b4d',
      secondary: '#6b778c',
      navText: 'whitesmoke'
    }
  },
  shadows,
  typography
});

export default theme;
