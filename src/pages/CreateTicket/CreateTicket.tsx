import {
  Button,
  Card,
  Cascader,
  Col,
  Input,
  Layout,
  Pagination,
  Row,
  Typography,
} from "antd";
import { CascaderValueType } from "antd/lib/cascader";
import { Navbar } from "components/Navbar/Navbar";
import React, { useState } from "react";
import { Category } from "utils";
import { TicketCategory, TicketType } from "utils/types/TicketType";

import "./CreateTicket.css";

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

interface CreateTicketProps {
  name: string;
  categoryCascader: string[]; //The Cascader component requires an array as value.
  category: string;
  description: string;
}

export default function CreateTicket() {
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

  const [state, setState] = useState<CreateTicketProps>({
    name: "",
    categoryCascader: [""],
    category: "",
    description: "",
  });

  function onCategoryChanged(value: CascaderValueType) {
    setState({
      ...state,
      categoryCascader: [value.toString()],
      category: value.toString(),
    });
  }

  return (
    <Layout style={{ backgroundColor: "white" }}>
      <Navbar />
      <div className="pageTitleContainer">
        <div>
          <Title style={{ textAlign: "center" }}>Crear ticket</Title>
          <Title level={4} style={{ fontWeight: "normal" }}>
            Detalle característica a trabajar
          </Title>
        </div>
      </div>
      <Row className="formContainer">
        <Col span={14}>
          <Row>
            <Col span={14}>
              <Row>
                <Title level={4}>Nombre</Title>
                <Input
                  className="inputName"
                  value={state.name}
                  onChange={(e) => setState({ ...state, name: e.target.value })}
                  placeholder="Nombre de la característica"
                />
              </Row>

              <Row className="descriptionRow">
                <Title level={4}>Descripción</Title>
                <TextArea
                  value={state.description}
                  onChange={(e) =>
                    setState({ ...state, description: e.target.value })
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
                value={state.categoryCascader}
                onChange={onCategoryChanged}
                placeholder="Seleccione categoría"
              />
            </Col>
          </Row>
        </Col>
        <Row align="bottom" justify="end">
          <Col span={24}>
            <Button className="button">Crear ticket</Button>
          </Col>
        </Row>
      </Row>
    </Layout>
  );
}
