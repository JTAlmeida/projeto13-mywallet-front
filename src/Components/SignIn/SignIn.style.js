import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  margin-top: 159px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-bottom: 24px;
  }

  a {
    color: rgba(255, 255, 255, 1);
    cursor: pointer;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Input = styled.input`
  height: 58px;
  width: 95%;
  margin-bottom: 13px;
  padding: 15px;
  border: 1px solid #ffffff;
  border-radius: 5px;
  color: rgba(0, 0, 0, 1);
  font-size: 20px;
  font-weight: 400;

  &::placeholder {
    color: rgba(0, 0, 0, 1);
    font-size: 20px;
    font-weight: 400;
  }
`;

export const Button = styled.button`
height: 46px;
width: 95%;
margin-bottom: 36px;
background-color: rgba(163, 40, 214, 1);
border-radius: 5px;
color: rgba(255, 255, 255, 1);
font-size: 20px;
font-weight: 700;
cursor: pointer;
`