import { Text, Link } from './AuthLink.styled';

export const AuthLink = ({ path, text, linkText }) => {
  return (
    <Text>
      {text} <Link to={path}>{linkText}</Link>
    </Text>
  );
};
