import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { resendVerificationLink } from 'redux/auth/auth-operations';
import { ToastContainer } from 'react-toastify';
import {
  Form,
  ErrorMsg,
  Button,
  Input,
} from 'components/RegisterForm/RegisterForm.styled';
import { Box } from 'components/Box';
import { Title } from 'components/Title/Title';
import { useState } from 'react';
import {
  toastSuccess,
  toastError,
} from 'helpers/toast-notifications/toasts-notifications';

export const ResendEmailForm = ({ setIsResendVereficationActive }) => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email,
    },
    mode: 'onBlur',
  });

  const onSubmit = async value => {
    const res = await dispatch(resendVerificationLink(value));

    if (res.payload === 400) {
      return toastError(
        'User not found or verification has already been passed'
      );
    }
    toastSuccess(`The new verification link was send to ${value.email}`);
    setEmail('');
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} justifyContent="space-between">
      <Box mb={8} position="relative">
        <Title
          fontSize={['24px', '36px']}
          fontWeight={['700', '500']}
          lineHeight={['1.38', '1.36']}
          marginBottom="15"
        >
          Resend email verification
        </Title>
        <Input
          {...register('email', {
            required: 'Please,enter your email',
            pattern: {
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: 'Please, enter valid email',
            },
          })}
          value={email}
          type="email"
          placeholder="Email"
          onChange={e => {
            setEmail(e.target.value);
          }}
          borderColor={errors.email && 'red'}
        />
        {errors.email && <ErrorMsg>{errors.email?.message}</ErrorMsg>}
      </Box>
      <Box display="flex" flexDirection="column">
        <Button
          type="submit"
          marginBottom={[6, 8]}
          disabled={errors.email || !email}
        >
          Send
        </Button>
        <Button
          type="button"
          marginBottom="0px"
          onClick={() => {
            setIsResendVereficationActive(false);
          }}
        >
          Back
        </Button>
      </Box>
      <ToastContainer />
    </Form>
  );
};
