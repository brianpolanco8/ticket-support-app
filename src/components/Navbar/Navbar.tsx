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
          <Menu.Item onClick={() => handleOnClick("/")} key="home">
            Inicio
          </Menu.Item>
          <Menu.Item
            onClick={() => handleOnClick("createTicket")}
            key="createTicket"
          >
            Crear ticket
          </Menu.Item>
          <Menu.Item onClick={() => handleOnClick("support")} key="support">
            Soporte
          </Menu.Item>
          {user ? (
            <>
              <Menu.Item
                onClick={() => handleOnClick("/logout")}
                key="changelog"
              >
                Cerrar sesión
              </Menu.Item>
              <Menu.Item
                onClick={() => handleOnClick("/")}
                key="changelog"
                className="navbar__username"
              >
                {user.firstname} {user.lastname}
              </Menu.Item>
            </>
          ) : (
            <>
              <Menu.Item
                onClick={() => handleOnClick("signup")}
                key="changelog"
              >
                Registro
              </Menu.Item>
              <Menu.Item onClick={() => handleOnClick("login")} key="login">
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
