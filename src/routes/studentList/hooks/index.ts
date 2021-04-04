import { useSelector } from 'react-redux';
import useNotifyMeErrors from 'hooks/notifyErrors';
import { idField, firstNameField, lastNameField } from 'types/student';
import useStudentRedux from 'redux/studentList';
import {
  studentListItemsSelector,
  studentListLoadedSelector,
} from 'redux/studentList/selectors';

const columns = [
  { title: 'ID', dataIndex: idField },
  { title: 'Nombre', dataIndex: firstNameField },
  { title: 'Apellido', dataIndex: lastNameField },
];

const useStudentListing = () => {
  useStudentRedux();
  useNotifyMeErrors();
  const loaded = useSelector(studentListLoadedSelector);
  const students = useSelector(studentListItemsSelector);
  return {
    loaded,
    students,
    columns,
  };
};

export default useStudentListing;
