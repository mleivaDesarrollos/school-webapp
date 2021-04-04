import { createUseStyles } from 'react-jss';

export type StudentViewClassNames =
  | 'container'
  | 'buttonContainer'
  | 'inputContainer'
  | 'button';

const useStyles = createUseStyles<StudentViewClassNames>({
  container: {
    padding: 30,
  },
  buttonContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'end',
    paddingTop: 10,
    marginRight: 18,
  },
  button: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
  },
  inputContainer: {
    padding: '0 10px',
  },
});

export default useStyles;
