import s from './MonthPeriod.module.scss';
import icons from '../../../assets/icons/sprite.svg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { forwardRef, useState } from 'react';
import { getYear } from 'date-fns';
import { useDispatch } from 'react-redux';
import {
  addDate,
  getCategories,
  getTransactions,
} from 'redux/Statistics/StatisticsOperations';

const MonthPeriod = () => {
  const [date, setDate] = useState(new Date());
  const dispatch = useDispatch();

  // console.log('startDate', date);

  const handleDateChange = date => {
    setDate(date);

    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    dispatch(addDate({ month, year }));

    dispatch(getTransactions({ month, year }));
    dispatch(getCategories({ month, year }));

    // dispatch(addDate({ month, year }));
  };

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className={s.style} onClick={onClick} ref={ref}>
      {value}
      <svg className={s.icon}>
        <use href={`${icons}#icon-calendar`}></use>
      </svg>
    </button>
  ));

  return (
    <>
      <div>
        <DatePicker
          customInput={<ExampleCustomInput />}
          selected={date}
          onChange={date => handleDateChange(date)}
          dateFormat="MMMM, yyyy"
          showMonthYearPicker
          id="12"
          monthsShown="1"
          calendarClassName={s.calendar}
          popperClassName={s.d}
          wrapperClassName={s.v}
          showPopperArrow={false}
          renderCustomHeader={({
            date,
            decreaseYear,
            increaseYear,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div className={s.calendarHeader}>
              <button
                style={{ border: 'none', marginLeft: '26.6px' }}
                onClick={decreaseYear}
                disabled={prevMonthButtonDisabled}
              >
                {'<'}
              </button>
              {getYear(date)}
              <button
                onClick={increaseYear}
                disabled={nextMonthButtonDisabled}
                style={{ border: 'none', marginRight: '26.6px' }}
              >
                {'>'}
              </button>
            </div>
          )}
        />
      </div>
    </>
  );
};

export default MonthPeriod;
