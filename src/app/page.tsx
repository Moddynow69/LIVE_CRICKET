"use client";
import { useState } from "react";

export default function Home() {
  const [source, setSource] = useState("");
  const [value, setValue] = useState("");
  return (
    <div className="w-screen h-screen flex justify-center flex-col">
      <form className="w-screen h-16 p-2  flex justify-center items-center flex-row gap-10">
        <input
          className="w-1/5 h-full rounded text-black px-2"
          placeholder="//stream.crichd.sc/update/star1hi.php"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="submit"
          className="w-fit px-3 rounded h-full bg-slate-500"
          onClick={(e) => {
            e.preventDefault();
            setSource(value);
          }}
        >
          Submit
        </button>
      </form>
      {source === "" ? (
        <div className="h-full animate-pulse">Waiting..........</div>
      ) : (
        <iframe
          className="border-white border-2"
          src={source}
          width="100%"
          height="100%"
          allow="encrypted-media"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}
