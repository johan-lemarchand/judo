import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import test from '../../../../../assets/images/test.jpg';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';






const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 500,
    margin: "1em",
    boxSizing: "border-box",
  },
  media: {
    height: 140,

  },
  button: {
    margin: theme.spacing(1),
  },
}));

 
const Details = () => {
  
    const classes = useStyles();
  return (
    <Grid container spacing={3} justify="center">
      
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={test}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Nom Prenom
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Adresse 
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Email 
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            date de naissance
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            numéro de téléphone 
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            license 
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            catégorie 
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            rôle
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<EditIcon/>}
      >
        Editer
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<DeleteIcon/>}
      >
        Supprimer
      </Button>
      </CardActions> 
    </Card>
    </Grid>
  );
}
export default Details;