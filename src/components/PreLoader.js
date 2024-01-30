"use client";

import { preLoaderAnim } from "@/library/animations";
import { useEffect } from "react";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader h-full md:h-screen bg-gradient-to-r from-g-850k-green to-g-850k-blue w-full fixed z-50 flex items-center justify-center text-white overflow-hidden bottom-0 inset-x-0">
      <div className="texts-container flex items-center justify-between h-[60px] w-[280px] text-xl overflow-hidden font-extrabold opacity-0">
        <span>Zadez !</span>
        <span>Make,</span>
        <span>Life,</span>
        <span>Easier.</span>
      </div>
    </div>
  );
};

export default PreLoader;
