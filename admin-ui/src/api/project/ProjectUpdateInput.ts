import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectUpdateInput = {
  description?: string;
  dueDate?: Date | null;
  name?: string;
  owner?: UserWhereUniqueInput;
  startDate?: Date | null;
};
