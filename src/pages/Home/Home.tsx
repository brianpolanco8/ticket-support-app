import {  Card, Layout,  Pagination, Typography } from "antd";
import { Navbar } from "components";

import React, { useState } from "react";
import { Category } from "utils";
import { TicketType } from "utils/types/TicketType";
import { CategoryLabel } from "../../components/CategoryLabel/CategoryLabel";

import "./Home.css";

const { Title } = Typography;

interface Props {
  user: firebase.firestore.DocumentData | undefined;
  setUser: React.Dispatch<firebase.firestore.DocumentData>;
}

export default function Home({user,setUser}: Props) {
  
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
    {
      name: "Lorem ipsum dolor sit amet",
      description:
        "Nulla purus arcu, mattis sit amet tellus sed, placerat egestas velit.",
      category: Category.Update,
    },
  ]);

  const [page, setPage] = useState(1);

  function onPageChanged(page: number) {
    setPage(page);
  }

  return (
    <Layout style={{ backgroundColor: "white" }}>
      <Navbar user={user} setUser={setUser}/>
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
          {tickets
            .slice((page - 1) * 10, (page - 1) * 10 + 10)
            .map((ticket) => (
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

      <div className="paginationContainer">
        <Pagination
          defaultPageSize={10}
          current={page}
          defaultCurrent={1}
          total={tickets.length}
          onChange={(page) => onPageChanged(page)}
        />
      </div>
    </Layout>
  );
}
