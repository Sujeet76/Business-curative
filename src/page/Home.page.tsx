import { DollarSign, Landmark, Mail, Rss, User } from "lucide-react";
import heroImage from "@/assets/hero-img.svg";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";

import {
  CompanyInfiniteScroll,
  Container,
  HeighLightText,
  TestimonialCard,
} from "@/components";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { testimonials } from "@/constants";

const Home = () => {
  return (
    <>
      <section className='w-11/12 mt-40 px-6 flex gap-4 justify-center'>
        <div className='w-[58%] flex flex-col items-start gap-8'>
          <h1 className='text-6xl font-semibold'>
            Guiding Your <HeighLightText>Business</HeighLightText> Journey
            Through Every Terrain
          </h1>
          <p className='text-2xl text-dark-400'>
            Elevating businesses with bespoke consulting across sectors.
            Tailored guidance for startups and enterprises. Your path to success
            starts here.
          </p>

          <div className='flex gap-4'>
            <div className='relative bg-white shadow-lg rounded-lg'>
              <Input
                type='email'
                placeholder='Your email address'
                className='text-lg font-semibold py-6 px-2 bg-transparent placeholder:text-dark-300 placeholder:user-select-none border-none shadow-none pl-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-700 rounded-lg transition-all'
              />
              <Mail className='w-6 absolute top-1/2 left-4 -translate-y-1/2 text-dark-300' />
            </div>

            <Button className='bg-navyBlue-500 py-6 px-9 text-lg text-white hover:bg-navyBlue-500/80'>
              Get Started
            </Button>
          </div>
        </div>
        <div className='w-[42%] -mt-10'>
          <img
            src={heroImage}
            alt='Hero image'
          />
        </div>
      </section>

      <section className='my-20'>
        <CompanyInfiniteScroll />
      </section>

      <section className='flex flex-col w-11/12 p-6 gap-20 items-center'>
        <Container
          direction='normal'
          subtitle='OUR EXPERTISE'
          heading='Transforming Finances With Strategic Wealth Management'
          subheading1='Guiding You on Your Global Financial Success Journey Through Customized & Personalized Financial Consulting Services. Achieve Your Goals with Data-Driven Expertise and Secure Your Financial Future, Successfully Navigating the Ever-Changing Finance '
          subheading2="We're Committed to Providing You with Expert Guidance, Proven Strategies & Personalized Approach to Ensure Financial Prosperity"
          btnLabel='Explore Services'
          img={image1}
          alt='alt '
        />
        <Container
          direction='reverse'
          subtitle='OUr services'
          heading='Our Services Can Help You Grow Your Investments and Wealth'
          subheading1='Embark on a Journey to Unlock a World of Financial Opportunities, Grow Your Investment with Our Comprehensive and Expert Services'
          btnLabel='Explore Services'
          img={image2}
          alt='alt image'
        >
          <div className='grid grid-cols-2 gap-4 items-start place-items-start'>
            {/* icon 1 */}
            <IconWithLabel
              label='Consulting'
              className='bg-[#CAFFD2]'
            >
              <User
                size={24}
                color='#33DF58'
              />
            </IconWithLabel>
            {/* icon 2 */}
            <IconWithLabel
              label='Taxation'
              className='bg-[#FFABAB]'
            >
              <DollarSign
                size={24}
                color='#CF4141'
              />
            </IconWithLabel>

            {/* icon 3 */}
            <IconWithLabel
              label='Accounting'
              className='bg-[#27B4AC]'
            >
              <Landmark
                color='#70F1EA'
                size={24}
              />
            </IconWithLabel>

            {/* icon 4 */}
            <IconWithLabel
              label='Analysis'
              className='bg-[#FFEE90]'
            >
              <Rss
                size={24}
                color='#B59F28'
              />
            </IconWithLabel>
          </div>
        </Container>
      </section>

      {/* testimonials */}
      <section className='w-11/12 p-6 mx-auto space-y-6 my-20'>
        {/* sub-heading */}
        <div className='flex gap-6 items-center'>
          <div className='text-lg font-semibold uppercase px-3 py-1 rounded-md bg-navyBlue-100 text-navyBlue-500 w-fit'>
            Testimonial
          </div>
          <hr className='h-[3px] rounded-full w-24 bg-navyBlue-500' />
        </div>

        {/* heading */}
        <h2 className='text-5xl text-dark-500 font-bold'>
          What Our Customers Say
        </h2>

        {/* para */}
        <div className='space-y-4 -mt-1'>
          <p className='text-lg text-dark-400 text-medium w-[40%]'>
            Discover the Success Stories and Satisfaction of Clients Who Have
            Benefited from Our Expertise and Personalized Financial Guidance
          </p>
        </div>

        <div className='flex gap-6'>
          {testimonials.map(({ author, post, img, review }) => (
            <TestimonialCard
              key={author}
              name={author}
              post={post}
              review={review}
              img={img}
            />
          ))}
        </div>
      </section>

      {/* services */}
    </>
  );
};

const IconWithLabel = ({
  children,
  label,
  className,
}: {
  children: ReactNode;
  label: string;
  className: string;
}) => (
  <div className='flex items-center gap-5'>
    <div
      className={cn(
        "size-10 rounded-lg flex justify-center items-center",
        className
      )}
    >
      {children}
    </div>
    <span className='text-xl text-bold text-dark-700 font-semibold'>
      {label}
    </span>
  </div>
);

export default Home;
