import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { StylesProvider } from "@mui/styles";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import store from "../src/store/store";
import theme from "../src/styles/theme";
import { GlobalStyles } from "./_app.styles";

function App({ Component, pageProps }: AppProps) {
    return (
        <StylesProvider injectFirst>
            <EmotionThemeProvider theme={theme}>
                <SCThemeProvider theme={theme}>
                    <Provider store={store}>
                        <GlobalStyles />
                        <Component {...pageProps} />
                    </Provider>
                </SCThemeProvider>
            </EmotionThemeProvider>
        </StylesProvider>
    );
}

export default App;
