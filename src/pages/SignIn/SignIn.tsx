import { Navbar, PageTitle } from 'components'
import React from 'react'
import "./SignIn.css"

interface Props {

}

const SignIn = (props: Props) => {
    return (
        <div>
            <Navbar />

            <PageTitle title="Iniciar Sesión"/>

            <div className="container">
                <div className="form__container">
                    <h1 className="page">test</h1>
                </div>
            </div>
        </div>
    )
}

export default SignIn