import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <>
      <Navbar />  
      <main className='pt-[140px] md:pt-0 font-mulish'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
