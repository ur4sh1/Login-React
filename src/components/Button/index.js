import React from 'react';
import * as Style from "./styles";

const Button = ({Text, onClick, Type= "button"}) => {
  return (
    <Style.Button
    type={Type}
    onClick={onClick}
    >{Text}</Style.Button>
  )
};

export default Button;