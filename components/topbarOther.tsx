import React from "react";
import { TopbarButton } from "./button";

import { Login } from "@mui/icons-material";
import { Newspaper } from "@mui/icons-material";
import UserButton from "./auth/userButton";
import { auth } from "@/auth";

const TopbarOther = async ({ full }: { full: boolean }) => {
  const session = await auth();

  return (
    <div className="flex items-center">
      <ul className="flex flex-row gap-2">
        <li>
          {!session && (
            <TopbarButton
              href="/login"
              text="Masuk"
              className="flex flex-row items-center h-full"
            >
              <Login />
            </TopbarButton>
          )}
        </li>
        {full && (
          <li>
            <TopbarButton href="/dashboard" text="Beranda">
              <Newspaper />
            </TopbarButton>
          </li>
        )}
        <UserButton />
      </ul>
    </div>
  );
};

export default TopbarOther;
