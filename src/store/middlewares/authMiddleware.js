import axios from 'axios';

const authMiddleware = (store) => (next) => (action) => {

  if (action.type === 'SUBMIT_LOGIN') {

    const state = store.getState();

    axios.post('http://localhost:3001/login', {
      email: state.emailInputValue,
      password: state.passwordInputValue,
    }).then((response) => {
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
