import { connect } from 'react-redux';
import App from '../components/App';

import { fetchUser } from '../actions/Admin/users';
import { fetchArticle, fetchPicture } from '../actions/Admin/articles';

import { fetchEvents, displayEvent } from '../actions/calendar';
import { fetchPresentation } from '../actions/presentation';


import {fetchSponsors} from '../actions/sponsors';

const mapStateToProps = ({login, users}) => ({
    email: login.email,
    users: users.list,
});

const mapDispatchToProps = (dispatch) => ({
    fetchUser: () => {
       
        dispatch(fetchUser());
    },
                                          
    fetchArticle: () => {
        dispatch(fetchArticle());
    },

    fetchPicture: () => {
        dispatch(fetchPicture());
    },

    fetchEvents: () => {
        
        dispatch(fetchEvents());
    },

    fetchPresentation: () => {
        dispatch(fetchPresentation());
    },

    displayEvent: () => {
        dispatch(displayEvent());
    },  
    
    fetchSponsors: () => {
        dispatch(fetchSponsors());
    }     
});

export default connect(mapStateToProps, mapDispatchToProps)(App);