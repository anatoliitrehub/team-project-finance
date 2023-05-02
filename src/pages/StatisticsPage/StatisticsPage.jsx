import Statistics from 'components/Statistics/Statistics';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getCategoryList } from 'redux/Cashflow/cashflowOperations';

const StatisticsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // eslint-disable-next-line
    dispatch(getCategoryList());
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Statistics />
      <Outlet />
    </>
  );
};

export default StatisticsPage;
