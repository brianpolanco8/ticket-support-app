import { Button, Layout, Menu, Typography } from "antd";
import React from "react";
import "./Navbar.css";
import { Routes } from "../../utils";
import { useHistory } from "react-router-dom";

const { Header } = Layout;
const { Link } = Typography;

export function Navbar() {
  const history = useHistory();
  const curURL = history.location.pathname;

  return (
    <Layout>
      <Header className="header">
        <div className="logoContainer">
          <img
            className="logo"
            src={require("../../assets/images/kitao-logo.png")}
            alt={"Not loaded..."}
          />
        </div>
        <Menu theme="light" mode="horizontal" className="menu">
          <Menu.Item
            key="home"
            className={curURL === Routes.Home ? "activeMenuItem" : ""}
            onClick={() => history.push(Routes.Home)}
          >
            Inicio
          </Menu.Item>
          <Menu.Item
            key="changelog"
            className={curURL === Routes.ChangeLog ? "activeMenuItem" : ""}
            onClick={() => history.push(Routes.ChangeLog)}
          >
            Cambios
          </Menu.Item>
          <Menu.Item
            key="createTicket"
            className={curURL === Routes.CreateTicket ? "activeMenuItem" : ""}
            onClick={() => history.push(Routes.CreateTicket)}
          >
            Crear ticket
          </Menu.Item>
          <Menu.Item key="support">Soporte</Menu.Item>
          <Menu.Item key="login">Iniciar Sesión</Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
}
