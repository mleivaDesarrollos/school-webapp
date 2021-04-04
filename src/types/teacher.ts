export const idField = 'id';

export const firstNameField = 'firstName';

export const lastNameField = 'lastName';

type Teacher = {
  [idField]?: number;
  [firstNameField]?: string;
  [lastNameField]?: string;
};

export default Teacher;
