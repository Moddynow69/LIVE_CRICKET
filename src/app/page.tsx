"use client";
import { useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState("English");
  return (
    <div className="w-screen h-screen flex justify-center flex-col">
      <div className="w-screen h-20  flex justify-center flex-row gap-10">
        <div className="w-40 h-auto flex justify-center items-center text-4xl hover:text-5xl" onClick={()=>setLanguage("English")}>English</div>
        <div className="w-40 h-auto flex justify-center items-center text-4xl hover:text-5xl" onClick={()=>setLanguage("Hondi")}>Hindi</div>
      </div>
      <iframe
        src={
          language === "English"
            ? "//stream.crichd.vip/update/skys2.php"
            : "//stream.crichd.vip/update/star1hi.php"
        }
        width="100%"
        height="100%"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
}
