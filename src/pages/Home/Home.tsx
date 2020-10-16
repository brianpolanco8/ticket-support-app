import { Card, Layout, Pagination, Typography } from "antd";
import { Navbar } from "components";

import React, { useEffect, useState } from "react";
import { firestore } from "services/firebase";
import { Category } from "utils";
import { TicketType } from "utils/types/TicketType";
import { CategoryLabel } from "../../components/CategoryLabel/CategoryLabel";

import "./Home.css";

const { Title, Paragraph } = Typography;

interface Props {
  user: firebase.firestore.DocumentData | undefined;
  setUser: React.Dispatch<firebase.firestore.DocumentData>;
}

export default function Home({ user, setUser }: Props) {
  const [tickets, setTickets] = useState<TicketType[]>([]);
  
  useEffect(() => {
    let ticketsBuffer: any[] = [];
    firestore()
      .collection("tickets")
      .onSnapshot((collectionSnapshot) => {
        collectionSnapshot.forEach((ticket) => ticketsBuffer.push(ticket.data()));
        setTickets(ticketsBuffer);
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
