import { FC } from 'react';
import { Formik, Form } from 'formik';
import { Col, Row, Typography, Button, Divider } from 'antd';
import { InputField } from 'components/forms';
import { firstNameField, lastNameField, StudentAdd } from 'types/student';
import useStyles from './styles';

const { Title } = Typography;

const startingValues: StudentAdd = {
  [firstNameField]: '',
  [lastNameField]: '',
};

type Props = {
  onSubmit: (newStudent: StudentAdd) => void;
  initialValues?: StudentAdd;
  validationSchema?: null | any;
};

const StudentView: FC<Props> = ({
  onSubmit,
  validationSchema,
  initialValues = startingValues,
}) => {
  const classes = useStyles();
  return (
    <Formik
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      initialValues={initialValues}
    >
      <Form>
        <Row className={classes.container}>
          <Col span={24}>
            <Title level={2}>Agregar un alumno</Title>
            <Divider />
          </Col>
          <Col span={24}>
            <Row justify="space-around">
              <Col span={12}>
                <InputField
                  label="Nombre"
                  field={firstNameField}
                  containerClassname={classes.inputContainer}
                />
              </Col>
              <Col span={12}>
                <InputField
                  label="Apellido"
                  field={lastNameField}
                  containerClassname={classes.inputContainer}
                />
              </Col>
              <Col span={24} className={classes.buttonContainer}>
                <Divider />
                <Button
                  className={classes.button}
                  type="primary"
                  htmlType="submit"
                  size="large"
                >
                  Crear
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </Formik>
  );
};

export default StudentView;
