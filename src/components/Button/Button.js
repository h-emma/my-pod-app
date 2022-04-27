import PropTypes from "prop-types";

import { ButtonStyled, LinkStyled } from "./styles";

const Button = (props) => {
  return (
    <LinkStyled href={props.link}>
      <ButtonStyled>{props.text}</ButtonStyled>
    </LinkStyled>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
};

export default Button;
