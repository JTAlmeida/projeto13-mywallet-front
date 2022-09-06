import axios from "axios";

const BASE_URL = "http://localhost:5000/";

function signUp(body) {
  const signUpAPI = `${BASE_URL}/auth/sign-up`;
  return axios.post(signUpAPI, body);
}

function signIn(body) {
  const signInAPI = `${BASE_URL}/auth/sign-in`;
  return axios.post(signInAPI, body);
}

function addIncome(body) {
  const addIncomeAPI = `${BASE_URL}/income`;
  return axios.post(addIncomeAPI, body);
}

function addOutcome(body) {
  const addOutcomeAPI = `${BASE_URL}/outcome`;
  return axios.post(addOutcomeAPI, body);
}

export { signUp, signIn, addIncome, addOutcome };
