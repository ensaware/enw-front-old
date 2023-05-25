'use client';

import React from 'react';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';

// import { dark } from '@/themes/dark';
import { light } from '@/themes/light';
import { Navbar } from '../Navbar/Navbar';

const Home = (
    { children }: 
    { children: React.ReactNode }
) => {
    return (
        <ThemeProvider theme={light}>
            <CssBaseline />
            <Navbar />
            <Container maxWidth="lg">
                { children }
            </Container>
        </ThemeProvider>
    );
};

export { Home }