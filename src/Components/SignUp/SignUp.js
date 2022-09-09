import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import logo from "../../assets/logo.png";
import { signUp } from "../../mywalletService";
import { Wrapper, Input, Form, Button } from "./SignUp.style";
import { ThreeDots } from "react-loader-spinner";

export default function SignUp() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (user) {
      navigate("/history");
    }
  }, []);

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function sendSignUp(e) {
    e.preventDefault();

    if (form.confirmPassword !== form.password) {
      return alert("Passwords must match!");
    }

    setIsLoading(true);

    const promise = signUp(form);
    promise
      .catch((res) => {
        alert(res.response.data.message);
        setIsLoading(false);
      })
      .then(() => {
        setIsLoading(false);
        setForm({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        navigate("/");
      });
  }

  return (
    <>
      {isLoading ? (
        <Wrapper>
          <img src={logo} alt="logo" />

          <Form onSubmit={sendSignUp}>
            <Input
              disabled
              placeholder="Nome"
              name="name"
              type="name"
              value={form.name}
              onChange={handleForm}
              required
            />
            <Input
              disabled
              placeholder="E-mail"
              name="email"
              type="email"
              value={form.email}
              onChange={handleForm}
              required
            />
            <Input
              disabled
              placeholder="Senha"
              name="password"
              type="password"
              value={form.password}
              onChange={handleForm}
              required
            />
            <Input
              disabled
              placeholder="Confirme a senha"
              name="confirmPassword"
              type="password"
              value={form.confirmPassword}
              onChange={handleForm}
              required
            />

            <Button disabled type="submit">
              <ThreeDots color="rgba(255,255,255,1)" height={10} with={45} />
            </Button>
          </Form>
          <Link to="/">Já tem uma conta? Entre agora!</Link>
        </Wrapper>
      ) : (
        <Wrapper>
          <img src={logo} alt="logo" />

          <Form onSubmit={sendSignUp}>
            <Input
              placeholder="Nome"
              name="name"
              type="name"
              value={form.name}
              onChange={handleForm}
              required
            />
            <Input
              placeholder="E-mail"
              name="email"
              type="email"
              value={form.email}
              onChange={handleForm}
              required
            />
            <Input
              placeholder="Senha"
              name="password"
              type="password"
              value={form.password}
              onChange={handleForm}
              required
            />
            <Input
              placeholder="Confirme a senha"
              name="confirmPassword"
              type="password"
              value={form.confirmPassword}
              onChange={handleForm}
              required
            />

            <Button type="submit">Entrar</Button>
          </Form>
          <Link to="/">Já tem uma conta? Entre agora!</Link>
        </Wrapper>
      )}
    </>
  );
}
