export const HANDLE_INPUT_CHANGE = 'HANDLE_INPUT_CHANGE';
export const HANDLE_FORM_SUBMIT = 'HANDLE_FORM_SUBMIT';
export const HANDLE_EMAIL_CHANGE = 'HANDLE_EMAIL_CHANGE';
export const HANDLE_PASSWORD_CHANGE = 'HANDLE_PASSWORD_CHANGE';
export const TOGGLE_DISPLAY_SETTINGS = 'TOGGLE_DISPLAY_SETTINGS';
export const HANDLE_LOGOUT = 'HANDLE_LOGOUT';

export const handleInputChangeAction = (value) => ({
  type: HANDLE_INPUT_CHANGE,
  value,
});

export const handleFormSubmitAction = (e, msgInputValue) => ({
  type: HANDLE_FORM_SUBMIT,
  e,
  msgInputValue,
});

export const toggleDisplaySettingsAction = () => ({
  type: TOGGLE_DISPLAY_SETTINGS,
});

export const handleEmailChangeAction = (value) => ({
  type: HANDLE_EMAIL_CHANGE,
  value,
});

export const handlePasswordChangeAction = (value) => ({
  type: HANDLE_PASSWORD_CHANGE,
  value,
});

export const handleUserLogout = () => ({ type: HANDLE_LOGOUT });
