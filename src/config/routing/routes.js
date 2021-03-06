import views from '../../views';
import { LOGIN_PATH } from './paths';

const LOGIN = {
  component: views.Login,
  path: LOGIN_PATH,
  isPrivate: false,
  isExact: true,
};

// must be last
const DEFAULT = {
  component: views.Default,
  path: '*',
  isPrivate: false,
  isExact: false
};

export default [LOGIN, DEFAULT];
