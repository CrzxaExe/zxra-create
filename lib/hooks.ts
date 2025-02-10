import { useState } from "react";

export const SignState = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  return { isLogin, setIsLogin };
};
