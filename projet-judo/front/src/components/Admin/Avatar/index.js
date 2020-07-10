import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import test from '../../../assets/images/test.jpg';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const ImageAvatars = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Avatar alt="" src={test} className={classes.large} />
    </div>
  );
}
export default ImageAvatars;