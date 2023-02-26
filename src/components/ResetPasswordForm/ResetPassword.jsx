import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthLink } from '../LoginForm/AuthLink';
import { resetPassword } from 'redux/auth/auth-operations';
import { Error, Form, Input, ResetBtn } from './ResetPassword.style';
import { Title } from 'components/Title/Title';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  toastError,
  toastSuccess,
} from 'helpers/toast-notifications/toasts-notifications';
import { useNavigate, useParams } from 'react-router-dom';

export const ResetPasswordForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useParams();

  const onSubmit = async ({ password }) => {
    console.log(token);
    const response = await dispatch(resetPassword({ password, token }));
    if (formValues.password !== formValues.confirmedPassword) {
      toastError('Passwords not the same');

      return;
    }
    if (response.payload === 'Request failed with status code 401') {
      toastError('email or password is wrong');
      return;
    }
    toastSuccess('Password changed, go back to login');
    navigate('/login');
    return;
  };

  const [formValues, setFormValues] = useState({
    password: '',
    confirmedPassword: '',
  });
  const handleChange = event => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formValues,
    mode: 'all',
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <Title
        fontSize={['24px', '36px']}
        fontWeight={['700', '500']}
        lineHeight={['1.38', '1.36']}
        marginBottom="15"
      >
        Reset Password
      </Title>
      <Input
        type="password"
        value={formValues.password}
        {...register('password', {
          required: 'Please, enter your password',
          minLength: { value: 7, message: 'Min-length is 7' },
          maxLength: {
            value: 32,
            message: 'Max-length is 32',
          },
        })}
        placeholder="Password"
        onChange={handleChange}
        style={errors.password && { marginBottom: 1, borderColor: 'red' }}
      />
      {errors.password && <Error>{errors.password?.message}</Error>}
      <Input
        type="password"
        {...register('confirmedPassword', {
          required: 'Please, confirm password',
        })}
        placeholder="Confirm password"
        onChange={handleChange}
        value={formValues.confirmedPassword}
        style={
          errors.confirmedPassword && {
            marginBottom: 1,
            borderColor: 'red',
          }
        }
      />
      {errors.confirmedPassword && (
        <Error marginBottom={15}>{errors.confirmedPassword?.message}</Error>
      )}

      <ResetBtn type="submit">Send</ResetBtn>

      <AuthLink path="/login" text="Back to" linkText="Login" />

      <ToastContainer />
    </Form>
  );
};
