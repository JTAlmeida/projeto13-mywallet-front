import axios from "axios";

const BASE_URL = "http://localhost:5000/";

function createHeaders() {
  const auth = JSON.parse(localStorage.getItem("mywallet"));
  const config = {
    headers: {
      Authorization: `Bearer ${auth.token}`,
    },
  };
  return config;
}

function signUp(body) {
  const signUpAPI = `${BASE_URL}auth/sign-up`;
  return axios.post(signUpAPI, body);
}

function signIn(body) {
  const signInAPI = `${BASE_URL}auth/sign-in`;
  return axios.post(signInAPI, body);
}
function getTransactions() {
  const config = createHeaders();
  const transactionAPI = `${BASE_URL}transactions`;
  return axios.post(transactionAPI, config);
}

function postTransactions(body) {
  const config = createHeaders();
  const transactionAPI = `${BASE_URL}transactions`;
  return axios.post(transactionAPI, body, config);
}

export { signUp, signIn, getTransactions, postTransactions };
