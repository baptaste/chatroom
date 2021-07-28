/* eslint-disable arrow-body-style */
import { HANDLE_INPUT_CHANGE, HANDLE_FORM_SUBMIT } from './actions';
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
  inputValue: '',
  nickname: 'Baptiste',
};

const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    case HANDLE_INPUT_CHANGE:
      return {
        ...oldState,
        inputValue: action.value,
      };
    case HANDLE_FORM_SUBMIT: {
      // si pas de string vide, on accepte la soumission
      if (oldState.inputValue.trim() !== '') {
        // fonction dite selecteur (cf: store/selector.js)
        const maxId = getHighestId(oldState);

        const newMessage = {
          // si on a un max, on ajoute 1
          // sinon, c'est le 1er msg, on lui donne l'id 1
          id: maxId ? maxId + 1 : 1,
          author: oldState.nickname,
          message: oldState.inputValue,
        };

        return {
          ...oldState,
          messages: [...oldState.messages, newMessage],
          inputValue: '',
        };
      }
      // string vide ==> on return le oldState, pas de soumission du form
      return oldState;
    }
    default:
      return oldState;
  }
};

export default reducer;
