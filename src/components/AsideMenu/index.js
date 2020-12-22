import React from 'react';
import { ReactComponent as Star } from '@fortawesome/fontawesome-free/svgs/solid/star.svg';
import { ReactComponent as Bookmark } from '@fortawesome/fontawesome-free/svgs/solid/bookmark.svg';
import { ReactComponent as PaperPlane } from '@fortawesome/fontawesome-free/svgs/solid/paper-plane.svg';
import { ReactComponent as Tag } from '@fortawesome/fontawesome-free/svgs/solid/tag.svg';
import AsideMenuWrapper from './styles';

const AsideMenu = ({ tags }) => {
  return (
    <AsideMenuWrapper className="aside-menu">
      <div className="item">
        <Star />
      </div>
      <div className="item">
        <Bookmark />
      </div>
      <div className="item">
        <PaperPlane />
      </div>
      {Object.keys(tags).map(tag => (
        <div className="item" key={tag}>
          <Tag /> {tag}
        </div>
      ))}
    </AsideMenuWrapper>
  );
};

export default AsideMenu;
