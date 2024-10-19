import Link from "next/link";

export const TopbarButton = ({
  className,
  href,
  text,
  children,
}: {
  className?: string;
  href: string;
  text: string;
  children?: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      className={`${className} flex flex-row items-center text-lg font-paprika hover:text-amber-400 px-1 transition duration-300 ease-in-out`}
    >
      <div className="md:hidden">{children}</div>
      <span className={`${!children ? "block" : "hidden"} md:block`}>
        {text}
      </span>
    </Link>
  );
};
