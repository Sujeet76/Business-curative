import { MorphedSVG } from "..";
import { motion } from "framer-motion";

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const ContainerMorphed = ({
  heading,
  subheading,
}: {
  heading: string;
  subheading: string;
}) => {
  return (
    <motion.div
      className='relative mt-44 h-52 flex justify-center items-center flex-col gap-2 w-full'
      initial='hidden'
      animate='visible'
      transition={{
        staggerChildren: 0.2,
      }}
    >
      <MorphedSVG
        className='absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 user-select-none w-full'
        aria-hidden
      />
      <motion.h1
        className='text-5xl font-black text-dark-700 relative -mt-40'
        variants={defaultAnimations}
      >
        {heading}
      </motion.h1>
      <motion.p
        className='text-xl text-dark-400 relative'
        variants={defaultAnimations}
      >
        {subheading}
      </motion.p>
    </motion.div>
  );
};

export default ContainerMorphed;
