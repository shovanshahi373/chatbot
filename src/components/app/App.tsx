import { Route, HashRouter, Routes } from 'react-router-dom';
import { BrowserRoutes } from '@/router';
import { AuthComponent } from '@components/auth';
import { GlobalProvider } from '@components/provider';

import { FallBack } from '@components/ui/errors';

import './App.css';

const App = () => {
  return (
    <HashRouter>
      <GlobalProvider>
        <Routes>
          {BrowserRoutes.map(route => {
            return (
              <Route
                path={route.route}
                element={
                  route.auth ? (
                    <AuthComponent>
                      <route.Component />
                    </AuthComponent>
                  ) : (
                    <route.Component />
                  )
                }
                key={route.route}
                errorElement={<FallBack error="Something went wrong" />}
              />
            );
          })}
        </Routes>
      </GlobalProvider>
    </HashRouter>
  );
};

export default App;
