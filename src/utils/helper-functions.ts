import { TicketCategory, TicketType } from "./types/TicketType";

export const getTicketByCategory = (
  tickets: TicketType[],
  category: TicketCategory
) => {
  let result: TicketType[] = [];

  tickets.map((ticket) => {
    if (ticket.category === category) {
      result.push(ticket);
    }
  });

  return result;
};
