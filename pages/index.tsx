import type { AppProps } from "next/app";
import React, { Fragment } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../src/store/rootReducer";
import Dashboard from "./dashboard";
import SignUp from "./signup/signup";

const AppRoute = ({}: AppProps) => {
    const { isLogin } = useSelector<RootState, RootState["Auth"]>(
        (state) => state.Auth
    );

    useEffect(() => {
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement?.removeChild(jssStyles);
        }
    }, []);

    return <Fragment>{isLogin ? <SignUp /> : <Dashboard />}</Fragment>;
};

export default AppRoute;
