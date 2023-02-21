import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelector';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return !isLoggedIn ? <Navigate replace to={redirectTo} /> : Component;
};
