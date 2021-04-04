import { FC } from 'react';
import { Form, Field } from 'types';
import { useFormikContext } from 'formik';
import { Input } from 'antd';
import useStyles from './styles';

type Props = {
  label?: string;
  field: Field;
  containerClassname?: string;
  inputClassname?: string;
};

const ErrorMessage: FC<Props> = ({ field }) => {
  const classes = useStyles();
  const { errors, touched } = useFormikContext<Form>();
  const isOnError = errors[field] && touched[field];
  return (
    <div className={classes.errorContainer}>
      {isOnError && (
        <span className={classes.errorMessage}>{errors[field]}</span>
      )}
    </div>
  );
};

const InputField: FC<Props> = ({
  label,
  field,
  containerClassname,
  inputClassname,
}) => {
  const classes = useStyles();
  const { values, handleBlur, handleChange } = useFormikContext<Form>();
  return (
    <div className={`${classes.inputContainer} ${containerClassname}`}>
      <label className={classes.label} htmlFor={field}>
        {label}
      </label>
      <Input
        className={`${classes.input} ${inputClassname}`}
        id={field}
        name={field}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values[field]}
      />
      <ErrorMessage field={field} />
    </div>
  );
};

export default InputField;
