import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import { Container } from "@mui/material";

const MainLayout = () => {
  return (
    <Container maxWidth="xl">
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default MainLayout;
