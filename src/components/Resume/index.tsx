import React from "react";
import { Container } from "./styles";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import CssBaseline from "@material-ui/core/CssBaseline";
import blue from '@material-ui/core/colors/blue';
import teal from '@material-ui/core/colors/teal';

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: blue[800],
    },
    secondary: {
      main: teal[600],
    },
  },
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    button: {
      margin: theme.spacing(1),
    },
  })
);

const Resume: React.FC = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <Container maxWidth="md">
          oie
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default Resume;
