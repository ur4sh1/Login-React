import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as Style from "./styles";

const Home = ()=> {

  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <Style.Container>
      <Style.Title>Home</Style.Title>
      <Button Text="Logoff" onClick={()=>[signout(), navigate("/")]} >Logoff</Button>
    </Style.Container>
  );
};

export default Home;