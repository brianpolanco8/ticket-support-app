import {
  Button,
  Card,
  Layout,
  message,
  Pagination,
  Tooltip,
  Typography,
} from "antd";
import { Navbar } from "components";

import React, { useEffect, useState } from "react";
import { firestore } from "services/firebase";
import { Completed, InProgress, TicketType } from "utils/types/TicketType";
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
      .where("state", "==", InProgress)
      .onSnapshot((collectionSnapshot) => {
        collectionSnapshot.forEach((ticket) => {
          ticketsBuffer.push({ ...ticket.data(), id: ticket.id });
        });
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

  function completeTicket(id: string) {
    firestore()
      .collection("tickets")
      .doc(id)
      .update({
        state: Completed,
        completionDate: Date.now(),
      })
      .then(() => {
        message.success("Ticket completado");
        window.location.reload();
      })
      .catch((reason) => {
        console.log(`Error: ${reason}`);
      });
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

            <div className="home-ticket-bottom-text">
              {user && (
                <div>
                  {user.userType === "admin" && (
                    <Tooltip
                      title="Marcar como completo"
                      placement="bottom"
                      overlayStyle={{ fontSize: "10px" }}
                    >
                      <Button
                        onClick={() => completeTicket(ticket.id)}
                        className="home-complete-button"
                      >
                        Completar ticket
                      </Button>
                    </Tooltip>
                  )}
                </div>
              )}

              {ticket.client && (
                <Paragraph className="home-client-name">
                  {ticket.client.displayName}
                </Paragraph>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

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
