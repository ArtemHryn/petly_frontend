import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Box } from 'components/Box';

import { toast, ToastContainer } from 'react-toastify';
import { register as registerUser } from 'redux/auth/auth-operations';
import { AuthRedirectionLink } from './AuthRedirectionLink';
import {
  Form,
  Input,
  Button,
  ErrorMsg,
  ShowPasswordButton,
} from './RegisterForm.styled';
import { Title } from 'components/Title/Title';
import {
  toastSuccess,
  toastError,
} from 'helpers/toast-notifications/toasts-notifications';

export const RegisterForm = ({ isTheSecondStep, setIsTheSecondStep }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isRegistered, setIsRegistered] = useState(false);
  const [showPassword, setShowPassword] = useState({
    showPassBtn: false,
    showConfirmPassBtn: false,
  });
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    confirmedPassword: '',
    name: '',
    city: '',
    phone: '',
  });

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    formValues,
    mode: 'onBlur',
  });

  const handleChange = event => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });

    if (
      event.target.name === formValues.confirmedPassword &&
      formValues.password === formValues.confirmedPassword
    ) {
      clearErrors('confirmedPassword');
    }
  };

  const handleNextClick = e => {
    if (formValues.password !== formValues.confirmedPassword) {
      setError('confirmedPassword', {
        type: 'custom',
        message: 'Passwords not the same',
      });
      return;
    }
    setIsTheSecondStep(true);
    e.preventDefault();
  };

  const handleBackClick = () => {
    setIsTheSecondStep(false);
  };

  const handleShowPassword = event => {
    setShowPassword({
      ...showPassword,
      [event.currentTarget.name]: !showPassword[event.currentTarget.name],
    });
  };

  const onSubmit = async ({ email, password, name, city, phone }) => {
    const response = await dispatch(
      registerUser({ email, password, name, city, phone })
    );

    if (response.payload === 409) {
      toastError(`😿 User with email ${formValues.email} is already exist!`);
      return;
    }

    if (response.payload.user) {
      toastSuccess(
        '🐶 Registered! Check your email and confirm the registration!'
      );

      toast.onChange(async payload => {
        if (payload.status === 'removed') {
          navigate('/login');
        }
      });
      setIsRegistered(true);
      return;
    }

    return toastError(`😿 Whoops, something get wrong. Try again later`);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {!isRegistered && (
        <>
          <Title
            fontSize={['24px', '36px']}
            fontWeight={['700', '500']}
            lineHeight={['1.38', '1.36']}
            marginBottom="15"
          >
            Registration
          </Title>
          {!isTheSecondStep ? (
            <>
              <Input
                {...register('email', {
                  required: 'Please,enter your email',
                  pattern: {
                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    message: 'Please, enter valid email',
                  },
                })}
                value={formValues.email}
                type="email"
                placeholder="Email"
                onChange={handleChange}
                style={errors.email && { marginBottom: 1, borderColor: 'red' }}
              />
              {errors.email && <ErrorMsg>{errors.email?.message}</ErrorMsg>}
              <Box mb={errors.password ? 1 : 8} position="relative">
                <Input
                  type={showPassword.showPassBtn ? 'text' : 'password'}
                  {...register('password', {
                    required: 'Please, enter your password',
                    minLength: { value: 7, message: 'Min-length is 7' },
                    maxLength: {
                      value: 32,
                      message: 'Max-length is 32',
                    },
                  })}
                  placeholder="Password"
                  value={formValues.password}
                  onChange={handleChange}
                  style={errors.password && { borderColor: 'red' }}
                />
                <ShowPasswordButton
                  type="button"
                  name="showPassBtn"
                  onClick={handleShowPassword}
                >
                  {showPassword.showPassBtn ? (
                    <AiFillEye size="20px" />
                  ) : (
                    <AiFillEyeInvisible size="20px" />
                  )}
                </ShowPasswordButton>
              </Box>
              {errors.password && (
                <ErrorMsg>{errors.password?.message}</ErrorMsg>
              )}
              <Box mb={errors.confirmedPassword ? 1 : 15} position="relative">
                <Input
                  type={showPassword.showConfirmPassBtn ? 'text' : 'password'}
                  {...register('confirmedPassword', {
                    required: 'Please, confirm password',
                  })}
                  placeholder="Confirm password"
                  value={formValues.confirmedPassword}
                  onChange={handleChange}
                  mb
                  style={
                    errors.confirmedPassword && {
                      borderColor: 'red',
                    }
                  }
                />
                <ShowPasswordButton
                  type="button"
                  name="showConfirmPassBtn"
                  onClick={handleShowPassword}
                >
                  {showPassword.showConfirmPassBtn ? (
                    <AiFillEye size="20px" />
                  ) : (
                    <AiFillEyeInvisible size="20px" />
                  )}
                </ShowPasswordButton>
              </Box>
              {errors.confirmedPassword && (
                <ErrorMsg marginBottom={15}>
                  {errors.confirmedPassword?.message}
                </ErrorMsg>
              )}
              <Button
                type="button"
                onClick={handleNextClick}
                disabled={
                  !formValues.email ||
                  !formValues.password ||
                  !formValues.confirmedPassword ||
                  errors.email ||
                  errors.password ||
                  errors.confirmedPassword
                }
              >
                Next
              </Button>
            </>
          ) : (
            <>
              <Input
                type="text"
                {...register('name', {
                  required: isTheSecondStep ? 'Name is required' : false,
                  minLength: { value: 2, message: 'Min-length is 2' },
                  pattern: {
                    value: /^[a-zA-Z]+$/,
                    message: 'Name can include only letters',
                  },
                })}
                placeholder="Name"
                value={formValues.name}
                onChange={handleChange}
                style={errors.name && { marginBottom: 1, borderColor: 'red' }}
              />
              {errors.name && <ErrorMsg>{errors.name?.message}</ErrorMsg>}
              <Input
                type="text"
                {...register('city', {
                  required: isTheSecondStep ? 'City is required!' : false,
                  minLength: { value: 3, message: 'Min-length is 3' },
                  pattern: {
                    value:
                      /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*([,]\s*[a-zA-Z]+(?:[\s-][a-zA-Z]+)*)?$/,
                    message:
                      'Please write a correct value (example: Kyiv, Brovary) ',
                  },
                })}
                placeholder="City,region"
                value={formValues.city}
                onChange={handleChange}
                style={errors.city && { marginBottom: 1, borderColor: 'red' }}
              />
              {errors.city && <ErrorMsg>{errors.city?.message}</ErrorMsg>}
              <Input
                type="text"
                {...register('phone', {
                  required: isTheSecondStep ? 'Phone is required' : false,
                  pattern: {
                    value: /^\+380\d{9}$/,
                    message:
                      'Please enter your phone in the format +380xxxxxxxxx',
                  },
                })}
                placeholder="Mobile phone"
                value={formValues.phone}
                onChange={handleChange}
                style={errors.phone && { marginBottom: 1, borderColor: 'red' }}
              />
              {isTheSecondStep && errors.phone && (
                <ErrorMsg marginBottom={15}>{errors.phone?.message}</ErrorMsg>
              )}
              <Button
                type="submit"
                marginBottom={[6, 8]}
                disabled={
                  Object.keys(errors).length ||
                  !formValues.name ||
                  !formValues.city ||
                  !formValues.phone
                }
              >
                Register
              </Button>
              <Button type="button" onClick={handleBackClick}>
                Back
              </Button>
            </>
          )}

          <AuthRedirectionLink
            path="/login"
            text="Already have account?"
            linkText="Login"
          />
        </>
      )}
      <ToastContainer />
    </Form>
  );
};
