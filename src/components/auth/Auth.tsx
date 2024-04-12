import { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '@/hooks';

import { Loader } from '@components/ui/shared';

import { http } from "@/constants"

const redirectPage = '/login';
const WAIT_TIME = 3;

interface Props {
  children: ReactNode;
}

const Index = ({ children }: Props) => {
  const [isCoolingDown,setIsCoolingDown] = useState(false);
  const [countDown, setCountDown] = useState(0);
  const { checkAuthentication, auth, token } = useAuthContext();
  const navigate = useNavigate();

  const goHome = () => {
    navigate(redirectPage, { replace: true });
  };

  useEffect(() => {
    let coolId = 0;
    (async () => {
      const message = await checkAuthentication();
      if(message === http.restrictions.RATE_LIMIT_EXCEED) {
        setIsCoolingDown(true);
        coolId = setTimeout(() => {
          setIsCoolingDown(false);
        }, WAIT_TIME * 1000);
      }
    })()
    return () => {
      clearTimeout(coolId);
    }
  }, []);

  useEffect(() => {
    let cancelId = 0;

    const check = async () => {
      if (auth === null) {
        setCountDown(WAIT_TIME);
        redirectUser();
      }
    };

    const redirectUser = () => {
      cancelId = setTimeout(() => {
        goHome();
      },0);
    };

    check();

    return () => {
      clearTimeout(cancelId);
    };
  }, [auth]);

  if (!token || auth == null || isCoolingDown)
    return (
      <div className="flex flex-col justify-center items-center">
        <Loader size="small" />
        <p className="text-2xl font-bold">{`pleae wait ${countDown ? `${countDown} seconds` : ''}...`}</p>
      </div>
    );
  return <>{children}</>;
};

export default Index;
