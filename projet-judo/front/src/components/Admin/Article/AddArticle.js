import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& .MuiTextField-root': {
            margin: theme.spacing(4),
            width: '25ch',
            background: 'white',
        },
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}));

const AddArticle = ({ title, content, file, inputChange, handleSubmit, fileChange }) => {
    const classes = useStyles();
    
    return (
        <form className="form_article" onSubmit={(evt) => { evt.preventDefault(); handleSubmit() }}>
            <input name="title" placeholder="Entrer un titre" className="input_title" value={title} onChange={(evt) => {inputChange({ [evt.target.name]: evt.target.value})}} required /> 
            <textarea rows="4" cols="50" name="content" placeholder="Entrer votre contenu" className="message" value={content}
                    onChange={(evt) => {inputChange({ [evt.target.name]: evt.target.value})}} required></textarea>

            <div className="button-wrapper">
                <span className="label">
                    ajouter une image
                </span>

                <input type="file" name="file" id="upload" className="upload-box"  onChange={(evt) => {fileChange( evt.target.files[0], )}} required placeholder="Upload File" accept="image/png, image/jpeg" />
  
            </div>
            <button type="submit"
                     className="btn btn-primary" 
                     onClick={(evt) => { evt.preventDefault(); handleSubmit() }}>
                        <Link to="/admin/article">
                         Ajouter l'article
                </Link>
                         </button>
            
                </form>
    )
}

AddArticle.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    file: PropTypes.string.isRequired,
    inputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
}

export default AddArticle;