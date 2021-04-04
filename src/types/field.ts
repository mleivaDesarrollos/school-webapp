import Form from './form';

const formField: Required<Form> = {
  id: 0,
  firstName: '',
  lastName: '',
  name: '',
};

type Field = keyof typeof formField;

export default Field;
