import { type DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";
import { GitHubProfile } from "next-auth/providers/github";

declare module "next-auth" {
  interface Session {
    handle: any | null;
    user: {
      userID?: string;
    } & DefaultSession["user"];
  }

  interface User {
    userID?: string;
  }
}

declare module "../types.ts" {
  interface Profile extends GitHubProfile {
    email: string;
    name: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    sub: string;
    _doc: User;
  }
}
