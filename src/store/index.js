/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducer';
import logMiddleware from './middlewares/logMiddleware';
import authMiddleware from './middlewares/authMiddleware';

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(logMiddleware, authMiddleware),
  ),
);

export default store;
