import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm, useController } from 'react-hook-form';
import { AuthRedirectionLink } from './AuthRedirectionLink';
import { Form, Input, Button } from './RegisterForm.styled';
import { Title } from 'components/Title/Title';
import { register } from 'redux/auth/auth-operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [isTheSecondStep, setIsTheSecondStep] = useState(false);
  const onSubmit = async data => {
    // const fetch = await dispatch(register)
    console.log(data);
  };
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    name: '',
    city: '',
    phone: '',
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
    formValues,
    mode: 'all',
  });
  const handleNextClick = () => {
    if (Object.keys(errors).length) {
      return;
    }
    const { email, password } = formValues;

    if (!email || !password) {
      return;
    }
    setIsTheSecondStep(true);
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
            {...register('email', { required: true })}
            value={formValues.email}
            type="email"
            placeholder="Email"
            onChange={handleChange}
          />
          {errors.email && <p>Email is required</p>}
          <Input
            type="text"
            {...register('password', { required: true })}
            placeholder="Password"
            value={formValues.password}
            onChange={handleChange}
          />
          <Input type="text" placeholder="Confirm password" />
          <Button type="button" onClick={handleNextClick}>
            Next
          </Button>
        </>
      ) : (
        <>
          <Input
            type="text"
            {...register('name', { required: true })}
            placeholder="Name"
            value={formValues.name}
            onChange={handleChange}
          />
          <Input
            type="text"
            {...register('city', { required: true })}
            placeholder="City,region"
            value={formValues.city}
            onChange={handleChange}
          />
          <Input
            type="text"
            {...register('phone', { required: true })}
            placeholder="Mobile phone"
            value={formValues.phone}
            onChange={handleChange}
          />
          <Button type="submit" style={{ marginBottom: 20 }}>
            Register
          </Button>
          <Button type="button" onClick={() => setIsTheSecondStep(false)}>
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
