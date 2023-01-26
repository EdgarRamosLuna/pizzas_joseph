import logo from "./logo.svg";
import "./App.css";
import MainContext, { MainContextProvider } from "./context/MainContext";
import { Route, Router, Routes } from "react-router-dom";
import Index from "./components/admin/Index";
import Storage from "./components/admin/Storage";
import Sales from "./components/admin/Sales";
import Pos from "./components/client/Pos";
import Users from "./components/admin/Users";
import Login from "./components/admin/Login";
import Header from "./components/admin/Header";
import { Content, Loader } from "./styles/Styles";
//import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Ticket from "./components/helpers/Ticket";

function App() {
  const [haveSess, setHaveSess] = useState(false);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
   // setLoading(true);
    const token = localStorage?.getItem("token");
    if (token !== null && token !== "") {
      //console.log(token);
      axios
        .get("http://phpstack-921351-3198370.cloudwaysapps.com/server/api/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
    
          if(response.data.message === 'Token no valido'){
            console.log(response.data);
            setHaveSess(false);
            setTimeout(() => {
              setLoading(false);
              
            }, 1000);
          }else{
            if (Number(response.data.id) > 0) {
              setHaveSess(true);
              localStorage.setItem('turno', Number(response.data.turno_status));
              setTimeout(() => {
                setLoading(false);
                
              }, 1000);
            }

          }
        });
    } else {
      setLoading(false);
      setHaveSess(false);
      //   window.location.replace('/login');
    }
    //setSesionToken()
    return () => {};
  }, []);

  return (
    <Content>
      {loading === true ? (
        <Loader>
          <img src="/assets/img/loading.svg" alt="" />
        </Loader>
      ) : (
        <MainContextProvider>
          <Routes>
            {haveSess === true ? (
              <>
              <Route exact path="/" element={<Header />}>
                <Route exact path="/" element={<Storage />} />
                <Route exact path="/inventario" element={<Storage />} />
                <Route exact path="/ventas" element={<Sales />} />
                <Route exact path="/pos" element={<Pos />} />
                <Route exact path="/usuarios" element={<Users />} />
                
              </Route>
              <Route exact path="/ticket/:id" element={<Ticket />} />
              </>
            ) : (
              <Route exact path="/" element={<Login />}>
                <Route exact path="/inventario" element={<Login />} />
                <Route exact path="/ventas" element={<Login />} />
                <Route exact path="/pos" element={<Login />} />
                <Route exact path="/usuarios" element={<Login />} />
              </Route>
              
            )}
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </MainContextProvider>
      )}
    </Content>
  );
}

export default App;
