import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { register as registerUser } from 'redux/auth/auth-operations';
import { AuthRedirectionLink } from './AuthRedirectionLink';
import { Form, Input, Button, ErrorMsg } from './RegisterForm.styled';
import { Title } from 'components/Title/Title';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [isTheSecondStep, setIsTheSecondStep] = useState(false);
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
  };

  const handleNextClick = () => {
    if (formValues.password !== formValues.confirmedPassword) {
      setError('confirmedPassword', {
        type: 'custom',
        message: 'Passwords not the same',
      });
      return;
    }
    const { email, password, confirmedPassword } = errors;
    if (email || password || confirmedPassword) {
      return;
    }
    setIsTheSecondStep(true);

    console.log(errors);
  };

  const handleBackClick = () => {
    setIsTheSecondStep(false);
  };

  const onSubmit = async ({ email, password, name, city, phone }) => {
    if (Object.keys(errors).length) {
      return;
    }
    await dispatch(registerUser({ email, password, name, city, phone }));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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
            autoFocus
            style={errors.email && { marginBottom: 1, borderColor: 'red' }}
          />
          {errors.email && <ErrorMsg>{errors.email?.message}</ErrorMsg>}
          <Input
            type="text"
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
            style={errors.password && { marginBottom: 1, borderColor: 'red' }}
          />
          {errors.password && <ErrorMsg>{errors.password?.message}</ErrorMsg>}
          <Input
            type="text"
            {...register('confirmedPassword', {
              required: 'Please, confirm password',
            })}
            placeholder="Confirm password"
            value={formValues.confirmedPassword}
            onChange={handleChange}
            style={
              errors.confirmedPassword && {
                marginBottom: 1,
                borderColor: 'red',
              }
            }
          />
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
              required: 'Name is required',
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
          {isTheSecondStep && errors.name && (
            <ErrorMsg>{errors.name?.message}</ErrorMsg>
          )}
          <Input
            type="text"
            {...register('city', {
              required: 'Please, enter your city',
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
              required: 'Please, enter your phone',
              pattern: {
                value: /^\+380\d{9}$/,
                message: 'Please enter your phone in the format +380xxxxxxxxx',
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
            style={{ marginBottom: 20 }}
            disabled={Object.keys(errors).length}
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
    </Form>
  );
};
