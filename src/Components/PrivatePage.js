import { useNavigate } from "react-router-dom";
import { useContext} from "react";
import UserContext from "../contexts/UserContext";
import logo from "../assets/logo.png";
import styled from "styled-components";

const SEC = 1000;
const MIN = SEC * 60;

export default function PrivatePage({ children }) {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const auth = JSON.parse(localStorage.getItem("mywallet"));

  function renderError() {
    localStorage.clear("mywallet");
    setUser("");

    return (
      <>
        <Wrapper>
          <img src={logo} alt="logo" />
          <h1>
            Você não pode acessar esta página.
            <p>Por favor, cadastre-se ou faça login.</p>
          </h1>
          <button onClick={() => navigate("/sign-up")}>Cadastre-se</button>
          <button onClick={() => navigate("/")}>Login</button>
        </Wrapper>
      </>
    );
  }

  const timeNow = +new Date();

  if (!auth || !auth.email || !auth.timestamp || !auth.token) {
    return renderError();
  } else {
    const timeLogged = auth.timestamp;

    if (timeNow - timeLogged >= 60 * MIN) {
      return renderError();
    } else {
      return <>{children}</>;
    }
  }
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-top: 40px;
    margin-bottom: 50px;
    color: rgba(255, 255, 255, 1);
    font-size: 23px;
    font-weight: 700;
    text-align: center;
  }

  p {
    margin-top: 5px;
  }

  button {
    height: 40px;
    width: 90%;
    margin-bottom: 20px;
    background-color: rgba(163, 40, 214, 1);
    border-radius: 5px;
    color: rgba(255, 255, 255, 1);
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
  }
`;
