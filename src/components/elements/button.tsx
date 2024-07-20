import Link from "next/link";
import { ReactNode } from "react";

type props = {
  href?: string;
  padding?: string;
  className?: string;
  background?: string;
  children?: ReactNode;
  type?: "button" | "reset" | "submit";
};

const Button = ({
  type,
  href,
  padding,
  children,
  className,
  background,
}: props) => {
  const buttonClasses = `${
    background || "bg-primary"
  } text-light text-sm rounded-xl lg:rounded-2xl ${
    padding || "px-8 py-3"
  } ${className} hover:-translate-y-1 transition-all duration-300`;

  const button = () => (
    <button className={buttonClasses} type={type || "button"}>
      {children}
    </button>
  );

  const link = () => (
    <Link href={href || ""} className={`block w-fit ${buttonClasses}`}>
      {children}
    </Link>
  );

  return href ? link() : button();
};

export default Button;
