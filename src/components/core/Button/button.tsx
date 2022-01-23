import BasicButton from "./Button.styles";

interface Props {
    children?: React.ReactNode;
}

function CustomButton({ children }: Props) {
    return <BasicButton>{children}</BasicButton>;
}

export default CustomButton;
