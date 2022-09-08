import axios from "axios";

const BASE_URL = "http://localhost:5000/";

function signUp(body) {
  const signUpAPI = `${BASE_URL}auth/sign-up`;
  return axios.post(signUpAPI, body);
}

function signIn(body) {
  const signInAPI = `${BASE_URL}auth/sign-in`;
  return axios.post(signInAPI, body);
}

function transactions(body) {
  const addIncomeAPI = `${BASE_URL}/add-value`;
  return axios.post(addIncomeAPI, body);
}

export { signUp, signIn, transactions };
