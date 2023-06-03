import {FormLogin} from "./components/FormLogin"
// import WelcomeMessage from "./components/WelcomeMessage"
import { DashboardScreen, FormsColetaScreen, LoginSplash, AjudaScreen} from "./components/Firstlayer"
import { SenhaSplash } from "./components/Firstlayer"
import { FormSenha } from "./components/FormLogin"
import { FormRegister } from "./components/FormLogin"
import { RegisterSplash } from "./components/Firstlayer"
import {Logo} from "./components/Logo"
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import axios from "axios"
import { useState } from "react"
import { AuthProvider } from "./AuthContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardScreen />,
  },
  {
    path: "/Register",
    element: <RegisterSplash />,
  },
  {
    path: "/FormsColeta",
    element: <FormsColetaScreen />,
  },
  {
    path: "/Ajuda",
    element: <AjudaScreen />,
  },
]);

function App() {

  
  const [auth, setToken] =useState<string>('');
  const [login, setLogin] =useState<string>('');

  const fetchToken = async () => {
    try {

      let headersList = {
        Accept: "*/*",
        "Content-Type": "application/json",
      };
    
      let bodyContent = JSON.stringify({
        inepCod: login,
        password: "26127792",
      });
    
      let reqOptions = {
        url: "https://esus-recife-api.cyclic.app/auth/login",
        method: "POST",
        headers: headersList,
        data: bodyContent,
      };

      const response = await axios.request(reqOptions); // Replace with your API endpoint
      console.log(response)
      setToken(response.data.access_token);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <AuthProvider>
    <>
      <FormLogin></FormLogin>
      {/* <FormRegister></FormRegister> */}
      {/* <RegisterSplash></RegisterSplash>*/}
      {/* <RouterProvider router={router} /> */}
      
      {/* <div>
      <button onClick={fetchToken}>Fetch Data</button>
        <div>{auth}</div>
      </div> */}
    </>
    </AuthProvider>
  )
}

export default App
