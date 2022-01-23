import { Grid } from "@mui/material";
import React from "react";
import Rowed from "../../src/components/core/Container/Row";
import MainLayout from "../../src/components/Layout/Main/Main";
import { db } from "../../src/constants/app.constants";
import {
    DashboardSectionLabel,
    ImageContainer,
    NftCardContainer,
    NftCardTitle,
} from "../../src/styles/Dashboard/dashboard.styles";

const Dashboard = () => {
    return (
        <MainLayout title="Dashboard" header>
            <DashboardSectionLabel>NFT</DashboardSectionLabel>
            <Rowed>
                {db.nftData.map((x) => {
                    return (
                        <NftCardContainer
                            sx={{
                                width: { xs: "100%", md: "20vw" },
                                maxWidh: { md: "33%" },
                            }}
                            color="teal"
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
        </MainLayout>
    );
};

export default Dashboard;
