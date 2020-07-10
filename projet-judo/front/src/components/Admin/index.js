import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Switch, Route, Link } from 'react-router-dom';
import ListItems from './ListItems';
import ImageAvatars from './Avatar';
import Dashboard from './Dashboard';
import Categories from './Categories';
import Woman from './Categories/Woman';
import Man from './Categories/Man';
import Event from './Event';
import Article from './Article';
import AddArticle from '../../containers/Admin/AddArticle';
import Sponsors from './Sponsors';
import UsersList from './Users/UsersList';
import Users from './Users';
import UsersDetails from './Users/UsersDetails';

import "./style.css"



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24,
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));


const Admin = () => {

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              O'judo
          </Typography>
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Tableau de bord
          </Typography>
          <Link to="/">
            <Typography className="back-to-site" component="p" variant="p" color="inherit" noWrap className={classes.title}>
              Revenir sur le site
            </Typography>
          </Link>
          <ImageAvatars />
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            O'judo
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List><ListItems /></List>
      </Drawer>
      <main className={classes.content} >
        <div className={classes.appBarSpacer} />
        <Switch>
          <Route exact path="/admin" component={Dashboard} />
          <Route exact path="/admin/categorie" component={Categories} />
          <Route exact path="/admin/categorie/feminin" component={Woman} />
          <Route exact path="/admin/categorie/masculin" component={Man} />
          <Route exact path="/admin/event" component={Event} />
          <Route exact path="/admin/article" component={Article} />
          <Route exact path="/admin/sponsors" component={Sponsors} />
          <Route exact path="/admin/userlist" component={UsersList} />
          <Route exact path="/admin/user" component={Users} />
          <Route exact path="/admin/user/detail" component={UsersDetails} />
          <Route exact path="/admin/article/add" component={AddArticle} />
        </Switch>
      </main>


    </div>
  );
}

export default Admin;