import { connect } from 'react-redux';
import articleTable from '../../components/Admin/Article/ArticleTable';
import { deleteArticle, deleteArticleSubmit, modifyArticle, modifyArticleChange, modifyArticleSubmit} from '../../actions/Admin/articles';

const mapStateToProps = (state) => ({
    list: state.articles.list,
    edit: state.articles.edit,
    articleId: state.articles.articleToEdit.id,
    editTitle: state.articles.articleToEdit.title,
    editContent: state.articles.articleToEdit.content,
    isLoad: state.articles.isLoad,
});

const mapDispatchToProps = (dispatch) => ({
    deleteArticle: (payload) => {
        dispatch(deleteArticle(payload));
    },
    submitDelete: () => {
        dispatch(deleteArticleSubmit());
    },
    editArticle: (payload) => {
        dispatch(modifyArticle(payload));
    },
    editArticleChange: (payload) => {
        dispatch(modifyArticleChange(payload));
    },
    submitEdit: () => {
        dispatch(modifyArticleSubmit());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(articleTable);