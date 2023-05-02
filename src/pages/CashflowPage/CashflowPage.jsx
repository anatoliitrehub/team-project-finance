import s from './CashflowPage.module.scss';
import TransactionDataList from 'components/TransactionDataList/TransactionDataList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCategoryList, getPresevingDate } from 'redux/Cashflow/cashflowOperations';
import { getCurrentBalance } from 'redux/Auth/authSelectors';

const CashflowPage = () => {
  const dispatch = useDispatch();
  const balance = useSelector(getCurrentBalance);

  useEffect(() => {
    dispatch(getPresevingDate());
    // eslint-disable-next-line
  }, [balance]);

  useEffect(()=>{
    // eslint-disable-next-line
    dispatch(getCategoryList());
    // eslint-disable-next-line
  },[])

  return (
    <section className={s.wrapper}>
      <div className="container">
        <TransactionDataList />
      </div>
    </section>
  );
};

export default CashflowPage;
