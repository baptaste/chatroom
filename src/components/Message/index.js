import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ message }) => (
  <div className="message">
    <p className="message__author">Machin</p>
    <p className="message__content">{message}</p>
  </div>
);

Message.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Message;
