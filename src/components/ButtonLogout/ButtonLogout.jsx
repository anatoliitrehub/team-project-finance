import s from './ButtonLogout.module.scss';
import PropTypes from 'prop-types';
import icons from '../../assets/icons/sprite.svg';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/Auth/authOperations';
import { toogleOpen } from 'redux/BurgerMenu/burgerSlice';

const IconLogout = () => {
  return (
    <svg className={s.diagram}>
      <use href={`${icons}#icon-log-out`}></use>
    </svg>
  );
};

export const ButtonLogout = () => {
  const className = `${s.button} ${s.secondary}`;
  const dispatch = useDispatch();

  const handlerLogout =() =>{
    dispatch(logoutUser());
    dispatch(toogleOpen(false));

  }
  return (
    <button
      type="button"
      onClick={handlerLogout}
      className={className}
    >
      Log out <IconLogout />
    </button>
  );
};

ButtonLogout.propTypes = {
  variant: PropTypes.string,
};
