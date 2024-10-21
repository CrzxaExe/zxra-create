import LoginForm from "@/components/auth/loginForm";
import React from "react";

import { GithubLoginButton } from "@/components/auth/authButton";

// import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";

import { metadata } from "@/app/layout";

const Page = () => {
  metadata.title = "Login";

  return (
    <div className="block w-full bg-slate-600 px-7 py-6 rounded-xl max-w-screen-md shadow-md">
      <h1 className="text-xl lg:text-2xl text-slate-400 font-bold font-paprika mb-5">
        Masuk
      </h1>
      <LoginForm />

      <div className="w-full">
        {/* <OtherLoginButton className="flex flex-row items-center justify-center gap-2">
          <GoogleIcon />
          Google
        </OtherLoginButton> */}

        <GithubLoginButton className="flex flex-row items-center justify-center gap-2 mt-1">
          <GitHubIcon />
          Github
        </GithubLoginButton>
      </div>
    </div>
  );
};

export default Page;
