import { Text, Link } from './AuthRedirectionLink.styled';

export const AuthRedirectionLink = ({ path, text, linkText }) => {
  return (
    <Text>
      {text} <Link to={path}>{linkText}</Link>
    </Text>
  );
};
