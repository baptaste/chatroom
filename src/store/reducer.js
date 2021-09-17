/* eslint-disable arrow-body-style */
import {
  HANDLE_INPUT_CHANGE,
  HANDLE_FORM_SUBMIT,
  HANDLE_EMAIL_CHANGE,
  HANDLE_PASSWORD_CHANGE,
  TOGGLE_DISPLAY_SETTINGS,
  HANDLE_LOGOUT,
} from './actions';
import { getHighestId } from './selectors';

const initialState = {
  messages: [
    {
      id: 1,
      author: 'Johnny Fiable',
      message: 'Salut',
    },
    {
      id: 2,
      author: 'Honstap Desbars',
      message: 'Ca sent bon',
    },
    {
      id: 3,
      author: 'Johnny Fiable',
      message: 'Bof!',
    },
    {
      id: 4,
      author: 'Honstap Desbars',
      message: 'Seul lavenir nous le diras...',
    },
  ],
  msgInputValue: '',
  emailInputValue: 'bouclierman@herocorp.io',
  passwordInputValue: 'jennifer',
  nickname: null,
  isSettingsOpen: false,
  isLogged: false,
};

const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    case HANDLE_INPUT_CHANGE:
      return {
        ...oldState,
        msgInputValue: action.value,
      };
    case HANDLE_EMAIL_CHANGE:
      return {
        ...oldState,
        emailInputValue: action.value,
      };
    case HANDLE_PASSWORD_CHANGE:
      return {
        ...oldState,
        passwordInputValue: action.value,
      };
    case 'SET_SETTINGS_FIELD_VALUE':
      return {
        //
      };
    case 'LOGIN_SUCCESS':
      return {
        ...oldState,
        nickname: action.nickname,
        isLogged: !oldState.isLogged,
      };
    case TOGGLE_DISPLAY_SETTINGS:
      return {
        ...oldState,
        isSettingsOpen: !oldState.isSettingsOpen,
      };
    case HANDLE_FORM_SUBMIT: {
      if (oldState.msgInputValue.trim() !== '') {
        const maxId = getHighestId(oldState);
        const newMessage = {
          id: maxId ? maxId + 1 : 1,
          author: oldState.nickname,
          message: oldState.msgInputValue,
        };

        return {
          ...oldState,
          messages: [...oldState.messages, newMessage],
          msgInputValue: '',
        };
      }
      return oldState;
    }
    case HANDLE_LOGOUT:
      return {
        ...oldState,
        isLogged: false,
        nickname: null,
      };
    default:
      return oldState;
  }
};

export default reducer;
