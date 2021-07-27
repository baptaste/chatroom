import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ message, author }) => (
  <div className="message">
    <p className="message__author">{author}</p>
    <p className="message__content">{message}</p>
  </div>
);

Message.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Message;
