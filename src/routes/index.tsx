import { Switch, Route } from 'react-router-dom';
import { SITELINKS } from 'app/defaultValues';
import Course from './course';
import Teacher from './teacher';
import StudentList from './studentList';
import StudentAdd from './studentAdd';

const Routes: React.FC = () => (
  <>
    <Switch>
      <Route exact path={SITELINKS.student.list}>
        <StudentList />
      </Route>
      <Route exact path={SITELINKS.student.add}>
        <StudentAdd />
      </Route>
      <Route path={SITELINKS.teacher.list}>
        <Teacher />
      </Route>
      <Route path={SITELINKS.course.list}>
        <Course />
      </Route>
    </Switch>
  </>
);

export default Routes;
