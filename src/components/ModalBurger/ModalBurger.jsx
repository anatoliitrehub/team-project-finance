import st from './ModalBurger.module.scss';
import UserNav from 'components/UserNav/UserNav';
import { ButtonLogout } from 'components/ButtonLogout/ButtonLogout';
import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toogleOpen } from 'redux/BurgerMenu/burgerSlice';
// import { HistoryRouterProps } from 'react-router-dom';

const ModalBurger = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [loc, setLoc] = useState('');
  loc && loc !== location.pathname && setTimeout(()=>dispatch(toogleOpen(false)),500);

  useEffect(() => {
    setLoc(() => location.pathname);
  }, [location]);

  return (
    <>
      <div className="container">
        <div className={st.burger}>
          <UserNav />
          <div className={st.logoutWrap}>
            <div className={st.logout}>
              <ButtonLogout />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalBurger;
