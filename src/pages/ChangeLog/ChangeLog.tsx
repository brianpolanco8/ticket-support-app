import { Card, Layout, Pagination, Typography } from "antd";
import { Navbar } from "components";
import React, { useState } from "react";
import { Category } from "utils";
import { TicketType } from "utils/types/TicketType";
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
      description:
        "Nulla purus arcu, mattis sit amet tellus sed, placerat egestas velit.",
      category: Category.Error,
      completionDate: new Date("October 12, 2020"),
    },
    {
      name: "Lorem ipsum dolor sit amet",
      description:
        "Praesent non elementum erat. Phasellus varius enim eget tellus accumsan facilisis. Donec id consequat dui, non elementum ex. Aliquam cursus diam et urna sodales rhoncus. Nullam varius maximus risus, ac mollis ex. ",
      category: Category.NewFeature,
      completionDate: new Date("October 12, 2020"),
    },
    {
      name: "Lorem ipsum dolor sit amet",
      description:
        "Quisque iaculis leo id malesuada interdum. Morbi in malesuada odio, eu bibendum arcu. Nunc sed massa vitae orci commodo hendrerit sed sed nibh.",
      category: Category.Error,
      completionDate: new Date("October 12, 2020"),
    },
    {
      name: "Lorem ipsum dolor sit amet",
      description:
        "Nulla purus arcu, mattis sit amet tellus sed, placerat egestas velit.",
      category: Category.Update,
      completionDate: new Date("October 12, 2020"),
    },
    {
      name: "Lorem ipsum dolor sit amet",
      description:
        "Aliquam vel quam dignissim elit fermentum gravida vitae ut nunc. Integer rhoncus sem ut leo mattis imperdiet.",
      category: Category.NewFeature,
      completionDate: new Date("October 12, 2020"),
    },
    {
      name: "Lorem ipsum dolor sit amet",
      description:
        "Nulla purus arcu, mattis sit amet tellus sed, placerat egestas velit.",
      category: Category.Update,
      completionDate: new Date("October 12, 2020"),
    },
    {
      name: "Lorem ipsum dolor sit amet",
      description:
        "Nulla purus arcu, mattis sit amet tellus sed, placerat egestas velit.",
      category: Category.Error,
      completionDate: new Date("October 12, 2020"),
    },
    {
      name: "Lorem ipsum dolor sit amet",
      description:
        "Nulla purus arcu, mattis sit amet tellus sed, placerat egestas velit.",
      category: Category.NewFeature,
      completionDate: new Date("October 12, 2020"),
    },
    {
      name: "Lorem ipsum dolor sit amet",
      description:
        "Nulla purus arcu, mattis sit amet tellus sed, placerat egestas velit.",
      category: Category.NewFeature,
      completionDate: new Date("October 12, 2020"),
    },
    {
      name: "Lorem ipsum dolor sit amet",
      description:
        "Nulla purus arcu, mattis sit amet tellus sed, placerat egestas velit.",
      category: Category.Update,
      completionDate: new Date("October 12, 2020"),
    },
    {
      name: "Lorem ipsum dolor sit amet",
      description:
        "Nulla purus arcu, mattis sit amet tellus sed, placerat egestas velit.",
      category: Category.Error,
      completionDate: new Date("October 12, 2020"),
    },
    {
      name: "Lorem ipsum dolor sit amet",
      description:
        "Nulla purus arcu, mattis sit amet tellus sed, placerat egestas velit.",
      category: Category.Update,
      completionDate: new Date("October 12, 2020"),
    },
  ]);

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
      <Navbar />
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
                <Paragraph ellipsis={{ rows: 2 }} className="ticketDescription">
                  {ticket.description}
                </Paragraph>
                <Paragraph className="ticketDate">
                  {parseTicketDate(ticket)}
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
