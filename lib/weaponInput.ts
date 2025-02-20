"use client";

import { useState } from "react";

export default function useWeaponInput() {
  const [wFilter, setWeaponFilter] = useState<string>("");
  return { weaponFilter: wFilter, setWeaponFilter };
}
