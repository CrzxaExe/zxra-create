import { TopbarButton } from "./button";
import { LoginRounded, SearchRounded } from "@mui/icons-material";
import UserButton from "./auth/userButton";
import Link from "next/link";

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
      <ul className="flex flex-row gap-3 items-center">
        <li className="block md:hidden">
          <Link href="/search" className="flex justify-center items-center">
            <SearchRounded />
          </Link>
        </li>
        <li>
          {!full && (
            <TopbarButton
              href="/sign"
              text="Masuk"
              className="bg-base-upascent hover:bg-base-ascent border-[1px] border-base-upascent text-base-floor hover:text-base-upascent rounded-lg py-1 px-1 lg:px-3 font-semibold"
            >
              <LoginRounded className="self-center -mt-1" />
            </TopbarButton>
          )}
        </li>
        <UserButton session={session} />
      </ul>
    </div>
  );
};

export default TopbarOther;
