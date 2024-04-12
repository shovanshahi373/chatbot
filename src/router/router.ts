import { DashboardPage, LoginPage, SignUpPage } from '@/components/ui/pages';

import { NotFound } from '@components/ui/errors';

import { paths } from '@/constants';

interface RouteObject {
  route: string;
  auth?: boolean;
  Component: () => React.ReactNode;
}

const router: RouteObject[] = [
  {
    route: paths.HOME,
    auth: true,
    Component: DashboardPage,
  },
  {
    route: paths.LOGIN,
    Component: LoginPage,
  },
  {
    route: paths.SIGNUP,
    Component: SignUpPage,
  },
  {
    route: paths.CONVERSATION,
    auth: true,
    Component: DashboardPage,
  },
  {
    route: paths.CONVERSATIONS,
    auth: true,
    Component: DashboardPage,
  },
  {
    route: paths.OTHER,
    Component: NotFound,
  },
];

export default router;
