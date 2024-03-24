import { Button } from "@/components/ui/button";

import logo from "@/assets/logo.png";

import { navLinks } from "@/constants";
import { Link, NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <header className='w-full fixed inset-0 h-16 bg-transparent backdrop-blur-lg z-[100]'>
      <div className='w-11/12 mx-auto px-6'>
        <nav className=' flex justify-between items-center w-full h-16'>
          <Link
            to='/'
            className='size-10 flex items-center gap-2 w-fit'
          >
            <img
              src={logo}
              alt='Business Curative'
              className='size-10 object-cover'
            />
            <span className='text-xl font-extrabold drop-shadow-md'>
              Business Curative
            </span>
          </Link>
          <ul className='flex gap-2 flex-1 justify-center'>
            {navLinks.map(({ label, path }) => (
              <li key={label}>
                <NavLink
                  className={({ isActive }) =>
                    cn(
                      "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium text-dark-700 transition-all  hover:bg-accent hover:text-accent-foreground hover:font-semibold px-3 py-1 text-base",
                      isActive && "text-navyBlue-500 font-semibold "
                    )
                  }
                  to={path}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className='flex gap-3'>
            <Button
              className='text-navyBlue-500 hover:text-navyBlue-500 text-base h-auto font-semibold'
              variant={"ghost"}
            >
              Sign in
            </Button>
            <Button className='text-white bg-navyBlue-500 text-base h-auto hover:bg-navyBlue-500/80 font-semibold'>
              Get Started
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
