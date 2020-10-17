import { Card, Layout, Pagination, Typography } from "antd";
import { Navbar } from "components";

import React, { useEffect, useState } from "react";
import { firestore } from "services/firebase";
import { Category } from "utils";
import { TicketType } from "utils/types/TicketType";
import { CategoryLabel } from "../../components/CategoryLabel/CategoryLabel";
import { TicketsTabs } from "components";

import "./Home.css";
import { getTicketByCategory } from "utils/helper-functions";

const { Title, Paragraph } = Typography;

interface Props {
  user: firebase.firestore.DocumentData | undefined;
  setUser: React.Dispatch<firebase.firestore.DocumentData>;
}

export default function Home({ user, setUser }: Props) {
  const [tickets, setTickets] = useState<TicketType[]>([]);
  const [errorTickets, setErrorTickets] = useState<TicketType[]>([]);
  const [newFeatureTickets, setNewFeatureTickets] = useState<TicketType[]>([]);
  const [updateTickets, setUpdateTickets] = useState<TicketType[]>([]);

  useEffect(() => {
    let ticketsBuffer: any[] = [];
    firestore()
      .collection("tickets")
      .onSnapshot((collectionSnapshot) => {
        collectionSnapshot.forEach((ticket) =>
          ticketsBuffer.push(ticket.data())
        );
        setTickets(ticketsBuffer);
        setErrorTickets(getTicketByCategory(ticketsBuffer, "Error"));
        setNewFeatureTickets(
          getTicketByCategory(ticketsBuffer, "Nueva característica")
        );
        setUpdateTickets(getTicketByCategory(ticketsBuffer, "Actualización"));
      });
  }, []);

  const [page, setPage] = useState(1);

  function onPageChanged(page: number) {
    setPage(page);
  }

  return (
    <Layout style={{ backgroundColor: "white" }}>
      <Navbar user={user} setUser={setUser} />
      <div className="pageTitleContainer">
        <div>
          <Title style={{ textAlign: "center" }}>Kitao - Soporte</Title>
          <Title level={4} style={{ fontWeight: "normal" }}>
            Actualizaciones, características y reparaciones en progreso
          </Title>
        </div>
      </div>

      {/* TABS THAT RENDER TICKETS */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TicketsTabs
          allTicketsContent={renderTickets(tickets, page)}
          errorTicketContent={renderTickets(errorTickets, page)}
          updateTicketsContent={renderTickets(updateTickets, page)}
          newFeatureTicketsContent={renderTickets(newFeatureTickets, page)}
        />
      </div>

      {/* PAGINATION */}
      <div className="home__paginationContainer">
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

const renderTickets = (tickets: TicketType[], page: number) => (
  <div className="home__ticketParentContainer">
    <div className="home__ticketContainer">
      {tickets.slice((page - 1) * 10, (page - 1) * 10 + 10).map((ticket) => (
        <Card
          title={ticket.name}
          headStyle={{ fontWeight: "bold" }}
          className="ticketCard"
          hoverable
          onClick={() => console.log(`Card pressed`)}
          extra={<CategoryLabel category={ticket.category} />}
        >
          <Paragraph ellipsis={{ rows: 3, expandable: true, symbol: "more" }}>
            {ticket.description}
          </Paragraph>
        </Card>
      ))}
    </div>
  </div>
);
