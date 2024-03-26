import { Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  post: string;
  review: string;
  img: string;
}

const TestimonialCard = ({ name, post, review, img }: TestimonialCardProps) => {
  return (
    <div className='lg:p-8 md:p-6 p-4 border-2 border-dark-100 rounded-sm rounded-tl-[3rem] rounded-br-[3rem]'>
      <div className='flex gap-4 items-center'>
        <div className='lg:size-16 md:size-14 size-12 rounded-full overflow-hidden'>
          <img
            src={img}
            alt={name}
            className='rounded-full lg:size-16 md:size-14 size-12 object-cover'
          />
        </div>
        <div className='space-y-2'>
          <h4 className='lg:text-lg text-base  text-dark-700 font-bold'>
            {name}
          </h4>
          <p className='lg:text-base text-sm text-dark-300 font-medium'>
            {post}
          </p>
        </div>
      </div>
      <p className='text-dark-400 font-medium mt-5'>{review}</p>
      <Quote
        size={30}
        className='block mr-auto rotate-180 fill-navyBlue-500 stroke-navyBlue-500'
      />
    </div>
  );
};

export default TestimonialCard;
