import { useEffect } from 'react';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { notification } from 'antd';
import useStudentAddRedux from 'redux/studentAdd';
import { actions } from 'redux/studentAdd/slice';
import {
  studentAddStudentSelector,
  studentAddSuccessSelector,
} from 'redux/studentAdd/selectors';
import { SITELINKS } from 'app/defaultValues';
import { firstNameField, lastNameField, StudentAdd } from 'types/student';
import useNotifyMeErrors from 'hooks/notifyErrors';

const validationSchema = yup.object().shape({
  [firstNameField]: yup
    .string()
    .required('Es necesario indicar un nombre')
    .min(2, 'El nombre tiene que tener al menos dos caracteres'),
  [lastNameField]: yup
    .string()
    .required('El apellido es requerido')
    .min(2, 'El apellido debe tener al menos dos caracteres'),
});

const useNotifySuccessSubmit = () => {
  const dispatch = useDispatch();
  const isSuccess = useSelector(studentAddSuccessSelector);
  const student = useSelector(studentAddStudentSelector);
  const history = useHistory();
  useEffect(() => {
    if (isSuccess && student) {
      notification.success({
        message: '¡Éxito!',
        description: `Se ha creado el estudiante: ${student[firstNameField]} ${student[lastNameField]}`,
      });
      setTimeout(() => {
        dispatch(actions.reset());
        history.push(SITELINKS.student.list);
      }, 500);
    }
  }, [isSuccess, history, student, dispatch]);
};

const useStudentAddFeatures = () => {
  const dispatch = useDispatch();
  useStudentAddRedux();
  useNotifySuccessSubmit();
  useNotifyMeErrors();
  const handleSubmit = (newStudent: StudentAdd) => {
    dispatch(actions.submit(newStudent));
  };

  return {
    handleSubmit,
    validationSchema,
  };
};

export default useStudentAddFeatures;
