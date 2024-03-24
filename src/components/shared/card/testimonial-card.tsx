import { Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  post: string;
  review: string;
  img: string;
}

const TestimonialCard = ({ name, post, review, img }: TestimonialCardProps) => {
  return (
    <div className='p-8 border-2 border-dark-100 rounded-sm rounded-tl-[3rem] rounded-br-[3rem]'>
      <div className='flex gap-4 items-center'>
        <div className='size-16 rounded-full overflow-full'>
          <img
            src={img}
            alt={name}
            className='rounded-full size-16 object-cover'
          />
        </div>
        <div className='space-y-2'>
          <h4 className='text-lg text-dark-700 font-bold'>{name}</h4>
          <p className='text-base text-dark-300 font-medium'>{post}</p>
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
