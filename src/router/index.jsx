import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import appRoutes from "./appRoutes";
import PublicRoute from "./PublicRoute";
import Navbar from "../components/Navbar";
const AppRouter = () => {
  const publicRoutes = appRoutes.filter((route) => !route.isPrivate);
  return (
    
    <BrowserRouter>
    
      <Switch>
        {publicRoutes.map((publicRoute) => (
          <PublicRoute
            exact
            path={publicRoute.path}
            component={publicRoute.component}
            restricted={publicRoute.restricted}
            key={publicRoute.path}
          />
        ))}
      </Switch>

    </BrowserRouter>
  );
};

export default AppRouter;
