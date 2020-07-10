import { FETCH_ARTICLE, fetchArticle, fetchArticleSuccess, SUBMIT_ARTICLE, DELETE_ARTICLE_SUBMIT, MODIFY_ARTICLE_SUBMIT, modifyArticleSuccess, FETCH_PICTURE, fetchPictureSuccess, fetchPicture } from '../../actions/Admin/articles';
import axios from 'axios';

export default (store) => (next) => (action) => {

    switch(action.type) {

        case FETCH_ARTICLE:
            axios.get('http://54.166.4.90/projet-judo/back/public/index.php/api/articles')
            .then((response) => {
                console.log('ok', response)
                store.dispatch(fetchArticleSuccess(response.data["hydra:member"]))
            })
            .catch((error) => {
                console.log(error, 'erreur avec api')
            })
            break;
        case FETCH_PICTURE:
            axios.get('http://54.166.4.90/projet-judo/back/public/index.php/api/media_objects')
            .then((response) => {
                console.log('ok', response)
                store.dispatch(fetchPictureSuccess(response.data["hydra:member"]))
            })
            .catch((error) => {
                console.log(error, 'erreur avec api')
            })
            break;
        case SUBMIT_ARTICLE:
            axios({
                url: 'http://54.166.4.90/projet-judo/back/public/index.php/api/articles',
                method: 'post',
                withCredentials: false,
                data:  {
                    title: store.getState().articles.newArticle.title,
                    content: store.getState().articles.newArticle.content,
                },
            })
            .then((response) => {
                console.log('nouveau article', response),
                store.dispatch(fetchArticle())
            })
            .catch((error) => {
                console.log('erreur de l\'envoie de l\'article',error )
            });
            
            /*var bodyFormData = new FormData();
            bodyFormData.append('file', store.getState().articles.picture.file);
            axios({
                url:'http://54.166.4.90/projet-judo/back/public/index.php/api/media_objects',
                method: 'post',
                withCredentials: false,
                data: bodyFormData,
                headers: {
                    'Content-Type': 'multipart/form-data',
                  },
            })
            .then((response) => {
                console.log('nouvel image', response),
                store.dispatch(fetchPicture())
            })
            .catch((error) => {
                console.log('erreur de l\'envoie de l\'image',error )
            });*/
            break;
            case DELETE_ARTICLE_SUBMIT:
                axios({
                    url: `http://54.166.4.90/projet-judo/back/public/index.php/api/articles/${store.getState().articles.articleToDelete}`,
                    method: 'delete',
                    withCredentials: false,                    
                })
                .then((response) => {
                    console.log('article supprimé', response),
                    store.dispatch(fetchArticle())
                })
                .catch((error) => {
                    console.log('erreur de la suppression')
                })
                break;
            case MODIFY_ARTICLE_SUBMIT:
                axios({
                    url: `http://54.166.4.90/projet-judo/back/public/index.php/api/articles/${store.getState().articles.articleToEdit.id}`,
                    method: 'put',
                    withCredentials: false,
                    data:  {
                        title: store.getState().articles.articleToEdit.title,
                        content: store.getState().articles.articleToEdit.content,
                        picture: store.getState().articles.articleToEdit.upload,
                    },                    
                                        
                                       
                })
                .then((response) => {
                    console.log('article modifié', response),
                    store.dispatch(fetchArticle()),
                    store.dispatch(modifyArticleSuccess())
                })
                .catch((error) => {
                    console.log('erreur de la modification')
                })
                break;

        default:
            next(action);
    }


  };
  