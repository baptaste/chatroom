/* eslint-disable arrow-body-style */
import { HANDLE_INPUT_CHANGE } from './actions';

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
  switch (action.type) {
    case HANDLE_INPUT_CHANGE:
      return {
        ...oldState,
        inputValue: action.value,
      };
    default:
      return oldState;
  }
};

export default reducer;
