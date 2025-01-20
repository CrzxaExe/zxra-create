"use server";
import { redirect } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SearchEvent = (value: string) => {
  redirect("/search/?value=" + value);
};

export default SearchEvent;
