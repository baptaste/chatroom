import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Form = ({ inputValue, onInputChange, sendMessage }) => {
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
        className="form__message-field"
        placeholder="Saisissez votre message..."
        value={inputValue}
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
  inputValue: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
};

export default Form;
