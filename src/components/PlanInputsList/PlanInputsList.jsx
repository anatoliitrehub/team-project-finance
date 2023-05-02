import Input from 'components/Input/Input';
import style from './PlanInputsList.module.scss';

import { Button } from 'components/Button/Button';
import ResultForm from 'components/ResultForm/ResultForm';

import { useDispatch } from 'react-redux';
import {
  selectYear,
  selectMonth,
  selectPersonalPlan,
} from 'redux/PersonalPlan/personalPlanSelectors';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useSelector } from 'react-redux';
import {
  postPersonalPlanPre,
  postPersonalPlan,
  putPersonalPlan,
} from 'redux/PersonalPlan/personalPlanOperations';

import { useEffect } from 'react';

const validation = yup
  .number('It`s must be a number')
  .required('This line is required')
  .positive('It`s must be a positive number')
  .integer('It`s must be a integer');

const initialValues = {
  salary: '',
  passiveIncome: '',
  savings: '',
  cost: '',
  footage: '',
  procent: '',
  month: '',
  year: '',
};

const PlanInputsList = () => {
  const dispatch = useDispatch();

  const plan = useSelector(selectPersonalPlan);
  const year = useSelector(selectYear);
  const month = useSelector(selectMonth);

  const formik = useFormik({
    initialValues,
    validationSchema: yup.object({
      salary: validation,
      passiveIncome: validation,
      savings: validation,
      cost: validation,
      footage: validation,
      procent: validation.max(100),
    }),

    onSubmit: values => {
      const { salary, passiveIncome, savings, cost, footage, procent } = values;
      dispatch(
        postPersonalPlanPre({
          salary: Number(salary),
          passiveIncome: Number(passiveIncome),
          savings: Number(savings),
          cost: Number(cost),
          footage: Number(footage),
          procent: Number(procent),
        })
      );
    },
  });

  const handleClick = () => {
    if (!plan._id) {
      const { salary, passiveIncome, savings, cost, footage, procent } = plan;
      dispatch(
        postPersonalPlan({
          salary,
          passiveIncome,
          savings,
          cost,
          footage,
          procent,
        })
      );
      return;
    } else {
      const { salary, passiveIncome, savings, cost, footage, procent } =
        formik.values;
      dispatch(
        putPersonalPlan({
          salary,
          passiveIncome,
          savings,
          cost,
          footage,
          procent,
        })
      );
    }
  };

  useEffect(() => {
    formik.setValues(plan);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [plan]);

  return (
    <form className={style.form} onSubmit={formik.handleSubmit}>
      <ul className={style.list}>
        <li className={style.item}>
          <Input
            id="salary"
            name="salary"
            value={formik.values.salary}
            placeholder="30 000"
            label="1. RFP of both spouses, &#8372;"
            onChange={formik.handleChange}
          />
          {formik.submitCount > 0 && formik.errors.salary && (
            <p style={{ color: 'red' }}>{formik.errors.salary}</p>
          )}
        </li>
        <li className={style.item}>
          <Input
            id="passiveIncome"
            name="passiveIncome"
            value={formik.values.passiveIncome}
            placeholder="Enter text"
            label="2. Passive income, months, &#8372;"
            onChange={formik.handleChange}
          />
          {formik.submitCount > 0 && formik.errors.passiveIncome && (
            <p style={{ color: 'red' }}>{formik.errors.passiveIncome}</p>
          )}
        </li>
        <li className={style.item}>
          <Input
            id="savings"
            name="savings"
            value={formik.values.savings}
            placeholder="Enter text"
            label="3. Savings, &#8372;"
            onChange={formik.handleChange}
          />
          {formik.submitCount > 0 && formik.errors.savings && (
            <p style={{ color: 'red' }}>{formik.errors.savings}</p>
          )}
        </li>
        <li className={style.item}>
          <Input
            id="cost"
            name="cost"
            value={formik.values.cost}
            placeholder="900 000"
            label="4. Specify the cost of your future apartment, &#8372;"
            onChange={formik.handleChange}
          />
          {formik.submitCount > 0 && formik.errors.cost && (
            <p style={{ color: 'red' }}>{formik.errors.cost}</p>
          )}
        </li>
        <li className={style.item}>
          <Input
            id="footage"
            name="footage"
            value={formik.values.footage}
            placeholder="Enter text"
            label="5. Specify the number of sq.m. of your future apartment"
            onChange={formik.handleChange}
          />
          {formik.submitCount > 0 && formik.errors.footage && (
            <p style={{ color: 'red' }}>{formik.errors.footage}</p>
          )}
        </li>
        <li className={style.item}>
          <Input
            id="procent"
            name="procent"
            value={formik.values.procent}
            placeholder="Enter text"
            label="6. Accumulation, %"
            onChange={formik.handleChange}
          />
          {formik.submitCount > 0 && formik.errors.procent && (
            <p style={{ color: 'red' }}>{formik.errors.procent}</p>
          )}
          <p className={style.description}>
            Specify the percentage that you would like to accumulate per month
            from the total amount of income and you will see when you reach the
            goal
          </p>
        </li>
      </ul>
      {!plan._id && (
        <Button type="submit" className={style.prevPlanButton}>
          Pre Plan
        </Button>
      )}
      <ResultForm
        title="You will have an apartment in:"
        year={year}
        month={month}
        onClick={handleClick}
      />
    </form>
  );
};
export default PlanInputsList;
