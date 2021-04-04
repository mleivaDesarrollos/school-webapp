export const idField = 'id';

export const nameField = 'name';

type Course = {
  [idField]?: number;
  [nameField]?: string;
};

export default Course;
