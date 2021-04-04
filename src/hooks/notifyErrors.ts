import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { notification } from 'antd';
import { errorSelector } from 'redux/errors/selectors';

const useNotifyMeErrors = () => {
  const error = useSelector(errorSelector);
  useEffect(() => {
    if (error) {
      notification.error({
        message: 'Ha ocurrido un error al traer los alumnos',
        description: error,
      });
    }
  }, [error]);
};

export default useNotifyMeErrors;
