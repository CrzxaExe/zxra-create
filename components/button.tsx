import Link from "next/link";
import { useFormStatus } from "react-dom";

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

export const RegisterButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-slate-700 px-5 text-center py-3 mt-5 rounded-lg text-slate-400"
    >
      {pending ? "Registrasi.." : "Daftar"}
    </button>
  );
};

export const LoginButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-slate-700 px-5 text-center py-3 mt-5 rounded-lg text-slate-400"
    >
      {pending ? "Masuk..." : "Masuk"}
    </button>
  );
};

export const OtherLoginButton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={`${className} w-full bg-slate-700 px-5 text-center py-3 mt-5 rounded-lg text-slate-400`}
    >
      {children}
    </button>
  );
};
