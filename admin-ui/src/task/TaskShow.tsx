import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { PROJECT_TITLE_FIELD } from "../project/ProjectTitle";

export const TaskShow = (props: ListProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="AssignedTo" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Estimation" source="estimation" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Project" source="project.id" reference="Project">
          <TextField source={PROJECT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="StartDate" source="startDate" />
        <TextField label="Status" source="status" />
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
