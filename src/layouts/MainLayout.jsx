import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import Banner from "../components/home/Banner";

const MainLayout = () => {
  const location = useLocation();
  return (
    <>
      <Header className="w-full max-w-[1400px] mx-auto" />
      {(location?.pathname == "/home" || location?.pathname == "/") && (
        <Banner />
      )}
      <Outlet className="w-full max-w-[1400px] mx-auto" />
      <Footer className="w-full max-w-[1400px] mx-auto" />
    </>
  );
};

export default MainLayout;
