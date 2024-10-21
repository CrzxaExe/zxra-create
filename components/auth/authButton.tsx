import { signIn, signOut } from "@/auth";

export const AuthButton = async () => {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/login" });
      }}
    >
      <button
        type="submit"
        className="px-3 py-2 bg-rose-400 text-black font-semibold mt-2"
      >
        Keluar
      </button>
    </form>
  );
};

export const GithubLoginButton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <form
      action={async () => {
        "use server";

        await signIn("github", { redirectTo: "/dashboard" });
      }}
    >
      <button
        type="submit"
        className={`${className} w-full bg-slate-700 px-5 text-center py-3 mt-5 rounded-lg text-slate-400`}
      >
        {children}
      </button>
    </form>
  );
};
