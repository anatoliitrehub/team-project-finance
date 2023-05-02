import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ExpensesListItem from './ExpensesListItem/ExpensesListItem';
import {
  getStatisticsDate,
  getTransactionsSelector,
} from 'redux/Statistics/StatisticsSelectors';
import { getTransactions } from 'redux/Statistics/StatisticsOperations';
import s from './ExpensesList.module.css';
import { useState } from 'react';
const ExpensesList = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(getTransactionsSelector);
  const date = useSelector(getStatisticsDate);

  const [update, setUpdate] = useState(false);
  useEffect(() => {
    if (transactions.length) return;

    if (date !== null) {
      dispatch(getTransactions(date));
    } else {
      dispatch(getTransactions({ month: 4, year: 2023 }));
    }
    // eslint-disable-next-line
  }, [dispatch]);

  const reversedTransactions = [...transactions].reverse();
  return (
    <div className={s.style}>
      {!transactions.length ? (
        <div className={s.noty}>You have not added any transactions!</div>
      ) : (
        <ul>
          {reversedTransactions.map(({ _id, category, comment, sum, date }) => (
            <ExpensesListItem
              key={_id}
              id={_id}
              category={category}
              comment={comment}
              sum={sum}
              date={date}
              update={update}
              setUpdate={setUpdate}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpensesList;
