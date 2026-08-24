import React from "react";
import  ReactDOM from "react-dom/client"
import App from "./App";
import './index.css'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Signup from "./components/Signup";
import Provider from "./context/Provider";

import Signuppassword from "./components/Signuppassword";

import Signupterms from "./components/Signupterms";
import SignupGender from "./components/Signupgender";

const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(
<div className="bg-black min-h-screen"><BrowserRouter>
<Provider>
<Routes>
  <Route path='/' element={<App/>}>
  </Route>
  <Route path='/signup' element={<Signup/>}></Route>
  <Route path='/signup/password' element={<Signuppassword></Signuppassword>}></Route>
  <Route path='/signup/profile' element={<SignupGender/>}></Route>
  <Route path='/signup/terms' element={<Signupterms/>}></Route>
  </Routes>
  </Provider>
  </BrowserRouter>
  </div>

)
