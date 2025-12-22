import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="font-mulish grid grid-cols-1">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
