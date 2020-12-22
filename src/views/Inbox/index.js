import React, { useState } from 'react';

import EmailRow from '../../components/EmailRow';
import ActionsMenu from '../../components/ActionsMenu';
import AsideMenu from '../../components/AsideMenu';
import InboxWrapper, { EmailsTable } from './styles';
import emails from '../../emails.json';

const Inbox = () => {
  const [allChecked, setAllChecked] = useState(false);
  const [filteredEmails, setFilteredEmails] = useState([]);
  const [filter, setFilter] = useState('');

  let tags = {};
  emails?.messages.forEach(email => {
    email.tags.forEach(tag => {
      if (!tags[tag])
        tags[tag] = 1;
      else
        tags[tag] = tags[tag] + 1;
    })
  });

  const handleTagSelect = (tag) => {
    if (tag) {
      const filteredList = emails?.messages.filter(email => {
        return email.tags.includes(tag)
      });
      setFilter(tag);
      setFilteredEmails(filteredList);
    } else {
      setFilter('');
      setFilteredEmails([]);
    }
  };

  return (
    <InboxWrapper>
      <ActionsMenu checked={allChecked} toggleSelections={() => setAllChecked(prev => !prev)} />
      <AsideMenu tags={tags} handleTagSelect={handleTagSelect} />
      <EmailsTable className="emails-table">
        {(filter ? filteredEmails : emails?.messages).map(email => (
          <EmailRow email={email} key={email.id} checked={allChecked} />
        ))}
      </EmailsTable>
    </InboxWrapper>
  );
};

export default Inbox;