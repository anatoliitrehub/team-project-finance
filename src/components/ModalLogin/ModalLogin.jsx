import BackdropModal from 'components/BackdropModal/BackdropModal';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from 'redux/Auth/authOperations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import s from './ModalLogin.module.scss';
import { useState } from 'react';
import icons from '../../assets/icons/sprite.svg';

const schema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .max(12, 'end')
    .required('Password is required'),
});

function ModalLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, { setSubmitting, setFieldError }) => {
    setSubmitting(false);
    dispatch(loginUser(values));
  };

  return (
    <BackdropModal closeModal={() => navigate('/')}>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={s.form}>
            <b className={s.title}>Log In</b>

            <div className={s.wrap}>
              <label htmlFor="email" className={s.label}>
                Email
                <Field
                  type="email"
                  name="email"
                  className={s.input}
                  placeholder="Enter your email"
                />
                <p className={s.error}>
                  <ErrorMessage name="email" />
                </p>
              </label>
              <label htmlFor="password" className={s.label}>
                Password
                <Field
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Enter your password"
                  className={s.input}
                />
                <p className={s.error}>
                  <ErrorMessage name="password" />
                </p>
                <svg className={s.eye} onClick={toggleShowPassword}>
                  <use
                    href={
                      showPassword
                        ? `${icons}#icon-eye`
                        : `${icons}#icon-antiEye`
                    }
                  ></use>
                </svg>
              </label>
            </div>
            <button type="submit" disabled={isSubmitting} className={s.btn}>
              Log In
            </button>
          </Form>
        )}
      </Formik>
    </BackdropModal>
  );
}

export default ModalLogin;
