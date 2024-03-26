import { motion } from "framer-motion";

import { ContainerMorphed, HeighLightText, ServiceCard } from "@/components";
import { serviceDetails } from "@/constants";
import {
  GraduationCap,
  ShieldCheck,
  SquareArrowOutUpRight,
} from "lucide-react";

// const defaultAnimations = {
//   hidden: {
//     opacity: 0,
//     y: 20,
//   },
//   visible{
//     opacity: 1,
//     y: 0,
//   },
// };

const Service = () => {
  return (
    <>
      <ContainerMorphed
        heading='Our Services'
        subheading='We provide the best services for you'
      />
      <section className='w-full flex-col relative'>
        <div className='w-11/12 mx-auto'>
          <motion.ul
            className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'
            transition={{ staggerChildren: 0.2 }}
          >
            {serviceDetails.map(({ title, desc, img }) => (
              <motion.li
                key={title}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ amount: 0.4 }}
              >
                <ServiceCard
                  title={title}
                  description={desc}
                  img={img}
                />
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section className='w-11/12 mx-auto space-y-6 my-40'>
        <h2 className='lg:text-4xl text-3xl font-semibold '>
          Our Team Provides <HeighLightText>Valuable</HeighLightText> <br />{" "}
          Services at Any Time in Any Situation
        </h2>

        <div className='flex gap-5 flex-wrap'>
          <div className='space-y-4'>
            <div className='size-10 bg-navyBlue-100 text-navyBlue-500 flex items-center justify-center rounded-full p-1'>
              <GraduationCap className='size-8' />
            </div>
            <h4 className='text-xl font-bold'>Planning</h4>
            <p className='text-base font-medium'>
              Thorough market research, Clear and achievable goals,Detailed
              roadmap and timelines,Stakeholder...
            </p>
          </div>
          <div className='space-y-4'>
            <div className='size-10 bg-navyBlue-100 text-navyBlue-500 flex items-center justify-center rounded-full p-1'>
              <ShieldCheck className='size-8' />
            </div>
            <h4 className='text-xl font-bold'>Planning</h4>
            <p className='text-base font-medium'>
              Thorough market research, Clear and achievable goals,Detailed
              roadmap and timelines,Stakeholder...
            </p>
          </div>
          <div className='space-y-4'>
            <div className='size-10 bg-navyBlue-100 text-navyBlue-500 flex items-center justify-center rounded-full p-1'>
              <SquareArrowOutUpRight className='size-6' />
            </div>
            <h4 className='text-xl font-bold'>Planning</h4>
            <p className='text-base font-medium'>
              Thorough market research, Clear and achievable goals,Detailed
              roadmap and timelines,Stakeholder...
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
