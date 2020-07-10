import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import "./style.scss";


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  }))(TableRow);
  

  
const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });
  
const ArticleTable = ({list, deleteArticle, submitDelete, edit, editArticle, articleId, editArticleChange, editTitle, editContent, submitEdit, isLoad}) => {
    const classes = useStyles();
  
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell>titre</StyledTableCell>
              <StyledTableCell>Contenu</StyledTableCell>
              <StyledTableCell>Photo</StyledTableCell>
              <StyledTableCell>date de création</StyledTableCell>
              <StyledTableCell>date de mise à jour</StyledTableCell>
              <StyledTableCell>Utilisateur</StyledTableCell>
              <StyledTableCell>Modifier</StyledTableCell>
              <StyledTableCell>Supprimer</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((articles) => (
              <StyledTableRow key={articles.id}>
                <StyledTableCell>{articles.id}</StyledTableCell>
                <StyledTableCell>
                  {edit && articleId == articles.id ? 
                  <form onSubmit={(evt) => { evt.preventDefault(); submitEdit() }}>
                    <input 
                  type='text'
                 name='title' 
                 placeholder={articles.title}
                 value={editTitle}
                 onChange={(evt) => editArticleChange({ [evt.target.name]: evt.target.value})} />
                 </form> : <p>{articles.title}</p> }
                 </StyledTableCell>
                <StyledTableCell>
                  {edit && articleId == articles.id ?
                  <form onSubmit={(evt) => { evt.preventDefault(); submitEdit() }} >
                    <input 
                    type='text' 
                    name='content' 
                    placeholder={articles.content}
                    value={editContent}
                    onChange={(evt) => editArticleChange({ [evt.target.name]: evt.target.value})} />
                  </form> : <p>{articles.content.length > 40 ? articles.content.substring(0, 40)+'...' : articles.content}</p>}
                  </StyledTableCell>
                <StyledTableCell>images-2-5eaa8a6d8b1b7821556176.jpg</StyledTableCell>
                <StyledTableCell>{articles.createdAt}</StyledTableCell>
                <StyledTableCell>{articles.updatedAt}</StyledTableCell>
                  <StyledTableCell>{articles.firstname}</StyledTableCell>

                <StyledTableCell> <EditIcon className="btn-hover" onClick = {() => editArticle(articles)} /></StyledTableCell>
                <StyledTableCell><DeleteIcon className="btn-hover" onClick={() => {deleteArticle(articles.id), submitDelete()}} /> </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

ArticleTable.propTypes = {
  list: PropTypes.array.isRequired,
  deleteArticle: PropTypes.func.isRequired,
  submitDelete: PropTypes.func.isRequired,
}

export default ArticleTable;