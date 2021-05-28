import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type Project = {
  createdAt: Date;
  description: string;
  dueDate: Date | null;
  id: string;
  name: string;
  owner?: UserWhereUniqueInput;
  startDate: Date | null;
  updatedAt: Date;
};
