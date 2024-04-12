import { AccessLayout } from '@components/ui/layouts';
import { Login } from '@components/ui/module';

import { useAuthRedirect } from '@/hooks';

import { Loader } from '@components/ui/shared';

const REDIRECT = '/conversations';

const LoginPage = () => {
  const { loading } = useAuthRedirect(REDIRECT);

  if (loading) return <Loader size="large" />;

  return (
    <AccessLayout>
      <Login />
    </AccessLayout>
  );
};

export default LoginPage;
