import MainComponent from "@/components/gallery/mainComponent";
import React from "react";

const Page = () => {
  const img: Array<string> = [
    "https://raw.githubusercontent.com/CrzxaExe/CrzxaExe/refs/heads/main/asset/Yuri%20Normal%20Ver_20250223183123.png",
    "https://raw.githubusercontent.com/CrzxaExe/CrzxaExe/refs/heads/main/asset/Yuri%20War%20Ver.png",
    "https://raw.githubusercontent.com/CrzxaExe/CrzxaExe/refs/heads/main/asset/0.png",
    "https://raw.githubusercontent.com/CrzxaExe/Better-Zxra-Bedrock/refs/heads/main/Resourcepack/textures/cz/background/1.png",
  ];

  return <MainComponent image={img} />;
};

export default Page;
