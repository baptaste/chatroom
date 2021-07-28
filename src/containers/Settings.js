import { connect } from 'react-redux';
import Settings from 'src/components/Settings';
import {
  handleEmailChangeAction,
  handlePasswordChangeAction,
  toggleDisplaySettingsAction,
} from 'src/store/actions';

const mapStateToProps = (state) => ({
  emailInputValue: state.emailInputValue,
  passwordInputValue: state.passwordInputValue,
  isSettingsOpen: state.isSettingsOpen,
});

const mapDispatchToProps = (dispatch) => ({
  onEmailInputChange: (e) => {
    dispatch(handleEmailChangeAction(e.target.value));
  },
  onPasswordInputChange: (e) => {
    dispatch(handlePasswordChangeAction(e.target.value));
  },
  toggleDisplaySettings: (display) => {
    dispatch(toggleDisplaySettingsAction(display));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
