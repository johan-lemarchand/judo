import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import test from '../../../../assets/images/test.jpg';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minWidth: 250,
    maxWidth: 250,
    margin: "1em",
    boxSizing: "border-box",
  },
  media: {
    height: 140,
  },
});

const UsersCard = ({list}) => {
  const classes = useStyles();

  return (
    
       
    <Grid container spacing={3} justify="center" >
      {list.map((user) => (
    
    <Card key={user.id} className={classes.root}>
      <Link color="inherit"  to="/admin/user/detail">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={test}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {user.firstname}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {user.lastname}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {user.email}
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link> 
      <CardActions>
        <Button component={ Link } to ="/admin/user/detail" size="small" color="primary">
          Description
        </Button>        
      <Switch
        color="primary"
        name="user1"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      </CardActions>   
    </Card>
    
  ))
  }
    </Grid>
  );
}

export default UsersCard;