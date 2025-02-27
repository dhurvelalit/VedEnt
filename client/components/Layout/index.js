import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import VedEntAppBar from "../VedEntAppBar";

const useStyles = makeStyles((theme) => ({
  container: {},
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div>
      <VedEntAppBar />
      <Grid container className={classes.container}>
        {children}
      </Grid>
    </div>
  );
};

export default Layout;
