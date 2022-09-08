import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import {
  Wrapper,
  Header,
  HistoryWrapper,
  FooterWrapper,
  FooterOptions,
} from "./History.style";
import leaveIcon from "../../assets/leave.png";
import plus from "../../assets/plus.png";
import minus from "../../assets/minus.png";

export default function History() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <Wrapper>
        <Header>
          Olá, Fulano
          <img
            src={leaveIcon}
            alt="leave"
            onClick={() => {
              localStorage.clear("mywallet");
              setUser("");
              navigate("/");
            }}
          />
        </Header>
        <HistoryWrapper>
          <h1>Não há registros de entrada ou saída</h1>
        </HistoryWrapper>
        <FooterWrapper>
          <Link to="/income">
            <FooterOptions>
              <img src={plus} alt="plus" />
              Nova <br />
              entrada
            </FooterOptions>
          </Link>
          <Link to="/outcome">
            <FooterOptions>
              <img src={minus} alt="minus" />
              Nova <br />
              saída
            </FooterOptions>
          </Link>
        </FooterWrapper>
      </Wrapper>
    </>
  );
}
