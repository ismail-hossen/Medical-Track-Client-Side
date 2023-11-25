import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

const MainLayout = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
