"use client";
import { useState } from "react";

export default function Home() {
  const [source, setSource] = useState("");
  const [value, setValue] = useState("");
  // const mp =
  return (
    <div className="w-screen h-screen flex justify-center flex-col">
      <form className="w-screen h-32 p-2  flex justify-center items-center flex-col gap-1">
        <div className="w-full h-full flex justify-center items-center  gap-1">
          <input
            className="w-1/5 h-full rounded text-black px-2"
            placeholder="//stream.crichd.sc/update/star1hi.php"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            type="submit"
            className="w-fit px-3 rounded h-full bg-blue-500"
            onClick={(e) => {
              e.preventDefault();
              setSource(value);
            }}
          >
            Submit
          </button>
        </div>
        <div className="w-full h-full flex justify-center items-center  gap-1">
          <button
            type="button"
            className={`w-fit px-3 rounded h-full ${
              source === "//stream.crichd.sc/update/skys2.php"
                ? "bg-green-500"
                : "bg-slate-500"
            }`}
            onClick={(e) => {
              e.preventDefault();
              setSource("//stream.crichd.sc/update/skys2.php");
            }}
          >
            Sky sports (English)
          </button>
          <button
            type="button"
            className={`w-fit px-3 rounded h-full ${
              source === "//stream.crichd.sc/update/star.php"
                ? "bg-green-500"
                : "bg-slate-500"
            }`}
            onClick={(e) => {
              e.preventDefault();
              setSource("//stream.crichd.sc/update/star.php");
            }}
          >
            Star sports (English)
          </button>
          <button
            type="button"
            className={`w-fit px-3 rounded h-full ${
              source === "//stream.crichd.sc/update/star1hi.php"
                ? "bg-green-500"
                : "bg-slate-500"
            }`}
            onClick={(e) => {
              e.preventDefault();
              setSource("//stream.crichd.sc/update/star1hi.php");
            }}
          >
            Star sports (Hindi)
          </button>
        </div>
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
