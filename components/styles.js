import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material';
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export const useStyles = makeStyles(() => ({
  button: {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    marginTop: 10,
  },
  form_container: {
    marginTop: '30px',
  },
  paper: {
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBox: {
    width: '100%',
    height: 400,
    objectFit: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px 6px',
    [theme.breakpoints.down('sm')]: {
      height: 250,
      margin: 0,
    },
  },
  details_container: {
    padding: '10px',
  },
  paper2: {
    padding: 20,
  },
  title: {
    fontSize: '2rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.625rem',
    },
  },
}));
