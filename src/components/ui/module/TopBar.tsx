import Logo from '@assets/images/logo.png';

import { Button } from '@components/ui/shared';

import { useAuthContext } from '@/hooks';

const TopBar = () => {
  const { auth, logout } = useAuthContext();

  return (
    <div className="flex justify-between items-center h-topbar">
      <div>
        <img src={Logo} />
      </div>
      <div>
        {auth && auth.id ? (
          <Button accent={'primary'} onClick={logout}>
            Logout
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default TopBar;
