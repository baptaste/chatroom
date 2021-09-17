/* eslint-disable import/prefer-default-export */

export const getHighestId = (state) => {
  const ids = state.messages.map((msg) => msg.id);
  return Math.max(...ids);
};

export const isUserLogged = (state) => state.nickname !== null;
