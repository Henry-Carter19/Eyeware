import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./components/layout/MainLayout";
import ProductsPage from "./pages/ProductsPage";
import ProductsDetailPage from "./pages/ProductsDetailPage";
import StorePage from "./pages/StorePage";
import ScrollToTop from "./components/ui/ScrollToTop/ScrollToTop";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          {/* <Route path="signin" element={<SignIn />} />
          <Route path="cart" element={<Cart />} />
          <Route path="track-order" element={<TrackOrder />} /> */}
          <Route path="/products" element={<ProductsPage />} />
          <Route
            path="/products/details/:id"
            element={<ProductsDetailPage />}
          />
          <Route path="/stores" element={<StorePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
