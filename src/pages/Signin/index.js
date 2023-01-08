import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from "../../components/Input";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as Style from "./styles";

const Signin = ()=> {

  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin= () => {
    if(!email | !password){
      setError("Insert login and pass!");
      return;
    };

    const res = signin(email, password);
    

    if(res){
      setError(res);
      return;
    }
    navigate("/home");
  };

  return (
    <Style.Container>
      <Style.Label>Login</Style.Label>
      <Style.Content>
        <Input type="email"
        placehold="Email"
        value={email}
        onChange={(e)=> [setEmail(e.target.value), setError("")]}
        />
        <Input
        type="password"
        placehold="Password"
        value={password}
        onChange={(e)=> [setPassword(e.target.value), setError("")]}
        />
        <Style.LabelError>{error}</Style.LabelError>
        <Button Text="GO"
        onClick={handleLogin}
        />
        <Style.LabelSignup>
          No Login ?&nbsp;
          <Style.Strong>
            <Link to="/signup">&nbsp;Register</Link>
          </Style.Strong>
        </Style.LabelSignup>
      </Style.Content>
    </Style.Container>
  )
}

export default Signin;