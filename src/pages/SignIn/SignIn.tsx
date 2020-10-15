import React from 'react'
import { Navbar } from 'components'
import {Button, Typography} from 'antd'
import "./SignIn.css"
import googleLogo from 'assets/images/google-logo.png'
import { SignInForm } from 'components/forms'
import {auth,firestore} from 'services/firebase'
import { useHistory } from 'react-router-dom'

const {Title} = Typography

interface Props {
    user: firebase.firestore.DocumentData | undefined;
    setUser: React.Dispatch<firebase.firestore.DocumentData>;
}

const SignIn = ({user, setUser}: Props) => {
    const history = useHistory();
    const handleSubmit = async (values: {email: string, password: string;}) => {
        console.log(values)
        try {
            let response = await auth().signInWithEmailAndPassword(
              values.email.trim(),
              values.password
            );
            const profileRef = firestore().doc(`users/${response.user?.uid}`);
            const profile = await profileRef.get();
        
            setUser({...response, ...profile.data()})
            console.log("data", profile.data());
            history.push('/')
            
          } catch (error) {
            console.log('error', error)
          }
        };
    return (
        <div>
            <Navbar user={user}/>

            <div className="container">
                <Title className="page__title">Iniciar Sesión</Title>
                <div className="form__container">
                    <div className="google__container">
                        <img src={googleLogo} alt="google-logo" className="google__logo"/>
                        <Button className="signInPage__buton">Iniciar sesión con google</Button>
                    </div>
                    <Title level={4}>O</Title>
                    <SignInForm handleSubmit={handleSubmit}/>
                </div>
            </div>
        </div>
    )
}

export default SignIn