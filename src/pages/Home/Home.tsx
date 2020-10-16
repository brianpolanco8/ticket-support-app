import { Card, Layout, Pagination, Typography } from "antd";
import { Navbar } from "components";

import React, { useState } from "react";
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
  const [tickets, setTickets] = useState<TicketType[]>([
    {
      name: "Lorem ipsum dolor sit amet",
      description:
        "Lorem Ipsum s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
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

  function onPageChanged(page: number) {
    setPage(page);
  }

  // function

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
