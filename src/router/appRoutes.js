import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import Home from "../pages/Home";

import CampaignDetail from "../components/CampaignDetail";
import ForgotPassword from "../pages/ForgotPassword";
import routes from "../constants/route";

const allRoutes = [
  {
    path: routes.LOGIN,
    component: Login,
    exact: true,
    restricted: true,
    isPrivate: false,
  },
  {
    path: routes.REGISTER,
    component: Register,
    exact: true,
    restricted: true,
    isPrivate: false,
  },
  {
    path: routes.FORGOT_PASSWORD,
    component: ForgotPassword,
    exact: true,
    restricted: true,
    isPrivate: false,
  },
  {
    path: routes.HOME,
    component: Home,
    exact: true,
    restricted: true,
    isPrivate: false,
  },
  {
    path: routes.FORGOT_PASSWORD,
    component: ForgotPassword,
    exact: true,
    restricted: true,
    isPrivate: false,
  },
  {
    path: routes.CAMPAIGN_DETAIL,
    component: CampaignDetail,
    exact: true,
    restricted: true,
    isPrivate: false,
  }
];

export default allRoutes;
