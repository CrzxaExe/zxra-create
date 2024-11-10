import { TopbarButton } from "./button";
import { Login, Newspaper, PeopleOutline } from "@mui/icons-material";
import UserButton from "./auth/userButton";
import Searchbar from "./items/searchbar";

const TopbarOther = ({
  full,
  session,
}: {
  full: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  session?: any;
}) => {
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
          <>
            <li>
              <TopbarButton
                href="/dashboard"
                text="Beranda"
                className="flex flex-row items-center h-full"
              >
                <Newspaper />
              </TopbarButton>
            </li>
            <li>
              <TopbarButton
                href="/about"
                text="Tentang"
                className="flex flex-row items-center h-full"
              >
                <PeopleOutline />
              </TopbarButton>
            </li>
            <li className="flex items-center">
              <Searchbar />
            </li>
          </>
        )}
        <UserButton session={session} />
      </ul>
    </div>
  );
};

export default TopbarOther;
