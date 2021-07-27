import { connect } from 'react-redux';
import Form from 'src/components/Form';
import { handleInputChangeAction, handleFormSubmitAction } from 'src/store/actions';

const mapStateToProps = (state) => ({
  inputValue: state.inputValue,
});

const mapDispatchToProps = (dispatch) => ({
  onInputChange: (e) => {
    dispatch(handleInputChangeAction(e.target.value));
  },
  sendMessage: (e, inputValue) => {
    e.preventDefault();
    console.log('form submitted!');
    dispatch(handleFormSubmitAction(inputValue));
  },
});

const ConnectedForm = connect(mapStateToProps, mapDispatchToProps)(Form);
export default ConnectedForm;
