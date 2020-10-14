import { Button, Layout, Menu, Typography } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import "./Navbar.css";

const { Header } = Layout;
const { Link } = Typography;


const Navbar = ({}) => {
  const history = useHistory();
  const handleOnClick = (route: string) => {
    history.push(route);
  }
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
        <Menu theme="light" mode='horizontal' className="menu">
            <Menu.Item onClick={() => handleOnClick('home')} key="home">Inicio</Menu.Item>
            <Menu.Item onClick={() => handleOnClick('signup')} key="changelog">Registro</Menu.Item>
            <Menu.Item onClick={() => handleOnClick('createTicket')} key="createTicket">Crear ticket</Menu.Item>
            <Menu.Item onClick={() => handleOnClick('support')} key="support">Soporte</Menu.Item>
            <Menu.Item onClick={() => handleOnClick('login')} key="login">Iniciar Sesión</Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
}

export default Navbar;

