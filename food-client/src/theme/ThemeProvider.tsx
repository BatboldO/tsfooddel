"use client"
import React, {PropsWithChildren} from "react"
import {ThemeProvider as MuiThemeProvider} from "@mui/material"
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
 import {theme} from "./theme"
 import CssBaseline from '@mui/material/CssBaseline'
 import { PrimaryMainTheme } from "@/components/utils";

export const ThemeProvider = ({children}: PropsWithChildren) => {
    return <AppRouterCacheProvider>
        <MuiThemeProvider theme={ PrimaryMainTheme }> 
        <CssBaseline />
        {children}
         </MuiThemeProvider>
    </AppRouterCacheProvider>;

};

