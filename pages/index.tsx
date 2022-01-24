import type { AppProps } from "next/app";
import React, { Fragment } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../src/store/rootReducer";
import Dashboard from "./dashboard";
import SignUp from "./signup/signup";

const AppRoute = ({}: AppProps) => {
    const { accessToken } = useSelector<RootState, RootState["User"]>(
        (state) => state.User
    );

    useEffect(() => {
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement?.removeChild(jssStyles);
        }
    }, [accessToken]);

    return <Fragment>{!accessToken ? <SignUp /> : <Dashboard />}</Fragment>;
};

export default AppRoute;
