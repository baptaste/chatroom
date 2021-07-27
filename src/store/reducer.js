/* eslint-disable arrow-body-style */
import { HANDLE_INPUT_CHANGE, HANDLE_FORM_SUBMIT } from './actions';

const initialState = {
  messages: [
    {
      author: 'Johnny Fiable',
      message: 'Salut',
    },
    {
      author: 'Honstap Desbars',
      message: 'Ca sent bon',
    },
    {
      author: 'Johnny Fiable',
      message: 'Bof!',
    },
    {
      author: 'Honstap Desbars',
      message: 'Seul lavenir nous le diras...',
    },
  ],
  inputValue: '',
};

const reducer = (oldState = initialState, action) => {
  const newMessage = {
    author: 'Johnny Fiable',
    message: oldState.inputValue,
  };

  switch (action.type) {
    case HANDLE_INPUT_CHANGE:
      return {
        ...oldState,
        inputValue: action.value,
      };
    case HANDLE_FORM_SUBMIT:
      return {
        ...oldState,
        messages: [...oldState.messages, newMessage],
      };
    default:
      return oldState;
  }
};

export default reducer;
