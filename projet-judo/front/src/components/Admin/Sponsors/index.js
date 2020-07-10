import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SponsorDetail from "./SponsorDetail";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const SponsorsAdmin = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid container spacing={3}>
          <SponsorDetail maxWidth="xl" className={classes.container} />
        </Grid>
    </div>
  );
};

export default SponsorsAdmin;
