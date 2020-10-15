import { Card, Layout, Pagination, Typography } from "antd";
import { Navbar } from "components/Navbar/Navbar";
import React, { useState } from "react";
import { Category } from "utils";
import { TicketType } from "utils/types/TicketType";

import "./CreateTicket.css";

const { Title, Paragraph } = Typography;

export default function CreateTicket() {

  return (
    <Layout style={{ backgroundColor: "white" }}>
      <Navbar />
      <div className="pageTitleContainer">
        <div>
          <Title style={{ textAlign: "center" }}>Registro de cambios</Title>
          <Title level={4} style={{ fontWeight: "normal" }}>
            Actualizaciones, características y correcciones terminadas
          </Title>
        </div>
      </div>

    </Layout>
  );
}
