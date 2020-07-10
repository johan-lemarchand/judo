import { connect } from 'react-redux';
import UsersCard from '../../components/Admin/Users/UsersCard/';

const mapStateToProps = (state) => ({
    list: state.users.list,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UsersCard);