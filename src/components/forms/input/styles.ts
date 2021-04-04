import { createUseStyles } from 'react-jss';
import { PRIMARYCOLOR } from 'app/defaultValues';

type ClassNames =
  | 'inputContainer'
  | 'input'
  | 'errorContainer'
  | 'errorMessage'
  | 'label';

const useStyles = createUseStyles<ClassNames>({
  inputContainer: {},
  label: {
    fontWeight: 700,
    fontSize: '1.5rem',
    color: '#888',
  },
  input: {
    width: '100%',
  },
  errorContainer: {
    height: 20,
  },
  errorMessage: {
    fontSize: '1.5rem',
    color: PRIMARYCOLOR,
    fontWeight: 700,
  },
});

export default useStyles;
