import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import { Routes, Route } from "react-router-dom";
import Checkout from "./pages/Checkout";
import ThankYou from "./pages/ThankYou";
import Error from "./pages/Error";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Auth from "./pages/auth/Auth";
import ProductDetail from "./pages/ProductDetail";
import Orders from "./pages/orders/Orders";
import OrdersCompleted from "./pages/orders/OrdersCompleted";
import AuthMiddleware from "./middlewares/AuthMiddleware";
import ScrollTop from "./components/ScrollTop";
// import AuthIndex from "./pages/auth";
const LazyAbout = React.lazy(() => import("./pages/About"));

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9">
          <ScrollTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/gioi-thieu"
              element={
                <React.Suspense fallback={<p>Loading...</p>}>
                  <LazyAbout />
                </React.Suspense>
              }
            />
            <Route path="/san-pham">
              <Route index element={<Products />} />
              <Route path=":path" element={<ProductDetail />} />
            </Route>

            <Route path="/dat-hang" element={<Checkout />} />
            <Route path="/cam-on" element={<ThankYou />} />
            <Route path="*" element={<Error />} />
            <Route path="/auth" element={<Auth />}>
              {/* <Route index element={<AuthIndex />} /> */}
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
            <Route path="/orders" element={<AuthMiddleware />}>
              <Route index element={<Orders />} />
              <Route path="completed" element={<OrdersCompleted />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;

/*
/admin
/admin/users
/admin/users/add
/admin/users/update
/admin/users/delete

/auth/login
/auth/register
/auth/profile
*/
