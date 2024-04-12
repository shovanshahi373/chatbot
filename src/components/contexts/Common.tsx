import { createContext, ReactNode } from 'react';

import { useResizer } from '@/hooks';

import { ICommonContext as IContext } from './types';

export const CommonContext = createContext({} as IContext);

interface Props {
  children: ReactNode;
}

export const ContextProvider = ({ children }: Props) => {
  const { isLandscape } = useResizer();
  return (
    <CommonContext.Provider value={{ isLandscape }}>
      {children}
    </CommonContext.Provider>
  );
};
