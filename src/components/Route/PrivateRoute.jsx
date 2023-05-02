import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getAuthStatus } from 'redux/Auth/authSelectors';

export const PrivateRoute = ({ component, redirectTo = '/' }) => {
  const isAuth = useSelector(getAuthStatus);

  return isAuth ? component : <Navigate to={redirectTo} />;
};