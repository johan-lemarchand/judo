import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ArticleTable from '../../../containers/Admin/Articles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom'





const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  button : {    
    marginBottom: "30px",
  }
}));


const ArticleAdmin = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Container maxWidth="xl" className={classes.container}>
          <Link  to="/admin/article/add"><Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<AddIcon />}
        >
          Ajouter
        </Button></Link>
          <Grid container spacing={3}>
              <ArticleTable />
        </Grid>
            </Container>                  
    </div>
  );
}

export default ArticleAdmin;