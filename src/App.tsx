import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { SITELINKS } from 'app/defaultValues';
import useErrorsRedux from 'redux/errors';
import Routes from 'routes';
import useStyles from './AppStyles';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  useErrorsRedux();
  const classes = useStyles();
  return (
    <Layout>
      <Header className={classes.header}>
        <span>School Dashboard</span>
        <Menu theme="dark" mode="horizontal" className={classes.menuContainer}>
          <Menu.Item key="1">
            <Link to={SITELINKS.student.list}>Student</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to={SITELINKS.teacher.list}>Teacher</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to={SITELINKS.course.list}>Course</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content className={classes.mainContainer}>
        <div className={classes.container}>
          <Routes />
        </div>
      </Content>
      <Footer>2021, todos los derechos reservados</Footer>
    </Layout>
  );
};

export default App;
