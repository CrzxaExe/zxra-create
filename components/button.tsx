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
      className={`${className} -mt-1 flex flex-row items-center justify-center text-base transition duration-300 ease-in-out`}
    >
      <div className="md:hidden">{children}</div>
      <span
        className={`${
          !children ? "block" : "hidden"
        } md:block text-center flex items-center justify-center`}
      >
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
      className="w-full transition-all duration-300 ease-in-out bg-base-upascent/80 hover:bg-base-upascent active:bg-base-ascent px-5 text-center py-2 mt-5 rounded-lg text-slate-600 hover:text-slate-800 active:text-white font-bold"
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
      className="w-full transition-all duration-300 ease-in-out bg-base-upascent/80 hover:bg-base-upascent active:bg-base-ascent px-5 text-center py-2 mt-5 rounded-lg text-slate-600 hover:text-slate-800 active:text-white font-bold"
    >
      {pending ? "Masuk..." : "Masuk"}
    </button>
  );
};

export const AuthButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-slate-600 px-5 text-center py-3 mt-5 rounded-lg text-slate-200"
    >
      {pending ? "Autentikasi..." : "Autentikasi"}
    </button>
  );
};
