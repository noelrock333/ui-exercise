import React from 'react';
import { ReactComponent as Tag } from '@fortawesome/fontawesome-free/svgs/solid/tag.svg';
import AsideMenuWrapper from './styles';

const AsideMenu = ({ tags, handleTagSelect }) => {
  return (
    <AsideMenuWrapper className="aside-menu">
      <div className="item" onClick={() => handleTagSelect('')}>
        <Tag /> <span>Clear filter</span>
      </div>
      {Object.keys(tags).map(tag => (
        <div className="item" key={tag} onClick={() => handleTagSelect(tag)}>
          <Tag /> <span>{tag} ({tags[tag]})</span>
        </div>
      ))}
    </AsideMenuWrapper>
  );
};

export default AsideMenu;
