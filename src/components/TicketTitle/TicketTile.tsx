import { Typography } from "antd";
import React, { useState } from "react";
import { TicketCategory } from "utils/types/TicketType";

const { Title, Text } = Typography;

interface TicketTileProps {
  category: string;
}

export function TicketTile({ category }: TicketTileProps) {
  return (
    <div>
      <Text style={{ backgroundColor: "rgba(235, 87, 87, 0.35)" }} keyboard>
        {category}
      </Text>
    </div>
  );
}
