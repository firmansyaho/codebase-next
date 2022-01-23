import { createTheme } from "@mui/material/styles";

export interface IThemePropOptions {
    theme?: {
        breakpoints?: {
            values: {
                xs: number;
                sm: number;
                md: number;
                lg: number;
                xl: number;
            };
        };
        spacing?: number[];
        palette?: {
            primary: {
                light: string;
                main: string;
                dark: string;
                contrastText: string;
            };
            secondary: {
                light: string;
                main: string;
                dark: string;
                contrastText: string;
            };
        };
    };
}

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0, // phone
            sm: 600, // tablet
            md: 900, // small laptop
            lg: 1200, // desktop
            xl: 1536, // large screen
        },
    },
    spacing: [0, 4, 8, 16, 32, 64],
    palette: {
        primary: {
            light: "#757ce8",
            main: "#3f50b5",
            dark: "#002884",
            contrastText: "#fff",
        },
        secondary: {
            light: "#ff7961",
            main: "#f44336",
            dark: "#ba000d",
            contrastText: "#000",
        },
    },
});
export default theme;
