export const HANDLE_INPUT_CHANGE = 'HANDLE_INPUT_CHANGE';
export const HANDLE_FORM_SUBMIT = 'HANDLE_FORM_SUBMIT';

export const handleInputChangeAction = (value) => ({
  type: HANDLE_INPUT_CHANGE,
  value,
});

export const handleFormSubmitAction = (e, inputValue) => ({
  type: HANDLE_FORM_SUBMIT,
  e,
  inputValue,
});
