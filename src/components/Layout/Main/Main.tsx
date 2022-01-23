import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import Head from "next/head";
import React, { useState } from "react";
import { SIDEBAR_WIDTH } from "../../../constants/app.constants";
import { Flex } from "../../core/Container/Container.styles";
import SideBar from "../Drawer/Drawer";
import { FooterContainer, MainContainer } from "./Main.styles";

type Props = {
    children?: React.ReactNode;
    title?: string;
    header: boolean;
};

const MainLayout = (props: Props) => {
    const [mobile, setMobile] = useState(false);
    const handleDrawerToggle = () => {
        setMobile(!mobile);
    };
    return (
        <div>
            <Head>New App</Head>
            <AppBar
                position="static"
                sx={{ paddingLeft: { sm: SIDEBAR_WIDTH } }}
            >
                {props.header && (
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: "none" } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography>{props.title}</Typography>
                    </Toolbar>
                )}
            </AppBar>
            <MainContainer>
                <SideBar
                    isMobile={mobile}
                    drawerWidth={SIDEBAR_WIDTH}
                    handleDrawerToggle={handleDrawerToggle}
                />
                <Flex>{props.children}</Flex>
            </MainContainer>
            <FooterContainer />
        </div>
    );
};

export default MainLayout;
