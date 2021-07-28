import { connect } from 'react-redux';
import Form from 'src/components/Form';
import { handleInputChangeAction, handleFormSubmitAction } from 'src/store/actions';

const mapStateToProps = (state) => ({
  msgInputValue: state.msgInputValue,
});

const mapDispatchToProps = (dispatch) => ({
  onInputChange: (e) => {
    dispatch(handleInputChangeAction(e.target.value));
  },
  sendMessage: (e, msgInputValue) => {
    e.preventDefault();
    console.log('form submitted!');
    dispatch(handleFormSubmitAction(msgInputValue));
  },
});

const ConnectedForm = connect(mapStateToProps, mapDispatchToProps)(Form);
export default ConnectedForm;
