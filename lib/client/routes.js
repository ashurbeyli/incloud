import Home from './components/Home/';
import { getHomeData } from './actions/homeActions';

const routes = [
  {
    exact: true,
    path: '/',
    component: Home,
    loadData: () => getHomeData()
  }
];

export default routes;