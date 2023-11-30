import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import Banner from "../components/home/Banner";

const MainLayout = () => {
  const location = useLocation();
  return (
    <>
      <Header className="container mx-auto" />
      {(location?.pathname == "/home" || location?.pathname == "/") && (
        <Banner />
      )}
      <Outlet />
      <Footer className="container mx-auto" />
    </>
  );
};

export default MainLayout;
