import { FC } from 'react';
import StudentView from 'routes/studentView';
import useStudentAddFeatures from './hooks';

const StudentAdd: FC = () => {
  const { handleSubmit, validationSchema } = useStudentAddFeatures();
  return (
    <StudentView onSubmit={handleSubmit} validationSchema={validationSchema} />
  );
};

export default StudentAdd;
