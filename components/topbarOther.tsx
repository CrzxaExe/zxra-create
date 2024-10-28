import { TopbarButton } from "./button";
import { Login, Newspaper } from "@mui/icons-material";
import UserButton from "./auth/userButton";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TopbarOther = ({ full, session }: { full: boolean; session?: any }) => {
  return (
    <div className="flex items-center">
      <ul className="flex flex-row gap-2">
        <li>
          {!full && (
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
            <TopbarButton
              href="/dashboard"
              text="Beranda"
              className="flex flex-row items-center h-full"
            >
              <Newspaper />
            </TopbarButton>
          </li>
        )}
        <UserButton session={session} />
      </ul>
    </div>
  );
};

export default TopbarOther;
