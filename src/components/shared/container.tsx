import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProp {
  children?: ReactNode;
  direction: "normal" | "reverse";
  subtitle: string;
  heading: string;
  subheading1: string;
  subheading2?: string;
  btnLabel: string;
  img: string;
  alt: string;
}

const Container = ({
  children,
  direction,
  subtitle,
  heading,
  subheading1,
  subheading2,
  btnLabel,
  img,
  alt,
}: ContainerProp) => {
  return (
    <div
      className={cn(
        "flex justify-between items-center gap-8 mx-auto",
        direction === "reverse"
          ? "lg:flex-row-reverse md:flex-row-reverse flex-col"
          : "lg:flex-row md:flex-row flex-col"
      )}
    >
      <div className='lg:w-1/2 md:w-1/2 w-full flex flex-col gap-7'>
        {/* sub-heading */}
        <div className='flex gap-6 items-center'>
          <div className='text-lg font-semibold uppercase px-3 py-1 rounded-md bg-navyBlue-100 text-navyBlue-500 w-fit'>
            {subtitle}
          </div>
          <hr className='h-[3px] rounded-full w-24 bg-navyBlue-500' />
        </div>

        {/* heading */}
        <h2 className='lg:text-5xl text-4xl   text-dark-500 font-bold'>
          {heading}
        </h2>

        {/* para */}
        <div className='space-y-4 -mt-1'>
          <p className='text-lg text-dark-400 text-medium'>{subheading1}</p>
          {subheading2 && (
            <p className='text-lg text-dark-400 text-medium'>{subheading2}</p>
          )}
        </div>

        {/* children */}
        {children && children}

        {/* action btn */}
        <Button
          className='text-lg text-semibold border-2 border-dark-100 px-6 py-5 rounded-sm w-fit'
          variant={"ghost"}
        >
          {btnLabel}
        </Button>
      </div>

      {/* right */}
      <div className='w-fit'>
        <div className='flex justify-center items-center p-6 rounded-tl-[5rem] rounded-br-[5rem] bg-navyBlue-100 w-fit'>
          <img
            src={img}
            alt={alt}
            className='object-cover  aspect-square lg:size-[450px] md:size-[350px]'
          />
        </div>
      </div>
    </div>
  );
};

export default Container;
