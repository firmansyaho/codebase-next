import React from "react";
import { Flex } from "./Container.styles";

type Props = {
    children?: React.ReactNode;
};

const Rowed = (props: Props) => {
    return <Flex>{props.children}</Flex>;
};

export default Rowed;
