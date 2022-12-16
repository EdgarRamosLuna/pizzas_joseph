import logo from "./logo.svg";
import "./App.css";
import { MainContextProvider } from "./context/MainContext";
import { Route, Router, Routes } from "react-router-dom";
import Index from "./components/admin/Index";
import Storage from "./components/admin/Storage";
import Sales from "./components/admin/Sales";
import Pos from "./components/client/Pos";
import Users from "./components/admin/Users";
import Login from "./components/admin/Login";
import Header from "./components/admin/Header";
import { Content } from "./styles/Styles";

function App() {
  return (
    <Content>
      <MainContextProvider>
          <Routes>
            <Route exact path="/" element={<Header />} >
              <Route exact path="/" element={<Index />} />
              <Route exact path="/inventario" element={<Storage />} />
              <Route exact path="/ventas" element={<Sales />} />
              <Route exact path="/pos" element={<Pos />} />
              <Route exact path="/usuarios" element={<Users />} />
              <Route exact path="login" element={<Login />} />
            </Route>
          </Routes>
      </MainContextProvider>
    </Content>
  );
}

export default App;
