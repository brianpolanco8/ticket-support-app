import React from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;

interface Props {
  allTicketsContent?: JSX.Element;
  updateTicketsContent?: JSX.Element;
  newFeatureTicketsContent?: JSX.Element;
  errorTicketContent?: JSX.Element;
}

function callback(key: any) {}

const TicketsTabs = ({
  allTicketsContent,
  updateTicketsContent,
  newFeatureTicketsContent,
  errorTicketContent,
}: Props) => {
  return (
    <Tabs
      defaultActiveKey="1"
      onChange={callback}
      style={{ position: "relative", top: "250px" }}
    >
      <TabPane tab="Todos" key="1" style={{ color: "white" }}>
        {allTicketsContent}
      </TabPane>
      <TabPane tab="Actualizaciones" key="2">
        {updateTicketsContent}
      </TabPane>
      <TabPane tab="Nueva caracteristica" key="3">
        {newFeatureTicketsContent}
      </TabPane>
      <TabPane tab="Errores" key="4">
        {errorTicketContent}
      </TabPane>
    </Tabs>
  );
};

export default TicketsTabs;
