import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Link } from 'react-router-dom';






const images = [
    {
      url: 'https://www.womensports.fr/wp-content/uploads/2018/09/Daria-Bilodid-Pap-Panoramic.jpg',
      title: 'Féminin',
      width: '50%',
      link: '/admin/categorie/feminin',
    },
    {
      url: 'https://www.trelaze.fr/wp-content/uploads/2019/05/judo.jpg',
      title: 'Masculin',
      width: '50%',
      link: '/admin/categorie/masculin'
    },
    
  ];
  
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      margin: '10px',
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
  
const Genre = () => {
    const classes = useStyles();
  
    return (
        <div className={classes.root}>
        {images.map((image) => (
          <Link key={image.title} to={`${image.link}`} className={classes.root} >          
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
    );
  }

  export default Genre;