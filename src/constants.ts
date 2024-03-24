import company1 from "@/assets/icons/company-1.svg";
import company2 from "@/assets/icons/company-2.svg";
import company3 from "@/assets/icons/company-3.svg";
import company4 from "@/assets/icons/company-4.svg";
import company5 from "@/assets/icons/company-5.svg";
import company6 from "@/assets/icons/company-6.svg";
import people from "@/assets/people.png";
import consulting from "@/assets/consulting.webp";
import accounting from "@/assets/accounting.webp";
import analysis from "@/assets/analysis.webp";
import incorporation from "@/assets/incorporation.webp";
import marketing from "@/assets/marketing.webp";
import tax from "@/assets/tax.webp";

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

export const serviceDetails = [
  {
    title: "Consulting",
    desc: "We guide you through challenges, optimize processes, and foster sustainable growth with data-driven strategies.",
    img: consulting,
  },
  {
    title: "Incorporation",
    desc: "Start your journey with ease as we streamline the startup process and ensure legal compliance",
    img: incorporation,
  },
  {
    title: "Taxation",
    desc: "Trust our experts to navigate complexities, minimize liabilities, and maximize benefits, all within the bounds of the law",
    img: tax,
  },
  {
    title: "Marketing",
    desc: "Stand out in the market with our creative campaigns, digital expertise, and brand elevation strategies",
    img: marketing,
  },
  {
    title: "Accounting",
    desc: "Leave the numbers to us as we maintain accurate records for informed decision-making",
    img: accounting,
  },
  {
    title: "Analysis",
    desc: "We unlock the potential of your data, providing insights that drive strategic planning and innovation",
    img: analysis,
  },
];
