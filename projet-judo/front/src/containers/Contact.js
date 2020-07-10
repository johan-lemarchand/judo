import { connect } from 'react-redux';
import Contact from '../components/Contact';
import {mailChange, submitMail} from '../actions/contact';

const mapStateToProps = ({contact}) => ({
    emailUser: contact.form.email,
    title: contact.form.title,
    content: contact.form.content,
    message: contact.message,
});

const mapDispatchToProps = (dispatch) => ({
    inputChange: (payload) => {
        dispatch(mailChange(payload));
    },
    handleSubmit: () => {
        dispatch(submitMail())
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);