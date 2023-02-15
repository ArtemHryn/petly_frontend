import { FilledBtn, OutlineBtn, OutlineSm } from './Button.styled';

export const Button = props => {
  return (
    <>
      {props.variant === 'filled' && <FilledBtn {...props} />}
      {props.variant === 'outline' && <OutlineBtn {...props} />}
      {props.variant === 'outline-sm' && <OutlineSm {...props} />}
    </>
  );
};
