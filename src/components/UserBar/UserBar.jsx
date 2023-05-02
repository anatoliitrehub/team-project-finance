import st from './UserBar.module.scss';
import { NavLink } from 'react-router-dom';

import icons from 'assets/icons/sprite.svg';
import { ButtonLogout } from 'components/ButtonLogout/ButtonLogout';
// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getName } from 'redux/Auth/authSelectors';
import { toogleOpen } from 'redux/BurgerMenu/burgerSlice';

const IconDiagram = () => {
  return (
    <svg className={st.diagram}>
      <use href={`${icons}#icon-rectangle`}></use>
    </svg>
  );
};

const UserBar = () => {
  // const [burg, setBurg] = useState(true);
  const user = useSelector(getName);
  const burg = useSelector(state => state.burger);
  const dispatch = useDispatch();

  const handlerOpen = () => {
    // setBurg(false);
    dispatch(toogleOpen(true));
    // console.log('open');
  };

  const handlerClose = () => {
    // setBurg(true);
    dispatch(toogleOpen(false));
    // console.log('close');
  };

  return (
    <>
      <ul className={st.list}>
        <li className={st.item}>
          <NavLink to="/statistics/transactions">
            <IconDiagram />
          </NavLink>
        </li>
        <li className={st.item}>
          <span className={st.avatar}>{user ? user.slice(0, 1) : 'N'}</span>
        </li>
        <li className={st.itemBurger}>
          {!burg && (
            <svg className={st.diagram} onClick={handlerOpen}>
              <use href={`${icons}#icon-burger-menu`}></use>
            </svg>
          )}
          {burg && (
            <svg className={st.diagram} onClick={handlerClose}>
              <use href={`${icons}#icon-burger-close`}></use>
            </svg>
          )}
        </li>
        <li className={st.itemButton}>
          <ButtonLogout />
        </li>
      </ul>
      {/* <ModalBurger show={show}  /> */}
    </>
  );
};

export default UserBar;
