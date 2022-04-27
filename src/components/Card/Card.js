import PropTypes from "prop-types";
import Button from "../Button/Button.js";
import Image from "../Image/Image";
import Text, { H2 } from "../Text/Text";
import img from "../../assets/cover.jpeg";

import {
  CardContainerStyled,
  CardDescriptionStyled,
  CardTitleStyled,
} from "./styles";

const Card = (props) => {
  return (
    <CardContainerStyled>
      <Image image={img}></Image>
      <CardTitleStyled>
        <H2>{props.title}</H2>
      </CardTitleStyled>
      <CardDescriptionStyled>
        <Text>{props.description}</Text>
      </CardDescriptionStyled>
      <Button link={props.url} text="Ladda ner avsnitt" />
    </CardContainerStyled>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
};

export default Card;
