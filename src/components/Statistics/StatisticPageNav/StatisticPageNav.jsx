import { NavLink } from 'react-router-dom';
import s from './StatisticPageNav.module.css';
import clsx from 'clsx';

const StatisticPageNav = () => {
  const getACtiveClass = ({ isActive }) => clsx(s.btn, !isActive && s.NoActive);

  return (
    <div className={s.style}>
      <div>
        <NavLink to="transactions" className={getACtiveClass}>
          Expenses
        </NavLink>
      </div>
      <div>
        <NavLink to="categories" className={getACtiveClass}>
          Categories
        </NavLink>
      </div>
    </div>
  );
};

export default StatisticPageNav;
