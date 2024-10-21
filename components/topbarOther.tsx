import React from "react";
import { TopbarButton } from "./button";

import { Login } from "@mui/icons-material";
import { Newspaper } from "@mui/icons-material";
import UserButton from "./auth/userButton";

const TopbarOther = ({ full }: { full: boolean }) => {
  return (
    <div className="flex items-center">
      <ul className="flex flex-row gap-2">
        <li>
          <TopbarButton
            href="/login"
            text="Masuk"
            className="flex flex-row items-center h-full"
          >
            <Login />
          </TopbarButton>
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
