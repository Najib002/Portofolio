import RestList from '../views/pages/restaurant-list';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': RestList,
  '/home': RestList,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
