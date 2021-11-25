import React from 'react';
import Content from '@components/Content';
import DarkMode from '@components/DarkMode';
import Detail from '@components/Detail';
import Tabs from '@components/Tabs';

const DesktopContents = () => (
  <>
    <Content>
      <Tabs />
    </Content>
    <Content>
      <Detail />
    </Content>
    <Content>
      <DarkMode />
    </Content>
  </>
);

export default React.memo(DesktopContents);
