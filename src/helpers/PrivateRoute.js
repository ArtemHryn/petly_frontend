import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getStatus } from 'redux/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getStatus);
  return !isLoggedIn ? <Navigate replace to={redirectTo} /> : Component;
};
