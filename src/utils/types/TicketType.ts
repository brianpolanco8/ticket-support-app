import { type } from "os";
import * as Category from "./TicketCategories";
import { UserTicketType } from "./UserTicketType";

export type TicketType = {
  id: string;
  name: string;
  description: string;
  category: TicketCategory;
  completionDate?: Date;
  state?: TicketState;
  client: UserTicketType;
};

export type TicketCategory =
  | Category.Error
  | Category.NewFeature
  | Category.Update;

export type TicketState = Completed | InProgress;

export const Completed = "Completado";
export type Completed = typeof Completed;
export const InProgress = "En progreso";
export type InProgress = typeof InProgress;
