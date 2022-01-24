import { Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Centered from "../../src/components/core/Container/Centered";
import Rowed from "../../src/components/core/Container/Row";
import MainLayout from "../../src/components/Layout/Main/Main";
import { getNftData } from "../../src/store/Dashboard/Dashboard.action";
import { RootState } from "../../src/store/rootReducer";
import {
    DashboardSectionLabel,
    ImageContainer,
    NftCardContainer,
    NftCardTitle,
} from "../../src/styles/Dashboard/dashboard.styles";

const Dashboard = () => {
    const dispatch = useDispatch();
    const { nfts, isLoading } = useSelector<RootState, RootState["Dashboard"]>(
        (state) => state.Dashboard
    );
    useEffect(() => {
        dispatch(getNftData());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <MainLayout title="Dashboard" header>
            <DashboardSectionLabel>NFT</DashboardSectionLabel>
            {isLoading ? (
                <Centered>
                    <CircularProgress size={40} />
                </Centered>
            ) : (
                <Rowed>
                    {nfts.map((x) => {
                        return (
                            <NftCardContainer
                                sx={{
                                    width: { xs: "100%", md: "20vw" },
                                    maxWidh: { md: "33%" },
                                }}
                                key={x.id}
                            >
                                <ImageContainer
                                    src={x.imageUrl}
                                    layout="responsive"
                                    width={"100%"}
                                    height={50}
                                />
                                <NftCardTitle>
                                    <Grid>
                                        {x.title}
                                        {x.category}
                                    </Grid>
                                </NftCardTitle>
                            </NftCardContainer>
                        );
                    })}
                </Rowed>
            )}
        </MainLayout>
    );
};

export default Dashboard;
