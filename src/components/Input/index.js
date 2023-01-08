import React from 'react';
import * as Style from "./styles";

const Input = ({type, placehold, value, onChange}) => {
  return (
    <Style.Input
    value={value}
    onChange={onChange}
    type={type}
    placeholder={placehold}
    />
  );
};

export default Input;