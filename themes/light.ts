import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';


export const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    fallback: ['Helvetica', 'Arial', 'sans-serif'],
});


const light = createTheme({
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#ffca4c',
                }
            }
        }
    },
    palette: {
        mode: 'light',
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

export { light }