import { Layout, Menu, Typography } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import "./Navbar.css";
import { Routes } from "../../utils";

const { Header } = Layout;

interface Props {
  user?: firebase.firestore.DocumentData | undefined;
  setUser?: React.Dispatch<firebase.firestore.DocumentData>;
}

export function Navbar({ setUser, user }: Props) {
  const history = useHistory();
  const curURL = history.location.pathname;

  const handleOnClick = (route: string) => {
    if (route === "/logout") {
      history.push("/");
      window.location.reload();
    } else {
      history.push(route);
    }
  };

  return (
    <Layout>
      <Header className="header">
        <div className="logoContainer">
          <img
            className="logo"
            alt="kitao-logo"
            src={require("../../assets/images/kitao-logo.png")}
          />
        </div>
        <Menu theme="light" mode="horizontal" className="menu">
          <Menu.Item onClick={() => handleOnClick(Routes.Home)} key="home">
            Inicio
          </Menu.Item>
          <Menu.Item
            onClick={() => handleOnClick(Routes.CreateTicket)}
            key="createTicket"
          >
            Crear ticket
          </Menu.Item>
          <Menu.Item
            onClick={() => handleOnClick(Routes.Support)}
            key="support"
          >
            Soporte
          </Menu.Item>
          <Menu.Item
            onClick={() => handleOnClick(Routes.ChangeLog)}
            key="changeLog"
          >
            Registro de cambios
          </Menu.Item>
          {user ? (
            <>
              <Menu.Item
                onClick={() => handleOnClick(Routes.Logout)}
                key="logout"
              >
                Cerrar sesión
              </Menu.Item>
              <Menu.Item
                onClick={() => handleOnClick(Routes.Home)}
                key="userHome"
                className="navbar__username"
              >
                {user.firstname} {user.lastname}
              </Menu.Item>
            </>
          ) : (
            <>
              <Menu.Item
                onClick={() => handleOnClick(Routes.SignUp)}
                key="signUp"
              >
                Registrarse
              </Menu.Item>
              <Menu.Item
                onClick={() => handleOnClick(Routes.SignIn)}
                key="login"
              >
                Iniciar Sesión
              </Menu.Item>
            </>
          )}
        </Menu>
      </Header>
    </Layout>
  );
}

export default Navbar;
