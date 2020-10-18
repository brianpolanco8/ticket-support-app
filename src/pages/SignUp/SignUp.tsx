import React from "react";
import { Navbar } from "components";
import { Typography } from "antd";
import "./SignUp.css";
import { SignUpForm } from "components/forms";
import { auth, generateUserDocument } from "services/firebase";
import { useHistory } from "react-router-dom";

const { Title } = Typography;

interface Props {
  user: firebase.firestore.DocumentData | undefined;
  setUser: React.Dispatch<firebase.firestore.DocumentData>;
}

function capitalize(word: string): string {
  return word.substring(0, 1).toUpperCase() + word.substring(1);
}

const SignUp = ({ user, setUser }: Props) => {
  const history = useHistory();

  const handleSubmit = async (values: {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    userType: string;
  }) => {
    try {
      //CREATE USER
      let response = await auth().createUserWithEmailAndPassword(
        values.email.trim(),
        values.password
      );

      //SET DISPLAY NAME
      auth().currentUser?.updateProfile({
        displayName: `${capitalize(values.firstname)} ${capitalize(
          values.lastname
        )}`,
      });

      // CREATE USER DOCUMENT
      await generateUserDocument(response.user, { ...values });

      setUser({ ...response.user, ...values, id: response.user?.uid });

      history.push("/");
    } catch (error) {
      console.log("error", error);
      if (error.code === "auth/email-already-in-use") {
        console.log("El email ya esta en uso");
      } else {
        console.log("ocurrio un error creando el usuario intentar despues");
      }
    }
  };

  return (
    <div>
      <Navbar user={user} />

      <div className="container">
        <Title className="page__title">Registro</Title>
        <div className="form__container">
          {/* <div className="google__container">
                        <img src={googleLogo} alt="google-logo" className="google__logo"/>
                        <Button className="signInPage__buton">Iniciar sesión con google</Button>
                    </div> */}
          {/* <Title level={4}>O</Title> */}
          <SignUpForm handleSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
