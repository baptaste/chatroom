import React from 'react';
import PropTypes from 'prop-types';

import Message from 'src/components/Message';

const MessagesList = ({ messages }) => (
  <div className="messagesList">
    {messages.map((message) => (
      <Message
        message={message}
      />
    ))}
  </div>
);

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};

export default MessagesList;
