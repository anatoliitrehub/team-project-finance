import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getAuthStatus } from 'redux/Auth/authSelectors';

export const PublicRoute = ({ component, redirectTo = '/plan' }) => {
  const isAuth = useSelector(getAuthStatus);

  return !isAuth ? component : <Navigate to={redirectTo} />;
};