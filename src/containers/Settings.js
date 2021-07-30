import { connect } from 'react-redux';
import Settings from 'src/components/Settings';
import {
  handleEmailChangeAction,
  handlePasswordChangeAction,
  toggleDisplaySettingsAction,
  handleUserLogout,
} from 'src/store/actions';

import { isUserLogged } from 'src/store/selectors';

const mapStateToProps = (state) => ({
  emailInputValue: state.emailInputValue,
  passwordInputValue: state.passwordInputValue,
  isSettingsOpen: state.isSettingsOpen,
  isLogged: isUserLogged(state),
});

const mapDispatchToProps = (dispatch) => ({
  onEmailInputChange: (e) => {
    dispatch(handleEmailChangeAction(e.target.value));
  },
  onPasswordInputChange: (e) => {
    dispatch(handlePasswordChangeAction(e.target.value));
  },
  toggleDisplaySettings: () => {
    dispatch(toggleDisplaySettingsAction());
  },
  onSettingsFormSubmit: (e) => {
    e.preventDefault();
    dispatch({ type: 'SUBMIT_LOGIN' });
  },
  onUserLogout: () => {
    dispatch(handleUserLogout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
