import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import GlobalStyle from "../css/GlobalStyle";
import PrivatePage from "./PrivatePage";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import History from "./History/History";
import Income from "./Income/Income";
import Outcome from "./Outcome/Outcome";
import UserContext from "../contexts/UserContext";


export default function App() {
  const [user, setUser] = useState("");

  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />}></Route>
            <Route path="/sign-up" element={<SignUp />}></Route>
            <Route
              path="/history"
              element={
                <PrivatePage>
                  <History />
                </PrivatePage>
              }
            ></Route>
            <Route
              path="/income"
              element={
                <PrivatePage>
                  <Income />
                </PrivatePage>
              }
            ></Route>
            <Route
              path="/outcome"
              element={
                <PrivatePage>
                  <Outcome />
                </PrivatePage>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}
