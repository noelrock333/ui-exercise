import React from 'react';

import EmailRow from '../../components/EmailRow';
import InboxWrapper from './styles';
import emails from '../../emails.json';

const Inbox = () => {
  return (
    <InboxWrapper>
      {emails?.messages.map(email => <EmailRow email={email} key={email.id} />)}
    </InboxWrapper>
  );
};

export default Inbox;