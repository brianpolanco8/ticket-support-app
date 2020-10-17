import { Card, Layout, Pagination, Typography } from "antd";
import { Navbar } from "components";
import React, { useEffect, useState } from "react";
import { firestore } from "services/firebase";
import { Category } from "utils";
import { Completed, TicketType } from "utils/types/TicketType";
import { CategoryLabel } from "../../components/CategoryLabel/CategoryLabel";

import "./ChangeLog.css";

const { Title, Paragraph } = Typography;

interface Props {
  user: firebase.firestore.DocumentData | undefined;
  setUser: React.Dispatch<firebase.firestore.DocumentData>;
}

export default function ChangeLog({ user, setUser }: Props) {
  const [tickets, setTickets] = useState<TicketType[]>([
    {
      name: "Lorem ipsum dolor sit amet",
      id: "1",
      description:
        "Nulla purus arcu, mattis sit amet tellus sed, placerat egestas velit.",
      category: Category.Error,
      completionDate: new Date("October 12, 2020"),
      client: {
        displayName: "Jose Perez",
        email: "jose@gmail.com",
        id: "AlkdjadAl9",
        userType: "client",
      },
    },
    {
      name: "Lorem ipsum dolor sit amet",
      id: "1",
      description:
        "Praesent non elementum erat. Phasellus varius enim eget tellus accumsan facilisis. Donec id consequat dui, non elementum ex. Aliquam cursus diam et urna sodales rhoncus. Nullam varius maximus risus, ac mollis ex. ",
      category: Category.NewFeature,
      completionDate: new Date("October 12, 2020"),
      client: {
        displayName: "Jose Perez",
        email: "jose@gmail.com",
        id: "AlkdjadAl9",
        userType: "client",
      },
    },
    {
      name: "Lorem ipsum dolor sit amet",
      id: "1",
      description:
        "Quisque iaculis leo id malesuada interdum. Morbi in malesuada odio, eu bibendum arcu. Nunc sed massa vitae orci commodo hendrerit sed sed nibh.",
      category: Category.Error,
      completionDate: new Date("October 12, 2020"),
      client: {
        displayName: "Jose Perez",
        email: "jose@gmail.com",
        id: "AlkdjadAl9",
        userType: "client",
      },
    },
    {
      name: "Lorem ipsum dolor sit amet",
      id: "1",
      description:
        "Nulla purus arcu, mattis sit amet tellus sed, placerat egestas velit.",
      category: Category.Update,
      completionDate: new Date("October 12, 2020"),
      client: {
        displayName: "Jose Perez",
        email: "jose@gmail.com",
        id: "AlkdjadAl9",
        userType: "client",
      },
    },
    {
      name: "Lorem ipsum dolor sit amet",
      id: "1",
      description:
        "Aliquam vel quam dignissim elit fermentum gravida vitae ut nunc. Integer rhoncus sem ut leo mattis imperdiet.",
      category: Category.NewFeature,
      completionDate: new Date("October 12, 2020"),
      client: {
        displayName: "Jose Perez",
        email: "jose@gmail.com",
        id: "AlkdjadAl9",
        userType: "client",
      },
    },
    {
      name: "Lorem ipsum dolor sit amet",
      id: "1",
      description:
        "Nulla purus arcu, mattis sit amet tellus sed, placerat egestas velit.",
      category: Category.Update,
      completionDate: new Date("October 12, 2020"),
      client: {
        displayName: "Jose Perez",
        email: "jose@gmail.com",
        id: "AlkdjadAl9",
        userType: "client",
      },
    },
    {
      name: "Lorem ipsum dolor sit amet",
      id: "1",
      description:
        "Nulla purus arcu, mattis sit amet tellus sed, placerat egestas velit.",
      category: Category.Error,
      completionDate: new Date("October 12, 2020"),
      client: {
        displayName: "Jose Perez",
        email: "jose@gmail.com",
        id: "AlkdjadAl9",
        userType: "client",
      },
    },
    {
      name: "Lorem ipsum dolor sit amet",
      id: "1",
      description:
        "Nulla purus arcu, mattis sit amet tellus sed, placerat egestas velit.",
      category: Category.NewFeature,
      completionDate: new Date("October 12, 2020"),
      client: {
        displayName: "Jose Perez",
        email: "jose@gmail.com",
        id: "AlkdjadAl9",
        userType: "client",
      },
    },
    {
      name: "Lorem ipsum dolor sit amet",
      id: "1",
      description:
        "Nulla purus arcu, mattis sit amet tellus sed, placerat egestas velit.",
      category: Category.NewFeature,
      completionDate: new Date("October 12, 2020"),
      client: {
        displayName: "Jose Perez",
        email: "jose@gmail.com",
        id: "AlkdjadAl9",
        userType: "client",
      },
    },
    {
      name: "Lorem ipsum dolor sit amet",
      id: "1",
      description:
        "Nulla purus arcu, mattis sit amet tellus sed, placerat egestas velit.",
      category: Category.Update,
      completionDate: new Date("October 12, 2020"),
      client: {
        displayName: "Jose Perez",
        email: "jose@gmail.com",
        id: "AlkdjadAl9",
        userType: "client",
      },
    },
    {
      name: "Lorem ipsum dolor sit amet",
      id: "1",
      description:
        "Nulla purus arcu, mattis sit amet tellus sed, placerat egestas velit.",
      category: Category.Error,
      completionDate: new Date("October 12, 2020"),
      client: {
        displayName: "Jose Perez",
        email: "jose@gmail.com",
        id: "AlkdjadAl9",
        userType: "client",
      },
    },
    {
      name: "Lorem ipsum dolor sit amet",
      id: "1",
      description:
        "Nulla purus arcu, mattis sit amet tellus sed, placerat egestas velit.",
      category: Category.Update,
      completionDate: new Date("October 12, 2020"),
      client: {
        displayName: "Jose Perez",
        email: "jose@gmail.com",
        id: "AlkdjadAl9",
        userType: "client",
      },
    },
  ]);

  useEffect(() => {
    let ticketsBuffer: any[] = [];
    firestore()
      .collection("tickets")
      .where("state", "==", Completed)
      .onSnapshot((collectionSnapshot) => {
        collectionSnapshot.forEach((ticket) => {
          ticketsBuffer.push({ ...ticket.data(), id: ticket.id });
        });
        setTickets(ticketsBuffer);
      });
  }, []);

  const [page, setPage] = useState(1);

  let dateFormatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format;

  function onPageChanged(page: number) {
    setPage(page);
  }

  function parseTicketDate(ticket: TicketType): string {
    return dateFormatter(ticket.completionDate);
  }

  return (
    <Layout style={{ backgroundColor: "white" }}>
      <Navbar user={user} setUser={setUser} />
      <div className="pageTitleContainer">
        <div>
          <Title style={{ textAlign: "center" }}>Registro de cambios</Title>
          <Title level={4} style={{ fontWeight: "normal" }}>
            Actualizaciones, características y correcciones terminadas
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
                <Paragraph ellipsis={{ rows: 2 }}>
                  {ticket.description}
                </Paragraph>
                
                <div className="ticket-bottom-text">
                  <Paragraph className="ticketDate">
                    {parseTicketDate(ticket)}
                  </Paragraph>
                  {ticket.client && (
                    <Paragraph className="log-client-name">
                      {ticket.client.displayName}
                    </Paragraph>
                  )}
                </div>
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
