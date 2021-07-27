import { connect } from 'react-redux';
import Form from 'src/components/Form';
import { handleInputChangeAction } from 'src/store/actions';

const mapStateToProps = (state) => ({
  inputValue: state.inputValue,
});

const mapDispatchToProps = (dispatch) => ({
  onInputChange: (e) => {
    dispatch(handleInputChangeAction(e.target.value));
  },
});

const ConnectedForm = connect(mapStateToProps, mapDispatchToProps)(Form);
export default ConnectedForm;
