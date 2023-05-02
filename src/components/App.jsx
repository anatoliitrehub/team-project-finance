import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import HomePage from 'pages/HomePage/HomePage';
import SharedLayout from './SharedLayout/SharedLayout';
import ModalLogin from './ModalLogin/ModalLogin';
import ModalRegister from './ModalRegister/ModalRegister';
import ExpensesList from './Statistics/ExpensesList/ExpensesList';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from 'redux/Auth/authOperations';
import { PublicRoute } from './Route/PublicRoute';
import { PrivateRoute } from './Route/PrivateRoute';

const CashflowPage = lazy(() => import('../pages/CashflowPage/CashflowPage'));
const OwnPlanPage = lazy(() => import('../pages/OwnPlanPage/OwnPlanPage'));
const DynamicsPage = lazy(() => import('../pages/DynamicsPage/DynamicsPage'));
const StatisticsPage = lazy(() =>
  import('../pages/StatisticsPage/StatisticsPage')
);
const CategoriesList = lazy(() =>
  import('./Statistics/CategoriesList/CategoriesList')
);
const GhostBox = lazy(() => import('../pages/NotFound/GhostBox'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        {/* <Route index element={<PublicRoute component={<HomePage />}/>} />
        <Route path="login" element={<PublicRoute component={<ModalLogin />}/>} />
        <Route path="register" element={<PublicRoute component={<ModalRegister />}/>} /> */}

        <Route path="/" element={<PublicRoute component={<HomePage />} />}>
          <Route path="login" element={<ModalLogin />} />
          <Route path="register" element={<ModalRegister />} />
        </Route>
        <Route
          path="plan"
          element={<PrivateRoute component={<OwnPlanPage />} />}
        />
        <Route
          path="cash-flow"
          element={<PrivateRoute component={<CashflowPage />} />}
        />
        <Route
          path="dynamics"
          element={<PrivateRoute component={<DynamicsPage />} />}
        />
        <Route
          path="statistics"
          element={<PrivateRoute component={<StatisticsPage />} />}
        >
          <Route path="transactions" element={<ExpensesList />} />
          <Route path="categories" element={<CategoriesList />} />
        </Route>
        <Route path="error" element={<GhostBox />} />
        <Route path="*" element={<Navigate to="/error" />} />
      </Route>
    </Routes>
  );
};
