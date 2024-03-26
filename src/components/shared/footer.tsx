import logo from "@/assets/logo.png";
import { navLinks, services } from "@/constants";
import {
  HeartFilledIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='bg-navyBlue-500 flex flex-col justify-center items-center p-6 w-full'>
      <div className='w-11/12 flex flex-wrap gap-6 py-20'>
        {/* first */}
        <div className='space-y-5 lg:w-[40%]'>
          {/* logo */}
          <Link
            to='/'
            className='flex items-center gap-2 w-fit'
          >
            <img
              src={logo}
              alt='Business Curative'
              className='size-10 object-cover z-10'
            />
            <span className='text-xl font-extrabold drop-shadow-md'>
              Business Curative
            </span>
          </Link>
          <p className='text-base text-[#F3F3F3]'>
            In the fast-paced and dynamic world of business, every decision
            counts. Whether you're a startup seeking to establish your presence
            or an established enterprise looking to scale new heights, having
            the right guidance can make all the difference.
          </p>
          <div className='flex gap-4 flex-wrap'>
            {/* link 1 */}
            <Link
              to={"#"}
              target='_black'
              className='flex items-center gap-1 text-white'
            >
              <Facebook className='size-5' />
              <p className='font-semibold'>Facebook</p>
            </Link>
            {/* link 2 */}
            <Link
              to={"#"}
              target='_black'
              className='flex items-center gap-1 text-white'
            >
              <LinkedInLogoIcon className='size-5' />
              <p className='font-semibold'>LinkedIn</p>
            </Link>
            {/* link 3 */}
            <Link
              to={"#"}
              target='_black'
              className='flex items-center gap-1 text-white'
            >
              <InstagramLogoIcon className='size-5' />
              <p className='font-semibold'>Facebook</p>
            </Link>
          </div>
        </div>

        {/* second */}
        <UseFullLink
          heading='Our Services'
          mapItems={services}
        />
        {/* About */}
        <UseFullLink
          heading='Explore More'
          mapItems={navLinks.map((item) => item.label)}
        />

        {/* About */}
        <UseFullLink
          heading='Contact'
          mapItems={["contact@info.com", "+91 1234567898"]}
        />
      </div>

      <hr className='w-11/12 bg-[#3D3D3D] h-[1px]' />
      <div className='flex w-11/12 justify-center items-center py-5'>
        <p className='flex gap-1 text-xl font-semibold font-poppins text-white uppercase'>
          <span>Made With</span>{" "}
          <HeartFilledIcon className='size-6 text-rose-600' />{" "}
          <span>by sujeet</span>
        </p>
      </div>
    </footer>
  );
};

const UseFullLink = ({
  mapItems,
  heading,
}: {
  mapItems: string[];
  heading: string;
}) => (
  <div className='space-y-5'>
    <h6 className='text-white text-xl font-bold'>{heading}</h6>
    <ul className='space-y-4'>
      {mapItems.map((item) => (
        <li
          key={item}
          className='text-white text-base font-medium hover:font-semibold hover:underline'
        >
          <Link to='#'>{item}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
