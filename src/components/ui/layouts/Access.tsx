import { ReactNode } from 'react';

import { Background } from '@/constants/images';

import { useCommonContext } from '@/hooks';

const Access = ({ children }: { children: ReactNode }) => {
  const { isLandscape } = useCommonContext();
  return (
    <div
      className={`${isLandscape ? '' : 'h-full'} font-sans flex h-screen w-screen justify-center items-center`}
    >
      <>{children}</>
      {isLandscape && (
        <div className="flex-1">
          <img className="max-h-screen w-full object-cover" src={Background} />
        </div>
      )}
    </div>
  );
};

export default Access;
