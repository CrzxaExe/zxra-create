import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Account from "@/mongoose/models/account";
import { LoginSchema } from "./lib/zod";
import { compareSync } from "bcrypt-ts";

import { ConnectDB, CloseDB } from "./lib/db";

import GitHub from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: { strategy: "jwt" },
  pages: {
    signIn: "/sign",
  },
  providers: [
    GitHub,
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const validated = LoginSchema.safeParse(credentials);

        if (!validated.success) {
          return null;
        }
        await ConnectDB();

        const { email, password } = validated.data;
        const user = await Account.findOne({
          email,
        });

        if (!user || !user.password) {
          throw new Error("Tidak menemukan user");
        }

        const passwordMatch = compareSync(password, user.password);

        if (!passwordMatch) return null;

        await CloseDB();

        return user;
      },
    }),
  ],
  callbacks: {
    async authorized({ auth, request: { nextUrl } }) {
      const isLogin = !!auth?.user;
      const ProtectedRoutes = ["/user"];

      if (!isLogin && ProtectedRoutes.includes(nextUrl.pathname)) {
        return Response.redirect(new URL("/sign", nextUrl));
      }

      if (isLogin && ["/sign"].includes(nextUrl.pathname)) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }
      return true;
    },
    jwt({ token, user }) {
      return {
        ...token,
        ...user,
      };
    },
    async session({ session, token }) {
      session.user.id = token.sub;
      session.user.userID = token?._doc?.userID || token.userID;

      return session;
    },
  },
});
