import React from 'react'
import { Navbar, PageTitle } from 'components'
import {Button, Input, Typography} from 'antd'
import "./SignIn.css"
import googleLogo from 'assets/images/google-logo.png'
import { SignInForm } from 'components/forms'

const {Title,Text} = Typography

interface Props {

}

const SignIn = (props: Props) => {
    return (
        <div>
            <Navbar />

            <div className="container">
                <Title className="page__title">Iniciar Sesión</Title>
                <div className="form__container">
                    <div className="google__container">
                        <img src={googleLogo} alt="google-logo" className="google__logo"/>
                        <Button className="button">Iniciar sesión con google</Button>
                    </div>
                    <Title level={4}>O</Title>
                    <SignInForm handleSubmit={() => {}}/>
                </div>
            </div>
        </div>
    )
}

export default SignIn