import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectCreateInput = {
  description: string;
  dueDate?: Date | null;
  name: string;
  owner: UserWhereUniqueInput;
  startDate?: Date | null;
};
