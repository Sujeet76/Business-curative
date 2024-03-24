import company1 from "@/assets/icons/company-1.svg";
import company2 from "@/assets/icons/company-2.svg";
import company3 from "@/assets/icons/company-3.svg";
import company4 from "@/assets/icons/company-4.svg";
import company5 from "@/assets/icons/company-5.svg";
import company6 from "@/assets/icons/company-6.svg";
import people from "@/assets/people.png";

export const navLinks = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Service",
    path: "/service",
  },
  {
    label: "Contact",
    path: "/contact",
  },
  {
    label: "About",
    path: "/about",
  },
];

export const companyDetails = [
  {
    src: company4,
    alt: "Amazon",
  },
  {
    src: company1,
    alt: "ripple",
  },
  {
    src: company2,
    alt: "airbnb",
  },
  {
    src: company3,
    alt: "stripe",
  },
  {
    src: company5,
    alt: "fedEx",
  },
  {
    src: company6,
    alt: "walmart",
  },
];

export const testimonials = [
  {
    author: "John Doe",
    post: "CEO, XYZ Company",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: people,
  },
  {
    author: "John Doe",
    post: "CEO, XYZ Company",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: people,
  },
  {
    author: "John Doe",
    post: "CEO, XYZ Company",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: people,
  },
];

export const services = [
  "Business Consulting",
  "Accounting",
  "Marketing",
  "Taxation",
];
