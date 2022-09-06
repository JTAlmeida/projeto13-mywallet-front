import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import logo from "../../assets/logo.png";
import { signIn } from "../../mywalletService";
import { Wrapper, Input, Form, Button } from "./SignIn.style";
import { ThreeDots } from "react-loader-spinner";

export default function SignIn() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setUser(JSON.parse(localStorage.getItem("mywallet")));
      navigate("/history");
    }
  }, []);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function sendSignIn(e) {
    e.preventDefault();

    setIsLoading(true);
    
    const promise = signIn(form);
    promise.catch((res) => {
      alert(res.response.data.message);
      setIsLoading(false);
      setForm({
        email: "",
        password: "",
      });
    });

    promise.then((res) => {
      const timestamp = +new Date();
      setIsLoading(false);
      setUser(res.data);
      localStorage.setItem(
        "mywallet",
        JSON.stringify({
          name: res.data.name,
          token: res.data.token,
          timestamp,
        })
      );
      setForm({
        email: "",
        password: "",
      });
      navigate("/history");
    });
  }

  return (
    <>
      {isLoading ? (
        <Wrapper>
          <img src={logo} alt="logo" />

          <Form onSubmit={sendSignIn}>
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
            <Button disabled type="submit">
              <ThreeDots color="rgba(255,255,255,1)" height={10} width={45} />
            </Button>
          </Form>
          <Link to="/sign-up">Primeira vez? Cadastre-se!</Link>
        </Wrapper>
      ) : (
        <Wrapper>
          <img src={logo} alt="logo" />

          <Form onSubmit={sendSignIn}>
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
            <Button type="submit">Entrar</Button>
          </Form>
          <Link to="/sign-up">Primeira vez? Cadastre-se!</Link>
        </Wrapper>
      )}
    </>
  );
}
