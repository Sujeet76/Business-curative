import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface HeighLightTextProps {
  children: ReactNode;
  className?: string;
}

const HeighLightText = ({ children, className }: HeighLightTextProps) => {
  return (
    <span
      className={cn(
        "bg-clip-text text-transparent bg-gradient-to-br from-[#667db6] via-[#0082c8] to-[#667db6]",
        className
      )}
    >
      {children}
    </span>
  );
};

export default HeighLightText;
