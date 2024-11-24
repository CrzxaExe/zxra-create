import LoginForm from "@/components/auth/loginForm";
import RegisterForm from "@/components/auth/registerForm";
import React from "react";

// import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { GithubLoginButton } from "@/components/auth/authButton";
import SliderSign from "@/components/auth/sliderSign";

const Page = ({ isLogin = false }: { isLogin?: boolean }) => {
  return (
    <div className="w-full bg-base-upfloor/60 backdrop-blur-lg rounded-xl max-w-screen-sm shadow-xl">
      <div className="grid grid-cols-2 gap-5 relative px-4 py-5">
        <SliderSign islogin={isLogin} />
        <div>
          <LoginForm />
          <div className="w-full">
            {/* <OtherLoginButton className="flex flex-row items-center justify-center gap-2">
          <GoogleIcon />
          Google
        </OtherLoginButton> */}

            <GithubLoginButton className="flex flex-row items-center justify-center gap-2">
              <GitHubIcon />
              Github
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
