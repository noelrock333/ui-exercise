import React, { useState, useEffect } from 'react';
import moment from 'moment';

import EmailRowWrapper from './styles';

const EmailRow = ({ email, checked }) => {
  const [check, setCheck] = useState(!!checked);

  useEffect(() => {
    setCheck(!!checked);
  }, [checked]);

  const { subject, tags, date } = email;
  return (
    <EmailRowWrapper onClick={() => setCheck(!check)}>
      <div className="checkbox">
        <input type="checkbox" checked={check} readOnly />
      </div>
      <div className="subject">{subject}</div>
      <div className="tags">
        {tags.map((item, index) => (<div key={index} className="tag">{item}</div>))}
      </div>
      <div className="date">{moment(date).format('MMM D, YYYY')}</div>
    </EmailRowWrapper>
  );
};

export default EmailRow;
