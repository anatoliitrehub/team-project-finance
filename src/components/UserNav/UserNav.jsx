import st from './UserNav.module.scss';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
// import { NavLink} from 'react-router-dom';
import {selectPersonalPlan} from 'redux/PersonalPlan/personalPlanSelectors';
import { useSelector } from 'react-redux';
import { Notify } from 'notiflix';


const UserNav = () => {
  // const [planStatus,setPlanStatus] = useState(false)
  const plan = useSelector(selectPersonalPlan);
  const location = useLocation();
  const navigate = useNavigate()

  // const handlerPlan = () => {
    
    // const alertPlan = ()=>{
    //   Notify.info('Create please your plan');
    //       }
    
    if(location.pathname!=="/plan"&&!plan._id){
      // setTimeout(alertPlan,5000)
            Notify.info('Please, check or create your plan');

      navigate("/plan")
    }  

  return (
    <ul className={st.list}>
      <li className={st.item}>
        <NavLink
          to="/plan"
          style={({ isActive }) => ({
            color: isActive ? '#3A6AF5' : '#f3f3f3',
          })}
        >
          Personal plan
        </NavLink>
      </li>
      <li className={st.item}>
        <NavLink
          to="/cash-flow"
          style={({ isActive }) => ({
            color: isActive ? '#3A6AF5' : '#f3f3f3',
          })}
        >
          Cashflow
        </NavLink>
      </li>
      <li className={st.item}>
        <NavLink
          to="/dynamics"
          style={({ isActive }) => ({
            color: isActive ? '#3A6AF5' : '#f3f3f3',
          })}
        >
          Dynamics
        </NavLink>
      </li>
    </ul>
  );
};

export default UserNav;
