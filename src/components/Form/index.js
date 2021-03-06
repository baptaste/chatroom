import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import './form.scss';

const Form = ({
  msgInputValue, onInputChange, sendMessage, isLogged,
}) => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form
      className="form"
      onSubmit={sendMessage}
    >
      <input
        ref={inputRef}
        type="text"
        disabled={!isLogged}
        className="form__message-field"
        placeholder={isLogged ? 'Saisissez votre message...' : 'Connectez-vous pour écrire'}
        value={msgInputValue}
        onChange={onInputChange}
      />
      <button
        type="button"
        className="form__send-btn"
        onClick={sendMessage}
        title="Envoyer"
      >
        <i className="far fa-paper-plane" />
      </button>
    </form>
  );
};

Form.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  msgInputValue: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
};

export default Form;
