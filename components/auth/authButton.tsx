import { signOut } from "@/auth";

export const AuthButton = async () => {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/login" });
      }}
    >
      <button type="submit">Keluar</button>
    </form>
  );
};
