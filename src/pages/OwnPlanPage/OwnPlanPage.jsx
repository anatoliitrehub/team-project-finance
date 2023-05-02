import style from './OwnPlanPage.module.scss';
import PlanInputsList from 'components/PlanInputsList/PlanInputsList';

import { useDispatch } from 'react-redux';

import { getPersonalPlan } from 'redux/PersonalPlan/personalPlanOperations';

import { useEffect } from 'react';

const OwnPlanPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
   setTimeout(() => {
     dispatch(getPersonalPlan());
   }, 0);
  }, [dispatch]);

  return (
    <div className={style.wrapper}>
      <div className="container">
        <PlanInputsList />
      </div>
    </div>
  );
};

export default OwnPlanPage;
