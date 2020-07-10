import React from 'react';
import MaterialTable from 'material-table';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const extrait = 'Vituperandae si nullo illa Epicureum quae nullo se nullo dissentias cum rem cum philosophia potest ille vituperandae inter cum illa rem probes non indignae potest enim rem potest non esset eius quid non cum contumeliae reprehensiones quid cum mihi eius disputando maledicta non inquam ludus ob philosophia iracundiae praesertim quid pertinaces diceret dissentientium non probes ob contentiones ludus concertationesque pacto tum ut esset non iracundiae si Triari contumeliae quo illa esset pacto probes sunt dissentias tum si maledicta non diceret nullo quae iracundiae tum reprehensiones nullo mihi mihi in diceret iracundiae perdiscere concertationesque me quid perdiscere non non nullo esset.';

const EventList = ({users}) => {
  const classes = useStyles();

  
  return (
    <Grid container className={classes.root} spacing={4}>
      <Grid item xs={12}>
    <MaterialTable
      title="Liste des événements"

      columns={[
        { title: 'Noms des événements', field: 'event_name', filtering: false },
        { title: 'Contenu des événements', field: 'event_content',  filtering: false },
        { title: 'Lieu des événements', field: 'event_address',  filtering: false },
        { title: 'Date des événements', field: 'event_date',  filtering: false },
        { title: 'Auteur des événements', field: 'event_author',  filtering: false },
        { title: 'Photo des événements', field: 'event_picture',  filtering: false },
      ]}

      data={[ 
        { event_name: 'Compétition', event_content: `${extrait.substring(0, 50)} ...`,event_address: '25 rue d\'oclock', event_date: '2020-10-11', event_author:'Toto', event_picture: 'monde'},   
      ]}

      detailPanel={rowData => {
        return (
            // Le bouton sert à afficher tout le contenu qui est dans cette div
            <div>
            {rowData.event_content}
            </div>

        )
      }}

      actions={[
        {
          icon: 'edit',
          tooltip: 'Éditer l\'événement',
          onClick: (event, rowData) => alert("You saved " + rowData.event_name)
        },
        rowData => ({
          icon: 'delete',
          tooltip: 'Supprimer l\'événement ',
          onClick: (event, rowData) => confirm("You want to delete " + rowData.event_name),
         
        }),
        {
          icon: 'add',
          tooltip: 'Ajout d\'un événement',
          isFreeAction: true,
          onClick: (event) => alert("You want to add a new row")
        }
        
      ]}
      options={{
        actionsColumnIndex: -1,
        filtering: true,
      }}
    /> 
    </Grid>
    </Grid>  
  )
}
export default EventList;