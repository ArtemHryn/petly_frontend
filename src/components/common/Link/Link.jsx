import { FilledLink, OutlineLink } from './Link.styled';

export const Link = ({ variant, ...props }) => {
  return (
    <>
      {variant === 'filled' && <FilledLink {...props} />}
      {variant === 'outline' && <OutlineLink {...props} />}
    </>
  );
};
