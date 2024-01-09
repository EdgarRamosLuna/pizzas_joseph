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
import Clients from "./components/admin/Clients";

function App() {
  const [haveSess, setHaveSess] = useState(false);
  const [loading, setLoading] = useState(true);
  const [permisos, setPermissions] = useState([]);
  const [server, setServer] = useState(process.env.REACT_APP_API_URL_LOCAL_SERVER);
 // console.log(server);
  useEffect(() => {
   // setLoading(true);
    const token = localStorage.getItem("token");
    if (token !== null && token !== "") {
      //console.log(token);
      axios
        .get(`${server}/user`, {
          headers: {
            Authorization: `Bearer ${token}`,
            //'Cache-Control': 'no-store, no-cache, must-revalidate',
            //'Pragma': 'no-cache',
            //'Expires': '0'
          },
        })
        .then((response) => {
          
          if(response.data.message === 'Token no valido'){
            setHaveSess(false);
            setTimeout(() => {
              setLoading(false);
              
            }, 1000);
          }else{
            if (Number(response.data.id) > 0) {
              
            //  console.log(response.data)
              const {p_storage, p_sales, p_clients, p_users} = response.data;
              setPermissions(response.data)
              setHaveSess(true);
           //   localStorage.setItem('turno', Number(response.data.turno_status));
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
              <Route exact path="/" element={<Header permisos={permisos} />}>
                {permisos.p_users === '1' ? <Route exact path="/" element={<Storage />} />: <Route exact path="/" element={<Pos permisos={permisos}  />} />}
                {permisos.p_storage === '1' ? <Route exact path="/inventario" element={<Storage />} />: <Route exact path="/inventario" element={<Pos permisos={permisos}  />} />}
                {permisos.p_sales === '1' ? <Route exact path="/ventas" element={<Sales />} /> : <Route exact path="/ventas" element={<Pos permisos={permisos}  />} />}
                <Route exact path="/pos" element={<Pos  permisos={permisos} />} />
                {permisos.p_users === '1' ? <Route exact path="/usuarios" element={<Users />} />: <Route exact path="/usuarios" element={<Pos permisos={permisos}  />} />}
                {permisos.p_clients === '1' ? <Route exact path="/clientes" element={<Clients />} />: <Route exact path="/clientes" element={<Pos permisos={permisos}  />} />}    
              </Route>
              {/*permisos.p_sales === '1' ? <Route exact path="/ticket/:id" element={<Ticket />} />: ""*/}    
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
