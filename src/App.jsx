import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import { Routes, Route } from "react-router-dom";
import Checkout from "./pages/Checkout";
import ThankYou from "./pages/ThankYou";
import Error from "./pages/Error";

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gioi-thieu" element={<About />} />
            <Route path="/san-pham" element={<Products />} />
            <Route path="/dat-hang" element={<Checkout />} />
            <Route path="/cam-on" element={<ThankYou />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
