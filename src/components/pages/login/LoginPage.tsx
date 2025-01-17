import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

export default function LoginPage() {
  const { register, handleSubmit, formState : {errors} } = useForm({resolver: yupResolver(yupSchema)});
  const [isLogin, setIsLogin] = useState(false);
  return (
    <FormStyled>
      <h1>{isLogin ? "Connexion" : "Inscription"}</h1>

      {!isLogin && <input placeholder="nom" />}
      <input placeholder="email" />
      <input placeholder="mot de passe" />

      <button type="submit">{isLogin ? "Se connecter" : "S'inscrire"}</button>

      <span onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Pas encore de compte ? S'inscrire" : "Déjà un compte ? Se connecter"}
      </span>
    </FormStyled>
  );
}

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 20px;
  background-color: #F9F9F9;

  button{
    padding: 12px;
    border-radius: 20px;
    width: 300px;
    background-color: #1E90FF;
    color: white;
  }

  input{
    padding: 12px;
    border-radius: 20px; 
    width: 300px;
  }
  span{
    color: #1E90FF;
    cursor: pointer;
    &:hover{
      text-decoration: underline;
      color: #0069d2;
    }
  }
`
