import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getTransactions } from "../../mywalletService";
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
  const { setUser } = useContext(UserContext);
  const [transactionHistory, setTransactionHistory] = useState([]);

  /*useEffect(() => {
    const promise = getTransactions();
    console.log(promise);

    promise.catch((res) => {
      alert(res.response.data.message);
    });

    promise.then((res) => {
      setTransactionHistory(res.data);
    });
  }, []);*/

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
          {/*transactionHistory ? (
            transactionHistory.map((transaction, index) => {
              return <h1>{transaction.date}</h1>;
            })
          ) : (
            <h1>Não há registros de entrada ou saída</h1>
          )*/}
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
