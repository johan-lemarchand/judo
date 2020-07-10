import React from 'react';
import MaterialTable from 'material-table';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent:"center",
    marginTop: 100,

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

const SponsorDetail=() =>{
  const classes = useStyles();
  return (
    <Grid container className={classes.root} >      
    <MaterialTable
      title="Liste des sponsors"
      
      columns={[
        { title: 'Noms du sponsor', field: 'sponsor_name' },
        { title: 'Contenu', field: 'sponsor_content' },
        { title: 'Adresse', field: 'sponsor_address'},
        { title: 'Numéro de téléphone', field: 'sponsor_number'},
        { title: 'Photo', field: 'sponsor_picture'},
        { title: 'Date de création', field: 'sponsor_date', type: 'date' },
        
      ]}

      data={[
        { article_name: 'Un article', article_content: `${extrait.substring(0, 50)}...`, article_date: '2017-10-11', article_author:'Toto',article_tag: 'monde'},
        { article_name: 'Toto et tata font leur première compétition', article_content: `${extrait.substring(0, 50)}...`, article_date: '2017-12-12', article_author:'Paul', article_tag: 'club'},
        { article_name: 'Pourquoi t\'es nul au judo', article_content: `${extrait.substring(0, 50)}...`, article_date: '2017-12-12', article_author:'Paul', article_tag: 'competition'},
        { article_name: 'Le projet o\'judo', article_content: `${extrait.substring(0, 50)}...`, article_date: '2017-12-12', article_author:'Pierre', article_tag: 'club'},
        { article_name: 'ABCDEFGH', article_content: `${extrait.substring(0, 50)}...`, article_date: '2017-12-31', article_author:'Dan', article_tag: 'event'},
        
      ]}

      actions={[
        {
          icon: 'edit',
          tooltip: 'Éditer l\'article',
          onClick: (event, rowData) => alert("You saved " + rowData.article_name)
        },
        rowData => ({
          icon: 'delete',
          tooltip: 'Supprimer l\'article ',
          onClick: (event, rowData) => confirm("You want to delete " + rowData.article_name),
         
        }),
        {
          icon: 'add',
          tooltip: 'Ajout d\'un article',
          isFreeAction: true,
          onClick: (event) => alert("You want to add a new row")
        }
        
      ]}
      options={{
        actionsColumnIndex: -1,
      }}
      /> 
    </Grid>
    
  )
}
export default SponsorDetail;