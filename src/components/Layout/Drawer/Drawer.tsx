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
import React from "react";
import { SIDEBAR_MENU } from "../../../constants/app.constants";

const drawer = () => {
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
            <Toolbar>Sidebar</Toolbar>
            <List>
                {SIDEBAR_MENU.map((item) => (
                    <ListItem button key={item.id}>
                        <ListItemIcon>{renderIcon(item.name)}</ListItemIcon>
                        <ListItemText primary={item.name} />
                    </ListItem>
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
                {drawer()}
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
                {drawer()}
            </Drawer>
        </Box>
    );
};

export default SideBar;
