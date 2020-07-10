import { connect } from 'react-redux';
import Login from '../components/Login';
import { settingsChange, submitLogin, submitLogout, deleteMessage } from '../actions/login';

const mapStateToProps = ({login}) => ({
    email: login.form.email,
    password: login.form.password,
    isLogged: login.isLogged,
    loggedMessage: login.loggedMessage,
    error: login.error,
});

const mapStateToDispatch = (dispatch) => ({
    inputChange: (payload) => {
        dispatch(settingsChange(payload));
    },
    handleLogin: () => {
        dispatch(submitLogin());
    },
    handleLogout: () => {
        dispatch(submitLogout());
    },
    deleteMessage: () => {
        dispatch(deleteMessage())
    },
});

export default connect(mapStateToProps, mapStateToDispatch)(Login);