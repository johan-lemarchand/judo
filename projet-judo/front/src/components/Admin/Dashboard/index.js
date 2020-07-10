import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';







const images = [
    {
      url: 'https://cdn.pixabay.com/photo/2017/10/12/22/41/antique-2846276_960_720.jpg',
      title: 'Utilisateurs',
      width: '600px',
      link: '/admin/user',
    },
    {
      url: 'https://cdn.pixabay.com/photo/2017/03/08/00/10/judo-2125606_960_720.jpg',
      title: 'Catégorie',
      width: '600px',
      link: '/admin/categorie'
    },
    {
        url: 'https://www.optionfinance.fr/fileadmin/_processed_/csm_img-event_54745635d1.jpg',
        title: 'Evénements',
        width: '600px',
        link: '/admin/event'
    },
    {
        url: 'https://cdn.pixabay.com/photo/2017/08/13/16/43/notebook-2637757_960_720.jpg',
        title: 'Articles et tags',
        width: '600px',
        link: '/admin/article'
    },
    {
        url: 'https://cdn2.vectorstock.com/i/1000x1000/26/21/clipboard-icon-male-person-profile-avatar-symbol-vector-21112621.jpg',
        title: 'Liste des utilisateurs',
        width: '600px',
        link: '/admin/userlist'
    },
    {
        url: 'https://cdn.svenskalag.se/teamdata/images/33035/484024/sponsor_730.jpg?0',
        title: 'Sponsors',
        width: '600px',
        link: '/admin/sponsors'
    },
    {
        url: 'https://www.trelaze.fr/wp-content/uploads/2019/05/judo.jpg',
        title: 'Entrainement',
        width: '600px',
        link: '/admin/categorie/masculin'
    },


    
  ];
  
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      margin: '10em',
      minWidth: 200,
      width: '100%',
      justifyContent: 'center',
    },
    image: {
      position: 'relative',
      height: 250,
      [theme.breakpoints.down('xs')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
      },
      '&:hover, &$focusVisible': {
        zIndex: 1,
        '& $imageBackdrop': {
          opacity: 0.15,
        },
        '& $imageMarked': {
          opacity: 0,
        },
        '& $imageTitle': {
          border: '4px solid currentColor',
        },
      },
    },
    focusVisible: {},
    imageButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white,
    },
    imageSrc: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: '100%',
      backgroundPosition: 'center 40%',
      backgroundRepeat:'no-repeat',
    },
    imageBackdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
      position: 'relative',
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.common.white,
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity'),
    },
  }));
  
  const Dashboard = () => {
    const classes = useStyles();
  
    return (
      <Grid container direction="row">
      <div className={classes.root}>
        {images.map((image) => (
          <Link key={image.title} to={`${image.link}`} >
          <ButtonBase 
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: image.width,
            }}
            
            >
            
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                    
                {image.title}
                <span className={classes.imageMarked} />
            
              </Typography>
            </span>
            
          </ButtonBase>
                </Link>
          
         ))}
      </div>
      </Grid>
    );
  }

  export default Dashboard;