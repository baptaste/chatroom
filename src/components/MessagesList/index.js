import React from 'react';
import PropTypes from 'prop-types';

import Message from 'src/components/Message';

const MessagesList = ({ messages }) => (
  <div className="messagesList">
    {messages.map((message) => (
      <Message
        key={message.author + message.message}
        author={message.author}
        message={message.message}
      />
    ))}
  </div>
);

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default MessagesList;
