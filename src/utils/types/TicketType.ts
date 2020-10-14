import * as Category from "./TicketCategories";

export type TicketType ={
  name: string;
  description: string;
  category: TicketCategory;
}

export type TicketCategory =
  | Category.Error
  | Category.NewFeature
  | Category.Update;
