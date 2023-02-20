import { LoginForm } from 'components/LoginForm';

import { Container } from 'components/Container/Container';
import { Link } from 'react-router-dom';

export const LoginPage = () => {
  return (
    <Container>
      <LoginForm />
      <Link to='/notices'> GO</Link>
    </Container>
  );
};
