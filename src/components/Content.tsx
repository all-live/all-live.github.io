import React, { FC } from 'react';

const Content: FC = ({ children }) => (
  <div className="content-wrapper">
    <div className="content">
      <div className="content-box">{children}</div>
    </div>
  </div>
);

export default Content;
