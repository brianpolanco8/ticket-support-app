import React from 'react'
import {Formik} from 'formik'
import { Button, Input } from 'antd'
import "./SignUpForm.css"

export type SignUpType = {firstname: string; lastname: string;email: string; password: string}

interface Props {
    handleSubmit: (values: SignUpType) => void;
}

const initialValues = {firstname: '', lastname: '',email: '', password: ''}

const SignUpForm = ({handleSubmit}: Props) => {
    return (
        <div>
            <Formik
            initialValues={initialValues}
            onSubmit={(values: SignUpType) => handleSubmit(values)}
            >
                {({handleSubmit, handleChange, handleBlur, values}) => (
                    <div className="signUp__container">
                        <Input className="signUpForm__input" placeholder="Nombre" onChange={handleChange('firstname')} />                    
                        <Input className="signUpForm__input" placeholder="Apellido" onChange={handleChange('lastname')} />                    
                        <Input className="signUpForm__input" placeholder="Correo electrónico" onChange={handleChange('email')} />                    
                        <Input className="signUpForm__input" placeholder="Contraseña" type="password" onChange={handleChange('password')} />                    

                        <Button onClick={() => handleSubmit()} className="signUp__button">Registrarse</Button>
                    </div>
                )}
            </Formik>
        </div>
    )
}

export default SignUpForm
