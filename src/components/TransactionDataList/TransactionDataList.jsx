import Input from 'components/Input/Input';
import style from './TransactionDataList.module.scss';
import { SelectWithLabel } from 'components/SelectWithLabel/SelectWithLabel';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategoriesWithIcons } from 'redux/Cashflow/cashflowSelectors';
import { useState } from 'react';
import { getCurrentBalance } from 'redux/Auth/authSelectors';
import svg from '../../assets/icons/sprite.svg';
import ExpensesLimits from 'components/ExpensesLimits/ExpensesLimits';
import { addTransaction } from 'redux/Cashflow/cashflowOperations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import s from '../Input/Input.module.scss';

const schema = yup.object().shape({
  comment: yup
    .string()
    .min(1, 'Comment should contain at least 1 character')
    .max(80)
    .required('This field is required'),
  sum: yup
    .number()
    .positive('enter only a positive number')
    .required('This field is required'),
  category: yup.string(),
});

const TransactionDataList = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategoriesWithIcons);
  const balance = useSelector(getCurrentBalance);

  const [selectedCategory, setSelectedCategory] = useState({
    name: 'other',
    title: 'Other',
    icon: `${svg}#icon-settings`,
  });
  const initialValues = {
    comment: '',
    sum: '',
    category: '',
  };

  const handleSubmit = (values, { setSubmitting, setFieldError }) => {
    setSubmitting(false);
    dispatch(
      addTransaction({
        ...values,
        category: selectedCategory.name,
        type: 'expense',
      })
    );
  };

  const handleCategoryChange = category => {
    setSelectedCategory(category);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form className={style.wrapper}>
        <div className={style.list}>
          <div className={style.item}>
            <Input
              id="balance"
              name="balance"
              value={balance ? `${balance} $` : '0 $'}
              placeholder="Account balance: UAH 80,000"
              label="From account"
              onChange={() => balance}
            />
          </div>

          <div className={style.item}>
            <SelectWithLabel
              name="category"
              value={selectedCategory}
              options={categories}
              label="Per category"
              onChange={handleCategoryChange}
            />
          </div>

          <div className={style.item}>
            <div className={s.wrapp}>
              <Field
                id="comment"
                className={s.input}
                type="text"
                name="comment"
                placeholder="Enter comment"
              />
              <label htmlFor="comment" className={s.label}>
                Expense comment
              </label>
              <p className={style.error}>
                <ErrorMessage name="comment" />
              </p>
            </div>
          </div>

          <div className={style.item}>
            <div className={s.wrapp}>
              <Field
                id="sum"
                name="sum"
                className={s.input}
                type="text"
                placeholder="0 $"
              />
              <label htmlFor="sum" className={s.label}>
                Sum
              </label>
              <p className={style.error}>
                <ErrorMessage name="sum" />
              </p>
            </div>
          </div>
        </div>

        <ExpensesLimits />
      </Form>
    </Formik>
  );
};
export default TransactionDataList;
