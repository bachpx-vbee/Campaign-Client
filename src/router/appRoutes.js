import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import MyCampaign from "../pages/MyCampaign"
import routes from "../constants/route";
import CampaignDetail from "../components/CampaignDetail";

const allRoutes = [
  // {
  //   path: routes.LOGIN,
  //   component: Login,
  //   exact: true,
  //   restricted: true,
  //   isPrivate: false,
  // },
  {
    path: routes.REGISTER,
    component: Register,
    component: Home,
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
  // {
  //   path: routes.REGISTER,
  //   component: Register,
  //   exact: true,
  //   restricted: true,
  //   isPrivate: false,
  // },
  {
    path: routes.MYCAMPAIGN,
    component: MyCampaign,
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
  // {
  //   path: routes.FORGOTPASSWORD,
  //   component: ForgotPassword,
  //   exact: true,
  //   restricted: true,
  //   isPrivate: false,
  // },

];

export default allRoutes;
