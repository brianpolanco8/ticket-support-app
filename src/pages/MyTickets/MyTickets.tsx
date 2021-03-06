import { Button, Card, Layout, Pagination, Typography } from "antd";
import { Navbar } from "components";

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Category, Routes } from "utils";
import { TicketType, TicketState } from "utils/types/TicketType";
import { CategoryLabel } from "../../components/CategoryLabel/CategoryLabel";
import { firestore } from "../../services/firebase";

import "./MyTickets.css";

const { Title, Paragraph } = Typography;

interface Props {
  user: firebase.firestore.DocumentData | undefined;
  setUser: React.Dispatch<firebase.firestore.DocumentData>;
}

export default function MyTickets({ user, setUser }: Props) {
  const [tickets, setTickets] = useState<TicketType[]>([]);

  console.log("user", user);

  const history = useHistory();

  useEffect(() => {
    let userTickets: any[] = [];
    firestore()
      .collection("tickets")
      .where("client.id", "==", user ? user.id : "")
      .onSnapshot((collectionSnapshot) => {
        collectionSnapshot.forEach((ticket) => userTickets.push(ticket.data()));
        setTickets(userTickets);
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
          <Title style={{ textAlign: "center" }}>Mis tickets</Title>
          {tickets.length === 0 && user ? (
            <div className="no-ticket-container">
              <Title level={4} style={{ fontWeight: "normal" }}>
                Actualmente no tienes ningún ticket creado.
              </Title>

              <Button
                className="create-ticket-button"
                onClick={() => history.push(Routes.CreateTicket)}
              >
                Crear ticket
              </Button>
            </div>
          ) : (
            <Title level={4} style={{ fontWeight: "normal" }}>
              Tickets creados
            </Title>
          )}
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
                <Paragraph
                  ellipsis={{ rows: 3, expandable: true, symbol: "more" }}
                >
                  {ticket.description}
                </Paragraph>

                <Paragraph
                  className={
                    ticket.state === "Completado"
                      ? "ticket-state-completed"
                      : "ticket-state-in-progress"
                  }
                >
                  {ticket.state}
                </Paragraph>
              </Card>
            ))}
        </div>
      </div>

      {user && tickets.length > 0 && (
        <div className="paginationContainer">
          <Pagination
            defaultPageSize={10}
            current={page}
            defaultCurrent={1}
            total={tickets.length}
            onChange={(page) => onPageChanged(page)}
          />
        </div>
      )}
    </Layout>
  );
}
