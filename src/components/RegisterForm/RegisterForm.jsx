import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Box } from 'components/Box';
import { ToastContainer } from 'react-toastify';
import { register as registerUser } from 'redux/auth/auth-operations';
import { AuthRedirectionLink } from './AuthRedirectionLink';
import {
  Form,
  Input,
  Button,
  ErrorMsg,
  ShowPasswordButton,
  ResendVerificationButton,
} from './RegisterForm.styled';
import { Title } from 'components/Title/Title';
import {
  toastSuccess,
  toastError,
} from 'helpers/toast-notifications/toasts-notifications';

export const RegisterForm = ({
  isTheSecondStep,
  setIsTheSecondStep,
  setIsResendVereficationActive,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      setFormValues({
        email: '',
        password: '',
        confirmedPassword: '',
        name: '',
        city: '',
        phone: '',
      });
      setIsTheSecondStep(false);

      setTimeout(() => navigate('/login'), 3000);

      return;
    }

    return toastError(`😿 Whoops, something get wrong. Try again later`);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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
            <Box mb={8} position="relative">
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
                borderColor={errors.email && 'red'}
              />
              {errors.email && <ErrorMsg>{errors.email?.message}</ErrorMsg>}
            </Box>
            <Box mb={8} position="relative">
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
                borderColor={errors.password && 'red'}
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
              {errors.password && (
                <ErrorMsg>{errors.password?.message}</ErrorMsg>
              )}
            </Box>

            <Box mb={15} position="relative">
              <Input
                type={showPassword.showConfirmPassBtn ? 'text' : 'password'}
                {...register('confirmedPassword', {
                  required: 'Please, confirm password',
                })}
                placeholder="Confirm password"
                value={formValues.confirmedPassword}
                onChange={handleChange}
                mb
                borderColor={errors.confirmedPassword && 'red'}
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
              {errors.confirmedPassword && (
                <ErrorMsg>{errors.confirmedPassword?.message}</ErrorMsg>
              )}
            </Box>

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
            <Box mb={8} position="relative">
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
                borderColor={errors.name && 'red'}
              />
              {errors.name && <ErrorMsg>{errors.name?.message}</ErrorMsg>}
            </Box>
            <Box mb={8} position="relative">
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
                borderColor={errors.city && 'red'}
              />
              {errors.city && <ErrorMsg>{errors.city?.message}</ErrorMsg>}
            </Box>
            <Box mb={15} position="relative">
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
                borderColor={errors.phone && 'red'}
              />
              {isTheSecondStep && errors.phone && (
                <ErrorMsg>{errors.phone?.message}</ErrorMsg>
              )}
            </Box>
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
        <ResendVerificationButton
          type="button"
          onClick={() => setIsResendVereficationActive(true)}
        >
          Resend email verification
        </ResendVerificationButton>
      </>
      <ToastContainer />
    </Form>
  );
};
