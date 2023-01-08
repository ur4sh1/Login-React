import React, { useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from "../../components/Input";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as Style from "./styles";

const Signup = ()=> {

  const [email,setEmail] = useState("");
  const [emailConf,setEmailConf] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");

  const navigate = useNavigate();
  const { signup } = useAuth();

  const handleSignup= ()=> {
    if(!email | !emailConf | !password){
      setError("Empty fields!");
      return;
    }else if(email !== emailConf){
      setError("Emails are not the same!");
      return;
    };

    const res = signup(email, password);

    if(res){
      setError(res);
      return;
    }

    alert("Login register sucess!");
    navigate("/");

  };

  return (
    <Style.Container>
      <Style.Label>Register new Login</Style.Label>
      <Style.Content>
        <Input
        type="email"
        placehold="Insert E-mail"
        value={email}
        onChange={(e)=> [setEmail(e.target.value), setError("")]}
        />
        <Input
        type="email"
        placehold="Confirm E-mail"
        value={emailConf}
        onChange={(e)=> [setEmailConf(e.target.value), setError("")]}
        />
        <Input
        type="password"
        placehold="Insert Pass"
        value={password}
        onChange={(e)=> [setPassword(e.target.value), setError("")]}
        />
        <Style.LabelError>{error}</Style.LabelError>
        <Button Text="Register Login" onClick={handleSignup}/>
        <Style.LabelSignin>
          Have
          <Style.Strong>
            <Link to="/"> Login </Link>
          </Style.Strong>
          ?
        </Style.LabelSignin>
      </Style.Content>
    </Style.Container>
  );
};

export default Signup;