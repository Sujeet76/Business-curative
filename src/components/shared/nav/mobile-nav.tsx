import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

import logo from "@/assets/logo.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger
        asChild
        className='lg:hidden md:hidden block'
      >
        <Button
          variant={"ghost"}
          className='lg:hidden md:hidden block'
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <Link
            to='/'
            className='size-6 flex items-center gap-2 w-fit'
          >
            <img
              src={logo}
              alt='Business Curative'
              className='size-6 object-cover'
            />
            <span className='font-extrabold drop-shadow-md'>
              Business Curative
            </span>
          </Link>
        </SheetHeader>
        <ul className='mt-6 space-y-4'>
          {navLinks.map((nav) => (
            <MenuItem
              key={nav.label}
              {...nav}
            />
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}

const MenuItem = ({ label, path }: { label: string; path: string }) => {
  const { pathname } = useLocation();
  const isActive = pathname === path;
  return (
    <li className='w-full'>
      <SheetClose asChild>
        <NavLink
          to={path}
          className={cn(
            "block w-full px-4 text-dark-700 py-2 text-lg hover:bg-slate-400 hover:scale-95 transition-all font-medium rounded-sm",
            isActive && "bg-navyBlue-200 text-dark-700 font-semibold"
          )}
        >
          {label}
        </NavLink>
      </SheetClose>
    </li>
  );
};
