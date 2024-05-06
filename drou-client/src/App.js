import AuthProvider from "./context/AuthContext";
import Home from "./pages/UI/Home/Home";
import Header from "./layout/header/Header";
import Shop from "./pages/UI/Shop/Shop";
import Login from "./pages/Form/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Form/Resgister/Register";
import Contact from "./pages/UI/Contact/Contact";
import { ToastContainer } from "react-toastify";
import { lazy } from "react";
import Detail from "./pages/UI/Detail/Detail";
import Error from "./pages/UI/Errors/Error";
import Cart from "./pages/UI/Cart/Cart";
import { Provider } from "react-redux";
import store from "./redux/store";
const Footer = lazy(() => import("./layout/footer/Footer"));
function App() {
  return (
    <Provider store={store}>
      <AuthProvider >
        <Router>
          <div className="app">
            <ToastContainer />
            <Header />
            <Routes>
              <Route path="*" element={<Error />}></Route>
              <Route path="/" element={<Home />}></Route>
              <Route path="/shop" element={<Shop />}></Route>
              <Route path="/shop/:shopId" element={<Detail />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
            </Routes>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </Provider>
  );
}

export default App;
