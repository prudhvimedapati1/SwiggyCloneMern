import "./App.css";
import Home from "./screens/Home/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./screens/login/Login";
import Signup from "./screens/signup/Signup";
import { CartProvider } from "./components/ContextReducer";
import MyOrders from "./screens/myOrders/MyOrder";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/myorders" element={<MyOrders/>}></Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
