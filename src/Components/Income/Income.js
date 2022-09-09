import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Wrapper, Input, Form, Button, Header } from "./Income.style";
import { postTransactions } from "../../mywalletService";
import back from "../../assets/return.png";
import { ThreeDots } from "react-loader-spinner";

export default function Income() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
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

    setIsLoading(true);

    const promise = postTransactions({ ...form, type: "income" });

    promise.catch((res) => {
      alert(res.response.data.message);
      setIsLoading(false);
    });
    promise.then(() => {
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
            <h1>Nova entrada</h1>
            <img src={back} alt="return" />
          </Header>

          <Form onSubmit={sendNewIncome}>
            <Input
              disabled
              placeholder="Valor"
              name="amount"
              type="number"
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
            <ThreeDots color="rgba(255,255,255,1)" height={10} width={45} />
            </Button>
          </Form>
        </Wrapper>
      ) : (
        <Wrapper>
          <Header>
            <h1>Nova entrada</h1>
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
            <Button type="submit">Salvar entrada</Button>
          </Form>
        </Wrapper>
      )}
    </>
  );
}
