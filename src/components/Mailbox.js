import React from 'react';
import PropTypes from 'prop-types';

const Mailbox = ({ unreadMessages = [] }) => (
  <div>
    <h1>Hello!</h1>
    {unreadMessages.length > 0 ? (
      <p>You have {unreadMessages.length} unread messages.</p>
    ) : (
      <p>No unread messages.</p>
    )}
  </div>
);

Mailbox.propTypes = {
  unreadMessages: PropTypes.array,
};

export default Mailbox;
