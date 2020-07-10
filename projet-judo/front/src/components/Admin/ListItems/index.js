import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import EventIcon from '@material-ui/icons/Event';
import SportsKabaddiIcon from '@material-ui/icons/SportsKabaddi';
import LabelIcon from '@material-ui/icons/Label';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessIcon from '@material-ui/icons/Business';
import EventNoteIcon from '@material-ui/icons/EventNote';
import {Link} from 'react-router-dom';
//import Link from '@material-ui/core/Link';


const ListItems = () => (
  
  <div>
    <Link color="inherit"  to="/admin">
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    </Link>
    <Link color="inherit"  to="/admin/user">
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
     <ListItemText primary="Utilisateurs" />
      </ListItem>
    </Link>
    <Link color="inherit"  to="/admin/categorie">
    <ListItem button>
      <ListItemIcon>
        <SportsKabaddiIcon />
      </ListItemIcon>
      <ListItemText primary="Catégories" />
    </ListItem>
    </Link>
    <Link color="inherit"  to="/admin/event">
    <ListItem button>
      <ListItemIcon>
        <EventIcon />
      </ListItemIcon>
      <ListItemText primary="Evénements" />
    </ListItem>
    </Link>
    <Link color="inherit"  to="/admin/article">
    <ListItem button>
      <ListItemIcon>
        < LabelIcon />
      </ListItemIcon>
      <ListItemText primary=" Articles et Tags" />
    </ListItem>
    </Link>
    <Link color="inherit"  to="/admin/userlist">
    <ListItem button>
      <ListItemIcon>
        < SupervisorAccountIcon />
      </ListItemIcon>
      <ListItemText  primary="Liste des utilisateurs" />
    </ListItem>
    </Link>
     <Link color="inherit"  to="/admin/sponsors"> 
    <ListItem button>
      <ListItemIcon>
        < BusinessIcon />
      </ListItemIcon>
     <ListItemText primary="Sponsors" />
    </ListItem>
     </Link> 
    <Link color="inherit"  to="/admin">
    <ListItem button>
      <ListItemIcon>
        < EventNoteIcon />
      </ListItemIcon>
      <ListItemText primary="Entrainement" />
    </ListItem>
    </Link>
  </div>
 
);

export default ListItems;