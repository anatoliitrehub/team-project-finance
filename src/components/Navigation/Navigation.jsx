import AuthNav from "components/AuthNav/AuthNav";
import UserNav from "components/UserNav/UserNav";
import st from './Navigation.module.scss';

import { useSelector } from "react-redux";
import { getAuthStatus } from "redux/Auth/authSelectors";

const Navigation = () =>{
    const isAuth = useSelector(getAuthStatus)
    
    return(
        <>
        {!isAuth&&<AuthNav />}
        {isAuth&&<div className={st.burgerHidden}>
        <UserNav />
        </div>}
        </>
    )
}

export default Navigation;