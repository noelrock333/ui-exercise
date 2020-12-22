import React, { useState } from 'react';

import EmailRow from '../../components/EmailRow';
import ActionsMenu from '../../components/ActionsMenu';
import AsideMenu from '../../components/AsideMenu';
import InboxWrapper, { EmailsTable } from './styles';
import emails from '../../emails.json';

const Inbox = () => {
  const [allChecked, setAllChecked] = useState(false);
  console.log({ allChecked })
  return (
    <InboxWrapper>
      <ActionsMenu checked={allChecked} toggleSelections={() => setAllChecked(prev => !prev)} />
      <AsideMenu />
      <EmailsTable className="emails-table">
        {emails?.messages.map(email => <EmailRow email={email} key={email.id} checked={allChecked} />)}
      </EmailsTable>
    </InboxWrapper>
  );
};

export default Inbox;