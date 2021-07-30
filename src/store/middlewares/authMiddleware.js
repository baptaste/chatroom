import axios from 'axios';

// A noter qu'en entreprise on écriera rarement nos middlewares à la main
// on utilisera plutôt redux-thunk ou redux-saga

const authMiddleware = (store) => (next) => (action) => {
  console.log('je suis authMiddleware et je vois passer laction ', action);

  if (action.type === 'SUBMIT_LOGIN') {
    console.log('ok, jai reçu laction qui dit de faire la requete');

    const state = store.getState();

    axios.post('http://localhost:3001/login', {
      email: state.emailInputValue,
      password: state.passwordInputValue,
    }).then((response) => {
      console.log(response);
      store.dispatch({ type: 'LOGIN_SUCCESS', nickname: response.data.pseudo });
    }, (error) => {
      console.log(error);
    });
  }
  else {
    next(action);
  }
};

export default authMiddleware;
