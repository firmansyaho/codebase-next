import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

export interface CardProps {
    color?: string;
    width?: string;
    height?: string;
    padding?: string;
    children: React.ReactNode;
}

export const CustomCardContainer = styled(Card)`
    background-color: ${(props: CardProps) => props.color};
    direction: "column";
    width: ${(props: CardProps) => props.width ?? "50%"};
    height: ${(props: CardProps) => props.height ?? "auto"};
    padding: ${(props: CardProps) => props.padding ?? "auto"};
`;
