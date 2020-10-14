import { Button, Layout, Menu } from "antd";
import React from "react";
import "./Navbar.css";

const { Header } = Layout;

export function Navbar() {
  return (
    <Layout>
      <Header className="header">
        <div className="logoContainer">
          <img
            className="logo"
            src={require("../../assets/images/kitao-logo.png")}
          />
        </div>
        <Menu theme="light" mode='horizontal' className="menu">
            <Menu.Item key="home">Inicio</Menu.Item>
            <Menu.Item key="changelog">Registro</Menu.Item>
            <Menu.Item key="createTicket">Crear ticket</Menu.Item>
            <Menu.Item key="support">Soporte</Menu.Item>
            <Menu.Item key="login">Iniciar Sesión</Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
}
