import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import Image from "next/image";
import { CustomCardContainer } from "../../components/core/Card/Card.styles";

const NftCardContainer = styled(CustomCardContainer)`
    margin: 1rem;
`;

const NftCardTitle = styled(Typography)`
    font-size: 16px;
    padding: 20px 10px;
`;

const ImageContainer = styled(Image)`
    /* object-fit: contain; */
    overflow: hidden;
`;

const DashboardSectionLabel = styled(Typography)`
    margin-top: 1rem;
    font-size: 20px;
    font-weight: bold;
    padding: 20px 10px;
`;

export {
    NftCardContainer,
    NftCardTitle,
    ImageContainer,
    DashboardSectionLabel,
};
