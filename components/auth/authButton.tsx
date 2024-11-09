import { signIn, signOut } from "@/auth";
import { LogoutOutlined } from "@mui/icons-material";

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
        className="px-3 py-2 mt-4 mb-7 bg-rose-400 text-black font-semibold my-2 rounded-lg"
      >
        <LogoutOutlined /> Keluar
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
        className={`${className} w-full bg-black px-5 text-center py-3 mt-2 rounded-lg text-white`}
      >
        {children}
      </button>
    </form>
  );
};
