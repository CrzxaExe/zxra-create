"use client";

import { useState } from "react";

function WeaponInput(test: string) {
  console.log(test || "test");
  const [weaponFilter, setWeaponFilter] = useState<string>("");
  return { weaponFilter, setWeaponFilter };
}
const SignState = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  return { isLogin, setIsLogin };
};

export { WeaponInput, SignState };
