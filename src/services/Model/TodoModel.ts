import { UserModel } from "@services/Model/UserModel";

export interface TodoModel {
  id: number;
  title: string;
  completed: boolean;
  userId: UserModel["id"];
}
