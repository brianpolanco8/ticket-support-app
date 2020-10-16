import { type } from "os";
import * as Category from "./TicketCategories";

export type TicketType = {
  name: string;
  description: string;
  category: TicketCategory;
  completionDate: Date;
  state?: TicketState;
};

export type TicketCategory =
  | Category.Error
  | Category.NewFeature
  | Category.Update;

type TicketState = Completed | InProgress;

export const Completed = "Completado";
export type Completed = typeof Completed;
export const InProgress = "En progreso";
export type InProgress = typeof InProgress;
