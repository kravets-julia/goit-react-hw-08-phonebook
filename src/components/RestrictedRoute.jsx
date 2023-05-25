import { Navigate } from 'react-router-dom';
import { useAuth } from 'redux/authSelectors';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
