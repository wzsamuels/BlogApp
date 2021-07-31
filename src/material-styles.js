import {makeStyles} from "@material-ui/core/styles";
import {createTheme} from "@material-ui/core";

export const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#BB86FC',
    },
    secondary: {
      main: '#03DAC5',
    },
    error: {
      main: '#CF6679'
    },
    background:
    {
      default: '#121212'
    }
  },
});

export const useStyles = makeStyles((theme) => ({
  App: {
    backgroundColor: '#121212',
  },
  box : {
    display: 'flex',
    justifyContent: "space-between",
    alignItems: "center"
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    backgroundColor: theme.palette.background.paper,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}), {index: 1});