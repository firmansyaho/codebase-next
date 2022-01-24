import styled from "@emotion/styled";
import { Container } from "@mui/material";
import { CustomCardContainer } from "../../components/core/Card/Card.styles";

export const SignUpContainer = styled(Container)`
    align-items: center;
    justify-content: center;
    background-color: red;
    height: 90vh;
`;

export const SignupCardContainer = styled(CustomCardContainer)`
    max-width: 35%;
    min-width: 300px;
    padding: 1rem 2rem;
`;
