import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Player from '../containers/Player';

const serverRoutes = (isLogged) => {
  return [
    {
      exact: true,
      path: '/',
      component: isLogged ?Home : Login,
    },
    {
      exact: true,
      path: '/login',
      component: Login,
    },
    {
      exact: true,
      path: '/register',
      component: isLogged ?Register : Login,
    },
    {
      exact: true,
      path: '/Player/:id',
      component: isLogged ?Player : Login,
    },
    {
      name: 'NotFound',
      component: NotFound,
    },
  ]
}


export default serverRoutes;
