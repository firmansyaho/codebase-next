import React from "react";
import { RowedContainer } from "./Container.styles";

type Props = {
    children?: React.ReactNode;
};

const Rowed = (props: Props) => {
    return <RowedContainer>{props.children}</RowedContainer>;
};

export default Rowed;
