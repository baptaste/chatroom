import { connect } from 'react-redux';
import Form from 'src/components/Form';
import { handleInputChangeAction, handleFormSubmitAction } from 'src/store/actions';

import { isUserLogged } from 'src/store/selectors';

const mapStateToProps = (state) => ({
  msgInputValue: state.msgInputValue,
  isLogged: isUserLogged(state),
});

const mapDispatchToProps = (dispatch) => ({
  onInputChange: (e) => {
    dispatch(handleInputChangeAction(e.target.value));
  },
  sendMessage: (e, msgInputValue) => {
    e.preventDefault();
    dispatch(handleFormSubmitAction(msgInputValue));
  },
});

const ConnectedForm = connect(mapStateToProps, mapDispatchToProps)(Form);
export default ConnectedForm;
