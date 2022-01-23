import { CenteredContainer } from "./Container.styles";

type Props = {
    children?: React.ReactNode;
};

const Centered = (props: Props) => {
    return <CenteredContainer>{props.children}</CenteredContainer>;
};

export default Centered;
