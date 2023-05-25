import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';


export const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    fallback: ['Helvetica', 'Arial', 'sans-serif'],
});


const dark = createTheme({
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#2db3ff'
                }
            }
        }
    },
    palette: {
        mode: 'dark',
        primary: {
            main: '#ffca4c'
        },
        secondary: {
            main: '#010c82'
        }
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
});

export { dark }