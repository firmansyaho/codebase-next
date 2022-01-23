import React from "react";
import { CustomCardContainer } from "../../src/components/core/Card/Card.styles";
import Centered from "../../src/components/core/Container/Centered";
import MainLayout from "../../src/components/Layout/Main/Main";
import SignUpForm from "../../src/components/modules/SignUpForm/SignUpForm";

const SignUp = () => {
    return (
        <MainLayout header={false}>
            <Centered>
                <CustomCardContainer>
                    <SignUpForm />
                </CustomCardContainer>
            </Centered>
        </MainLayout>
    );
};

export default SignUp;
