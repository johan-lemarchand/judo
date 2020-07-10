import { connect } from 'react-redux';
import Header from '../components/Header';
import { submitLogout } from '../actions/login';

const mapStateToProps = ({login, users}) => ({
    isLogged: login.isLogged,
    email: login.email,
    users: users.list,
});

const mapStateToDispatch = (dispatch) => ({
    handleLogout: () => {
        dispatch(submitLogout());
    }
});

export default connect(mapStateToProps, mapStateToDispatch)(Header);