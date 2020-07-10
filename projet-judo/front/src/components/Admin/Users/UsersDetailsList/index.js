import React from 'react';
import MaterialTable from 'material-table';



const UsersDetailsList = () => {
  
  return (
    <MaterialTable
      title="liste des utilisateurs et Rôles"

      columns={[
        { title: 'Noms', field: 'firstname' },
        { title: 'Prénoms', field: 'lastname' },
        { title: 'date de naissance', field: 'birthYear', type: 'numeric' },
        { title: 'adresse', field: 'address'},
        { title: 'photo', field: 'picture'},
        { title: 'numéro de téléphone', field: 'phone number'},
        { title: 'email', field: 'mail'},
        { title: 'mot de passe', field: 'password'},
        { title: 'numéro de license', field: 'license'},
        { title: 'status', field: 'status'},
        { title: 'rôles', field: 'role'},
        { title: 'catégories', field: 'categorie'},
      ]}

      data={[
        { firstname: 'Mehmet', lastname: 'Baran', birthYear: 1987 },
        { firstname: 'Zerya Betül', lastname: 'Baran', birthYear: 2017},
    
      ]}

      actions={[
        {
          icon: 'edit',
          tooltip: 'editer l\'utilisateur',
          onClick: (event, rowData) => alert("You saved " + rowData.name)
        },
        rowData => ({
          icon: 'delete',
          tooltip: 'supprimer l\'utilisateur',
          onClick: (event, rowData) => confirm("You want to delete " + rowData.name),
         
        }),
        {
          icon: 'add',
          tooltip: 'Add User',
          isFreeAction: true,
          onClick: (event) => alert("You want to add a new row")
        }
        
      ]}
      options={{
        actionsColumnIndex: -1
      }}
    />
  )
}
export default UsersDetailsList;