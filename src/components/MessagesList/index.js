import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import Message from 'src/components/Message';
import './messagesList.scss';

const MessagesList = ({ messages }) => {
  const messageRef = useRef(null);
  // effet appelé lorsque le tableau de messages a changé
  useEffect(() => {
    messageRef.current.scrollTop = messageRef.current.scrollHeight;
  }, [messages]);

  const scrollToTop = () => {
    messageRef.current.scrollTop = 0;
  };

  return (
    <div
      ref={messageRef}
      className="messagesList"
    >
      {messages.map((message) => (
        <Message
          key={message.id}
          author={message.author}
          message={message.message}
        />
      ))}
      <button
        type="button"
        className="messagesList__scrollTop-btn"
        title="Revenir en haut"
        onClick={scrollToTop}
      >
        <i className="fas fa-angle-up" />
      </button>
    </div>
  );
};

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default MessagesList;
