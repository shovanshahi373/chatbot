import React from 'react';

import { TopBar } from '@components/ui/module';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="font-sans flex flex-col h-screen w-screen gap-2">
      <div className="drop-shadow shadow px-2 py-1">
        <TopBar />
      </div>
      <div className="flex gap-2 px-2">{children}</div>
    </div>
  );
};

export default MainLayout;
