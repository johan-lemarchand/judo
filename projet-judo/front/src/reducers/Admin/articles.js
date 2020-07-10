import { FETCH_ARTICLE_SUCCESS, INPUT_CHANGE, DELETE_ARTICLE, MODIFY_ARTICLE, MODIFY_ARTICLE_CHANGE, MODIFY_ARTICLE_SUCCESS, FETCH_PICTURE_SUCCESS, FILE_CHANGE } from '../../actions/Admin/articles';

const initialState = {
    list: [],
    newArticle: {
      title:'',
      content: '',
      file: '',
    },
    filePath: {},
    articleToDelete: '',
    articleToEdit: {},
    edit: false,
    isLoad: false,
    idPicture: '',
};

const articles = (state = initialState, action = {}) => {
  switch (action.type) {
     case FETCH_ARTICLE_SUCCESS:
     return {
         ...state,
         list: [...action.payload],
         isLoad: true,
         newArticle: {
          title:'',
          content: '',
          file: '',
        },
     }
    case FETCH_PICTURE_SUCCESS:
    return {
        ...state,
        mediaObject: [...action.payload],
    }
     case INPUT_CHANGE:
       return {
         ...state,
         newArticle : {
           ...state.newArticle,
           ...action.payload,
         }
       }
       case FILE_CHANGE:
         return {
           ...state,
           picture: action.payload,
         }
    case DELETE_ARTICLE:
      return {
        ...state,
        articleToDelete: action.payload,
      }
    case MODIFY_ARTICLE:
      return {
        ...state,
        articleToEdit: {
          ...action.payload
        },
        edit: !state.edit,
      }  
      case MODIFY_ARTICLE_CHANGE:
        return {
          ...state,
          articleToEdit: {
            ...state.articleToEdit,
            ...action.payload,
          }
        }
      case MODIFY_ARTICLE_SUCCESS:
        return {
          ...state,
          edit: !state.edit,
        }
    default:
      return state;
      
  }
};

export default articles;