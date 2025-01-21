import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { yupSchema } from "./yupSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";

type FormValues = {
  username: string;
  email: string;
  password: string;
};
export default function LoginPage() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(yupSchema) });
  const [isLogin, setIsLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = async (data: FormValues) => {
    const url = isLogin
    ? "http://localhost:8080/api/user/login"
    : "http://localhost:8080/api/user";

  try {
    const response = await axios.post(url, data);

    if (!isLogin) {
      alert("Inscription réussie !");
    }
    navigate("/oezihfozfe");
  } catch (error: any) {
    if (error.response) {
      setErrorMessage(error.response.data.message || "Une erreur est survenue");
    } else {
      setErrorMessage("Erreur de connexion au serveur");
    }
  }
};

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <h1>{isLogin ? "Connexion" : "Inscription"}</h1>

      {!isLogin && (
        <>
          <input placeholder="nom" {...register("username")} type="username" />{" "}
          {errors.username && <p>{errors.username.message}</p>}{" "}
        </>
      )}

      <input placeholder="email" {...register("email")} type="email" />
      {errors.email && <p>{errors.email.message}</p>}
      <input
        placeholder="mot de passe"
        {...register("password")}
        type="password"
      />
      {errors.password && <p>{errors.password.message}</p>}

      <button type="submit">{isLogin ? "Se connecter" : "S'inscrire"}</button>

      <span onClick={() => setIsLogin(!isLogin)}>
        {isLogin
          ? "Pas encore de compte ? S'inscrire"
          : "Déjà un compte ? Se connecter"}
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
  background-color: #f9f9f9;

  button {
    margin-top: 20px;
    padding: 12px;
    border-radius: 20px;
    width: 300px;
    background-color: #1e90ff;
    color: white;
  }

  input {
    padding: 12px;
    border-radius: 20px;
    width: 300px;
    margin-top: 20px;
  }
  span {
    color: #1e90ff;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
      color: #0069d2;
    }
  }
  p{
    color: #FF4D4D;
  }
`;
