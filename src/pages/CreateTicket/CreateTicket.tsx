import {
  Button,
  Card,
  Cascader,
  Col,
  Input,
  Layout,
  Pagination,
  Row,
  message,
  Typography,
} from "antd";
import { CascaderValueType } from "antd/lib/cascader";
import { Navbar } from "components/Navbar/Navbar";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Category, Routes } from "utils";
import { InProgress, TicketCategory, TicketType } from "utils/types/TicketType";
import { UserTicketType } from "utils/types/UserTicketType";
import { firestore } from "../../services/firebase";

import "./CreateTicket.css";

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

interface CreateTicketProps {
  name: string;
  category: string;
  description: string;
  client: UserTicketType;
}

interface Props {
  user: firebase.firestore.DocumentData | undefined;
  setUser: React.Dispatch<firebase.firestore.DocumentData>;
}

export default function CreateTicket({ setUser, user }: Props) {
  const categoryOptions = [
    {
      value: Category.NewFeature,
      label: Category.NewFeature,
    },
    {
      value: Category.Update,
      label: Category.Update,
    },
    {
      value: Category.Error,
      label: Category.Error,
    },
  ];

  const history = useHistory();

  const [ticket, setTicket] = useState<CreateTicketProps>({
    name: "",
    category: "",
    description: "",
    client: {
      displayName: user ? user.displayName : "",
      email: user ? user.email : "",
      id: user ? user.id : "",
      userType: user ?  user.userType : "",
    },
  });

  const [categoryCascader, setCategoryCascader] = useState<string[]>([]);

  function onCategoryChanged(value: CascaderValueType) {
    setTicket({
      ...ticket,
      category: value.toString(),
    });
    setCategoryCascader([value.toString()]);
  }

  function createTicket() {
    firestore()
      .collection("tickets")
      .add({...ticket, state: InProgress})
      .then(() => {
        message.success("Nuevo ticket creado");
        history.push(Routes.MyTickets)
      })
      .catch((reason) => {
        message.error("Ocurrió un error");
      });
  }

  return (
    <Layout style={{ backgroundColor: "white" }}>
      <Navbar user={user} setUser={setUser} />
      <div className="pageTitleContainer">
        {user ? (
          <div>
            <Title style={{ textAlign: "center" }}>Crear ticket</Title>
            <Title level={4} style={{ fontWeight: "normal" }}>
              Detalle característica a trabajar
            </Title>
          </div>
        ) : (
          <div className="signInWarningContainer">
            <Title style={{ textAlign: "center" }}>
              Debes haber iniciado sesión para hacer tickets.
            </Title>
            <Button
              className="signInButton"
              onClick={() => history.push(Routes.SignIn)}
            >
              Iniciar sesión
            </Button>
          </div>
        )}
      </div>

      {user && (
        <Row className="formContainer">
          <Col span={14}>
            <Row>
              <Col span={14}>
                <Row>
                  <Title level={4}>Nombre</Title>
                  <Input
                    className="inputName"
                    value={ticket.name}
                    onChange={(e) =>
                      setTicket({ ...ticket, name: e.target.value })
                    }
                    placeholder="Nombre de la característica"
                  />
                </Row>

                <Row className="descriptionRow">
                  <Title level={4}>Descripción</Title>
                  <TextArea
                    value={ticket.description}
                    onChange={(e) =>
                      setTicket({ ...ticket, description: e.target.value })
                    }
                    className="description"
                    rows={3}
                  />
                </Row>
              </Col>

              <Col span={10}>
                <Title level={4}>Categoría</Title>
                <Cascader
                  style={{ backgroundColor: " #f0f0f0" }}
                  options={categoryOptions}
                  value={categoryCascader}
                  onChange={onCategoryChanged}
                  placeholder="Seleccione categoría"
                />
              </Col>
            </Row>
          </Col>
          <Row align="bottom" justify="end">
            <Col span={24}>
              <Button className="button" onClick={() => createTicket()}>
                Crear ticket
              </Button>
            </Col>
          </Row>
        </Row>
      )}
    </Layout>
  );
}
