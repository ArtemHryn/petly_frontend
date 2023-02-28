import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthLink } from '../LoginForm/AuthLink';
import { reset } from 'redux/auth/auth-operations';
import { Error, Form, Input, ResetBtn } from './RecoveryForm.styled';
import { Title } from 'components/Title/Title';
import { Box } from 'components/Box';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  toastError,
  toastSuccess,
} from 'helpers/toast-notifications/toasts-notifications';
import { useNavigate } from 'react-router-dom';

export const RecoveryForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async ({ email }) => {
    const response = await dispatch(reset({ email }));
    if (response.payload === 'Request failed with status code 401') {
      toastError(`There is no user with this email`);
      return;
    }
    toastSuccess('Check your email');
    setTimeout(() => navigate('/login'), 3000);
    return;
  };
  const [formValues] = useState({
    email: '',
  });

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
      <Box mb={12} position="relative">
        <Input
          type="text"
          placeholder="Email"
          {...register('email', {
            required: 'Please,enter your email',
            pattern: {
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: 'Please, enter valid email',
            },
          })}
        />
        {errors.email?.message && <Error>{errors.email.message}</Error>}
      </Box>
      <ResetBtn type="submit">Reset</ResetBtn>

      <AuthLink path="/login" text="Back to" linkText="Login" />

      <ToastContainer />
    </Form>
  );
};
