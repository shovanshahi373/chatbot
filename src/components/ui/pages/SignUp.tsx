import { AccessLayout } from '@components/ui/layouts';
import { SignUp } from '@components/ui/module';
import { Loader } from '@components/ui/shared';

import { useAuthRedirect } from '@/hooks';

const REDIRECT = '/conversations';

const LoginPage = () => {
  const { loading } = useAuthRedirect(REDIRECT);

  if (loading) return <Loader size="large" />;

  return (
    <AccessLayout>
      <SignUp />
    </AccessLayout>
  );
};

export default LoginPage;
