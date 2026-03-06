import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./Footer/Footer";

const MainLayout = () => {
  return (
    <>
      {/* <Header /> */}

      <main style={{ minHeight: "80vh" }}>
        <Outlet />
      </main>

      {/* <Footer /> */}
    </>
  );
};

export default MainLayout;