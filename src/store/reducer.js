/* eslint-disable arrow-body-style */
const initialState = {
  // messages: ['Salut', 'Ca sent bon', 'Bof!', 'Seul lavenir nous le diras...'],
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
};

const reducer = (oldState = initialState, action) => {
  return oldState;
};

export default reducer;
