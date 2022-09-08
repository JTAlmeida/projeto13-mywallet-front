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
  TransactionDiv,
  BalanceStyle,
} from "./History.style";
import leaveIcon from "../../assets/leave.png";
import plus from "../../assets/plus.png";
import minus from "../../assets/minus.png";

export default function History() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [hasTransaction, setHasTransaction] = useState(false);
  const [transactionHistory, setTransactionHistory] = useState([]);

  useEffect(() => {
    const promise = getTransactions();

    promise.catch((res) => {
      alert(res.response.data.message);
    });

    promise.then((res) => {
      setTransactionHistory(res.data);
      if (res.data.length > 0) {
        setHasTransaction(true);
      } else if (hasTransaction === true) {
        setHasTransaction(false);
      }
      setTransactionHistory(res.data);
    });
  }, []);

  const getBalance = () => {
    console.log(transactionHistory);
    let result = 0;
    transactionHistory.map((transaction) => {
      if (transaction.type === "income") {
        result += Number(transaction.amount);
      } else {
        result -= Number(transaction.amount);
      }
    });
    result = result.toFixed(2);
    return result.replace(".", ",");
  };
  const balance = getBalance();

  return (
    <>
      <Wrapper>
        <Header>
          Olá, {user.name}
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

        {hasTransaction ? (
          <HistoryWrapper>
            <ul>
              {transactionHistory.map((transaction, index) => {
                console.log(transaction.amount);
                return (
                  <li key={index}>
                    <TransactionDiv type={transaction.type}>
                      <div className="transaction-description">
                        <span>{transaction.date}</span>
                        {transaction.description}
                      </div>
                      <div className="transaction-value">
                        {transaction.amount.replace(".", ",")}
                      </div>
                    </TransactionDiv>
                  </li>
                );
              })}
            </ul>
            <BalanceStyle balance={balance}>
              <h2>SALDO</h2>
              <h3>{balance}</h3>
            </BalanceStyle>
          </HistoryWrapper>
        ) : (
          <HistoryWrapper>
            <h1>Não há registros de entrada ou saída</h1>
          </HistoryWrapper>
        )}

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
