import icons from '../../assets/icons/sprite.svg';
import st from './Logo.module.scss';

const LogoIcon = () => {
  return (
    <svg className={st.image}>
      <use href={`${icons}#icon-logo`}></use>
    </svg>
  );
};

const Logo = () => {
  return (
    <div className={st.wrapper}>
      <LogoIcon />
      <p className={st.title}>Finance</p>
    </div>
  );
};

export default Logo;
