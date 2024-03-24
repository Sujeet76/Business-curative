const ServiceCard = ({
  img,
  title,
  description,
}: {
  img: string;
  title: string;
  description: string;
}) => {
  return (
    <div className='w-full bg-white/50 backdrop-blur-lg rounded-md rounded-tl-[2rem] rounded-br-[2rem] border-2 border-dark-100 p-6'>
      <div className='flex items-center gap-2'>
        <div>
          <img
            src={img}
            alt={title}
            className='w-12 h-12 object-contain'
          />
        </div>
        <h2 className='text-xl antialiased text-dark-700 font-semibold'>
          {title}
        </h2>
      </div>
      <p className='text-base antialiased text-dark-400 font-medium'>
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
