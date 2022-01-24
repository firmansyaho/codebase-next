import React from "react";
import Centered from "../../src/components/core/Container/Centered";
import MainLayout from "../../src/components/Layout/Main/Main";
import SignUpForm from "../../src/components/modules/SignUpForm/SignUpForm";
import { SignupCardContainer } from "../../src/styles/SignUp/signup.styles";

const SignUp = () => {
    return (
        <MainLayout header={false}>
            <Centered>
                <SignupCardContainer>
                    <h1>Register</h1>
                    <SignUpForm />
                </SignupCardContainer>
            </Centered>
        </MainLayout>
    );
};

export default SignUp;
