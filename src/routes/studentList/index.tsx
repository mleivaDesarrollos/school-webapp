import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Table, Col, Row, Typography, Button } from 'antd';
import { SITELINKS } from 'app/defaultValues';
import useStudentListing from './hooks';

const { Title } = Typography;

const Student: FC = () => {
  const { loaded, students, columns } = useStudentListing();
  return (
    <div>
      <Row>
        <Col span={24}>
          <Title level={2}>Alumnos</Title>
        </Col>
        <Col span={24}>
          <Link to={SITELINKS.student.add}>
            <Button type="primary" htmlType="button">
              Agregar
            </Button>
          </Link>
        </Col>
        <Col span={24}>
          <Table dataSource={students} columns={columns} loading={!loaded} />
        </Col>
      </Row>
    </div>
  );
};
export default Student;
