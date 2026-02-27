import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./components/layout/MainLayout";
// import SignIn from "./pages/SignIn";
// import Cart from "./pages/Cart";
// import TrackOrder from "./pages/TrackOrder";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          {/* <Route path="signin" element={<SignIn />} />
          <Route path="cart" element={<Cart />} />
          <Route path="track-order" element={<TrackOrder />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;