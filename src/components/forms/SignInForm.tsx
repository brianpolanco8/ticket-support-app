import React from 'react'
import {Formik} from 'formik'
import { Input } from 'antd'
import "./SignInForm.css"

type SignInType = {email: string; password: string}

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
                {({handleChange, handleBlur, values}) => (
                    <div className="formContainer">
                        <Input className="input" placeholder="Correo electrónico" />                    
                        <Input className="input" placeholder="Contraseña" type="password" />                    
                    </div>
                )}
            </Formik>
        </div>
    )
}

export default SignInForm
