export const idField = 'id';

export const firstNameField = 'firstName';

export const lastNameField = 'lastName';

type Student = {
  [idField]?: number;
  [firstNameField]?: string;
  [lastNameField]?: string;
};

export type StudentAdd = {
  [firstNameField]: string;
  [lastNameField]: string;
};

export default Student;
