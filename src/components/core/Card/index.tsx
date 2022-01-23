import React from "react";
import { CardProps, CustomCardContainer } from "./Card.styles";

const CustomCard = (props: CardProps) => {
    return (
        <CustomCardContainer {...props}>{props.children}</CustomCardContainer>
    );
};

export default CustomCard;
