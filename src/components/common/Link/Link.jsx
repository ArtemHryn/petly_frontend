import { FilledLink, OutlineLink } from "./Link.styled";

export const Link = (props) => {
    return (
      <>
        {props.variant === 'filled' && <FilledLink {...props} />}
        {props.variant === 'outline' && <OutlineLink {...props} />}
      </>
    );
}