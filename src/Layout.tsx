import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "./components";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className='flex flex-col justify-center items-center w-full'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
