import PropTypes from "prop-types";

import { ImageStyled } from "./styles";

const Image = (props) => {
  return (
    <ImageStyled
      src={props.image}
      alt="Färgglad bakgrund, Cleopatra i profil"
    ></ImageStyled>
  );
};

Image.propTypes = {
  image: PropTypes.string,
};

export default Image;
