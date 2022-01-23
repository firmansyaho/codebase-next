import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CenteredContainer = styled(Container)`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: "green";
`;

export const RowedContainer = styled(Container)`
    display: flex;
    justify-content: flex-start;
    height: "100vh";
    flex-direction: row;
    flex-wrap: wrap;
`;

export const Flex = styled(Container)`
    display: flex;
    flex: 1;
    flex-direction: column;
`;
