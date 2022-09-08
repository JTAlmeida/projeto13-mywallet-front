import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin-top: 25px;
  padding: 0 25px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  color: rgba(255, 255, 255, 1);
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 22px;

  img {
    cursor: pointer;
  }
`;

export const HistoryWrapper = styled.div`
  height: 75vh;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid #ffffff;
  border-radius: 5px;
  margin-bottom: 13px;
  padding-top: 20px;

  h1 {
    width: 60%;
    color: rgba(134, 134, 134, 1);
    font-size: 20px;
    font-weight: 400;
    align-self: center;
    text-align: center;
    padding-top: calc(68vh / 2);
  }

  ul {
    width: 100%;
    height: calc(100% - 30px);
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: flex-start;
    gap: 10px;
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export const FooterWrapper = styled.div`
  height: 15vh;
  display: flex;
  justify-content: space-between;
`;

export const FooterOptions = styled.div`
  height: 14vh;
  width: 42vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(163, 40, 214, 1);
  border: 1px solid #a328d6;
  border-radius: 5px;
  color: rgba(255, 255, 255, 1);
  font-size: 17px;
  font-weight: 700;
  padding: 10px;

  img {
    width: 24px;
  }
`;

export const TransactionDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  padding: 0 10px;

  .transaction-description {
    color: rgba(0, 0, 0, 1);
    span {
      color: #c6c6c6;
      margin-right: 10px;
    }
  }
  .transaction-value {
    color: ${(props) => (props.type === "income" ? "rgba(3, 172, 0, 1)" : "rgba(199, 0, 0, 1)")};
  }
`;

export const BalanceStyle = styled.div`
  position: relative;
  bottom: 10;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 17px;
  padding: 0 10px;
  padding-top: 5px;
  
  h2 {
    font-weight: 700;
    color: rgba(0, 0, 0, 1);
  }
  h3 {
    font-weight: 400;
    color: ${(props) => (props.balance >= 0 ? "rgba(3, 172, 0, 1)" : "rgba(199, 0, 0, 1)")};
  }
`;
