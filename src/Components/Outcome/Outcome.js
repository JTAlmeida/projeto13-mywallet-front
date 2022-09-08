import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Wrapper, Input, Form, Button, Header } from "./Outcome.style";
import { transactions } from "../../mywalletService";
import back from "../../assets/return.png";
import dayjs from "dayjs";

export default function Income() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const date = dayjs().format("DD/MM");
  const [form, setForm] = useState({
    amount: "",
    description: "",
  });

  function fixValue(e) {
    setForm({
      ...form,
      [e.target.name]: parseFloat(e.target.value).toFixed(2),
    });
  }

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function sendNewIncome(e) {
    e.preventDefault();

    const promise = transactions({form, type: "outcome", date});
    promise.catch((res) => {
      alert(res.response.data.message);
      setIsLoading(false);
    });

    promise.then((res) => {
      setIsLoading(false);
      setForm({
        amount: "",
        description: "",
      });
      navigate("/history");
    });
  }

  return (
    <>
      {isLoading ? (
        <Wrapper>
          <Header>
            <h1>Nova saída</h1>
            <img src={back} alt="return" />
          </Header>

          <Form onSubmit={sendNewIncome}>
            <Input
              disabled
              placeholder="Valor"
              name="amount"
              type="number"
              step=".01"
              value={form.amount}
              required
            />
            <Input
              disabled
              placeholder="Descrição"
              name="description"
              type="text"
              value={form.description}
              required
            />
            <Button disabled type="submit">
              Salvar saída
            </Button>
          </Form>
        </Wrapper>
      ) : (
        <Wrapper>
          <Header>
            <h1>Nova saída</h1>
            <Link to="/history">
              <img src={back} alt="return" />
            </Link>
          </Header>

          <Form onSubmit={sendNewIncome}>
            <Input
              placeholder="Valor"
              name="amount"
              type="number"
              value={form.amount}
              onChange={handleForm}
              onBlur={fixValue}
              required
            />
            <Input
              placeholder="Descrição"
              name="description"
              type="text"
              value={form.description}
              onChange={handleForm}
              required
            />
            <Button type="submit">Salvar saída</Button>
          </Form>
        </Wrapper>
      )}
    </>
  );
}
