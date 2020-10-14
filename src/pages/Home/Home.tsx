import { Button, Card, Layout, Menu, Typography } from "antd";
import { Navbar } from "components/Navbar/Navbar";
import React, { useState } from "react";
import { Category } from "utils";
import { TicketType } from "utils/types/TicketType";
import { CategoryLabel } from "../../components/CategoryLabel/CategoryLabel";
import { RightOutlined } from '@ant-design/icons';

import "./Home.css";

const { Title } = Typography;

export default function Home() {
  const [tickets, setTickets] = useState<TicketType[]>([
    {
      name: "Lorem ipsum dolor sit amet",
      description:
        "Nulla purus arcu, mattis sit amet tellus sed, placerat egestas velit.",
      category: Category.Error,
    },
    {
      name: "Lorem ipsum dolor sit amet",
      description:
        "Nulla purus arcu, mattis sit amet tellus sed, placerat egestas velit.",
      category: Category.NewFeature,
    },
    {
      name: "Lorem ipsum dolor sit amet",
      description:
        "Nulla purus arcu, mattis sit amet tellus sed, placerat egestas velit.",
      category: Category.Error,
    },
    {
      name: "Lorem ipsum dolor sit amet",
      description:
        "Nulla purus arcu, mattis sit amet tellus sed, placerat egestas velit.",
      category: Category.Update,
    },
    {
      name: "Lorem ipsum dolor sit amet",
      description:
        "Nulla purus arcu, mattis sit amet tellus sed, placerat egestas velit.",
      category: Category.NewFeature,
    },
    {
      name: "Lorem ipsum dolor sit amet",
      description:
        "Nulla purus arcu, mattis sit amet tellus sed, placerat egestas velit.",
      category: Category.Update,
    },
    {
      name: "Lorem ipsum dolor sit amet",
      description:
        "Nulla purus arcu, mattis sit amet tellus sed, placerat egestas velit.",
      category: Category.Error,
    },
  ]);

  return (
    <Layout style={{ backgroundColor: "white" }}>
      <Navbar />
      <div className="pageTitleContainer">
        <div>
          <Title style={{ textAlign: "center" }}>Kitao - Soporte</Title>
          <Title level={4} style={{ fontWeight: "normal" }}>
            Actualizaciones, características y reparaciones en progreso
          </Title>
        </div>
      </div>

      <div className="ticketParentContainer">
        <div className="ticketContainer">
          {tickets.map((ticket) => (
            <Card
              title={ticket.name}
              headStyle={{ fontWeight: "bold" }}
              className="ticketCard"
              hoverable
              onClick={() => console.log(`Card pressed`)}
              extra={<CategoryLabel category={ticket.category} />}
            >
              <p style={{ color: "#808080" }}>{ticket.description}</p>
            </Card>
          ))}
        </div>
      </div>
      
      <div className="buttonContainer">
        <Button className="button" icon={<RightOutlined />}>Siguiente</Button>
      </div>

      
    </Layout>
  );
}
