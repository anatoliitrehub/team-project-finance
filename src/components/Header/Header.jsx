import st from './Header.module.scss';
import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import UserBar from 'components/UserBar/UserBar';
// import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getAuthStatus } from 'redux/Auth/authSelectors';

const Header = () => {
  // const [isAuth,setIsAuth] = useState(true);
  const isAuth = useSelector(getAuthStatus);
  // setIsAuth(false);
  return (
    <header className={st.header}>
      <div className="container">
        <div className={st.wrapper}>
          {/* <button style={isAuth?{backgroundColor: "green"}:{backgroundColor: "#ffffff"}} onClick={()=>setIsAuth(!isAuth)}>AUTH</button> */}
          {isAuth && (
            <>
              <Navigation  />
              <Logo />
              <UserBar />
            </>
          )}
          {!isAuth && (
            <>
              <Logo />
              <Navigation  />
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
