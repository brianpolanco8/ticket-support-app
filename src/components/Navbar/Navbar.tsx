import { Button, Layout, Menu, Typography } from "antd";
import React from "react";
import "./Navbar.css";

const { Header } = Layout;
const { Link } = Typography;

export function Navbar() {
  return (
    <Layout>
      <Header className="header">
        <div className="logoContainer">
          <img
            className="logo"
            src={require("../../assets/images/kitao-logo.png")}
            alt={"Not loaded..."}/>
        </div>
        <Menu theme="light" mode="horizontal" className="menu">
          <Menu.Item key="home">
            <Link href="/">Inicio</Link>
          </Menu.Item>
          <Menu.Item key="changelog">
            <Link href="/registro"  color=" #f79812">
              Registro
            </Link>
          </Menu.Item>
          <Menu.Item key="createTicket">Crear ticket</Menu.Item>
          <Menu.Item key="support">Soporte</Menu.Item>
          <Menu.Item key="login">Iniciar Sesión</Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
}
