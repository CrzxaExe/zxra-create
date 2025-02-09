import LoginForm from "@/components/auth/loginForm";
import RegisterForm from "@/components/auth/registerForm";
import React from "react";

import GitHubIcon from "@mui/icons-material/GitHub";
import { GithubLoginButton } from "@/components/auth/authButton";
import SliderSign from "@/components/auth/sliderSign";
import { metadata } from "@/app/layout";

interface PageProps {
  isLoginSection?: boolean;
}

const Page: React.FC<PageProps> = ({ isLoginSection = false }) => {
  metadata.title = "Sign";

  return (
    <div className="w-full bg-base-upfloor/60 backdrop-blur-lg lg:rounded-xl max-w-screen-sm shadow-xl mt-1">
      <div className="grid grid-cols-2 gap-5 relative px-4 py-5">
        <SliderSign isLogin={isLoginSection} />
        <div>
          <LoginForm />
          <div className="w-full">
            <GithubLoginButton className="flex flex-row items-center justify-center gap-2 group transition-all duration-300 ease-in-out">
              <GitHubIcon />
              <span className="group-hover:w-[100%] w-[0%] inline overflow-hidden text-white transition-all duration-300 ease-in-out max-w-fit">
                Github
              </span>
            </GithubLoginButton>
          </div>
        </div>
        <div>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Page;
