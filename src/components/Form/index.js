import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ inputValue, onInputChange, sendMessage }) => (
  <form onSubmit={sendMessage}>
    <input
      type="text"
      placeholder="Saisissez votre message..."
      value={inputValue}
      onChange={onInputChange}
    />
    <button
      type="button"
    >
      >
    </button>
  </form>
);

Form.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
};

export default Form;
