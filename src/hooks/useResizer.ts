import { useEffect, useState } from 'react';

export const useResizer = () => {
  const [isLandscape, setIsLandScape] = useState(false);

  const handleResize = () => {
    setIsLandScape(window.innerWidth > window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    isLandscape,
  };
};
