import { createUseStyles } from 'react-jss';
import { SECONDARYCOLOR } from 'app/defaultValues';

type ClassNames = 'header' | 'mainContainer' | 'container' | 'menuContainer';

const useStyles = createUseStyles<ClassNames>({
  header: {
    backgroundColor: SECONDARYCOLOR,
    fontSize: '2.4rem',
    color: 'white',
    display: 'flex',
    '& span': {
      margin: '0px 20px 0px 10px',
    },
  },
  mainContainer: {
    height: '100vh',
    padding: 40,
  },
  container: {
    backgroundColor: 'white',
    height: '100vh',
  },
  menuContainer: {
    backgroundColor: `${SECONDARYCOLOR} !important`,
  },
});

export default useStyles;
