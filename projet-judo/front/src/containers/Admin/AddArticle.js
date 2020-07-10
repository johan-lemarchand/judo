import { connect } from 'react-redux';
import AddArticle from '../../components/Admin/Article/AddArticle';
import { inputChange, submitArticle, fileChange } from '../../actions/Admin/articles';

const mapStateToProps = (state) => ({
    title: state.articles.newArticle.title,
    content: state.articles.newArticle.content,
    file: state.articles.newArticle.file,
});

const mapDispatchToProps = (dispatch) => ({
    inputChange: (payload) => {
        dispatch(inputChange(payload));
    },
    handleSubmit: () => {
        dispatch(submitArticle());
    },
    fileChange: (payload) => {
        dispatch(fileChange({file :payload}));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddArticle);