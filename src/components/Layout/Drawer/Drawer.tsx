import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import {
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { SIDEBAR_MENU } from "../../../constants/app.constants";
import { RootState } from "../../../store/store";
import { IProfileData } from "../../../store/User/User.action";

const drawer = (data: IProfileData) => {
    const { firstName, lastName } = data;
    const renderIcon = (name: string) => {
        switch (name) {
            case "Dashboard":
                return <HomeIcon />;
            case "Users":
                return <AccountCircleIcon />;
            default:
                break;
        }
    };
    return (
        <>
            <Toolbar>
                <h2>
                    Welcome {firstName} {lastName}
                </h2>
            </Toolbar>
            <List>
                {SIDEBAR_MENU.map((item) => (
                    <Link passHref href={item.path} key={item.id}>
                        <ListItem button>
                            <ListItemIcon>{renderIcon(item.name)}</ListItemIcon>
                            <ListItemText primary={item.name} />
                        </ListItem>
                    </Link>
                ))}
            </List>
            <Divider />
        </>
    );
};

type Props = {
    isMobile: boolean;
    drawerWidth: string;
    handleDrawerToggle: () => void;
};

const SideBar = (props: Props) => {
    const { profile } = useSelector<RootState, RootState["User"]>(
        (state) => state.User
    );

    return (
        <Box
            component="nav"
            sx={{
                width: { sm: props.drawerWidth },
                flexShrink: { sm: 0 },
            }}
        >
            <Drawer
                variant="temporary"
                open={props.isMobile}
                onClose={props.handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: "block", sm: "none" },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: props.drawerWidth,
                    },
                }}
            >
                {drawer(profile)}
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: "none", sm: "block" },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: props.drawerWidth,
                    },
                }}
                open
            >
                {drawer(profile)}
            </Drawer>
        </Box>
    );
};

export default SideBar;
