import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true
    },
    palette: {
        primary: {
            main: '#1fffe1'
        },
        common: {
            white: 'white'
        },
        secondary:{
            main: '#e0baba'
        }
    },
    spacing: 10
});

export default theme;