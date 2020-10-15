import React from 'react'
import {Formik} from 'formik'
import { Button, Input } from 'antd'
import "./SignInForm.css"

export type SignInType = {email: string; password: string}

interface Props {
    handleSubmit: (values: SignInType) => void;
}

const initialValues = {email: '', password: ''}

const SignInForm = ({handleSubmit}: Props) => {
    return (
        <div>
            <Formik
            initialValues={initialValues}
            onSubmit={(values: SignInType) => handleSubmit(values)}
            >
                {({handleSubmit, handleChange, handleBlur, values}) => (
                    <div className="signIn__container">
                        <Input className="signInForm__input" placeholder="Correo electrónico" onChange={handleChange('email')} />                    
                        <Input className="signInForm__input" placeholder="Contraseña" type="password" onChange={handleChange('password')} />                    

                        <Button onClick={() => handleSubmit()} className="signIn__button">Login</Button>
                    </div>
                )}
            </Formik>
        </div>
    )
}

export default SignInForm
