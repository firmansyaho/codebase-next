import { Button } from "@mui/material";
import React from "react";

type Props = {
    children?: React.ReactNode;
    onSubmit?: () => void;
    buttonText: string;
};

const Form = ({ children, onSubmit, buttonText }: Props) => {
    return (
        <div>
            <form className="form" onSubmit={onSubmit}>
                {children}
                <Button
                    color="primary"
                    variant="contained"
                    fullWidth
                    type="submit"
                >
                    {buttonText}
                </Button>
            </form>
        </div>
    );
};

export default Form;
