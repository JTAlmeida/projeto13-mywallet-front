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
`;

export const HistoryWrapper = styled.div`
  height: 75vh;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid #ffffff;
  border-radius: 5px;
  margin-bottom: 13px;

  h1 {
    width: 60%;
    color: rgba(134, 134, 134, 1);
    font-size: 20px;
    font-weight: 400;
    align-self: center;
    text-align: center;
    padding-top: calc(68vh / 2);
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
