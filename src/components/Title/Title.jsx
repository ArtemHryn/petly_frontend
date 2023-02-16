import { TitleEl } from './Title.styled';

export const Title = ({ children, ...props }) => {
  return <TitleEl {...props}>{children}</TitleEl>;
};
