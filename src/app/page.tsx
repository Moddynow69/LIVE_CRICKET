"use client";
import { useState, useRef } from "react";

export default function Home() {
  const [source, setSource] = useState("");
  const [value, setValue] = useState("");
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleFullscreen = () => {
    const iframe = iframeRef.current;
    if (iframe) {
      if (iframe.requestFullscreen) iframe.requestFullscreen();
      else if ((iframe as any).webkitRequestFullscreen)
        (iframe as any).webkitRequestFullscreen();
      else if ((iframe as any).mozRequestFullScreen)
        (iframe as any).mozRequestFullScreen();
      else if ((iframe as any).msRequestFullscreen)
        (iframe as any).msRequestFullscreen();
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center flex-col">
      <form className="w-screen h-32 p-2 flex justify-center items-center flex-col gap-2">
        <div className="w-full flex justify-center items-center gap-2 h-full">
          <input
            className="w-1/5 h-full rounded text-black px-2"
            placeholder="//stream.crichd.sc/update/star1hi.php"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            type="submit"
            className="px-3 rounded h-full bg-blue-500"
            onClick={(e) => {
              e.preventDefault();
              setSource(value);
            }}
          >
            Submit
          </button>
          <button
            type="button"
            className="px-3 rounded h-full bg-blue-500"
            onClick={(e) => {
              e.preventDefault();
              handleFullscreen();
            }}
          >
            Fullscreen
          </button>
        </div>
        <div className="w-full flex justify-center items-center gap-2 h-full">
          {[
            {
              label: "Sky sports (English)",
              url: "//stream.crichd.sc/update/skys2.php",
            },
            {
              label: "Star sports (English)",
              url: "//stream.crichd.sc/update/star.php",
            },
            {
              label: "Star sports (Hindi)",
              url: "//stream.crichd.sc/update/star1hi.php",
            },
          ].map(({ label, url }) => (
            <button
              key={label}
              type="button"
              className={`px-3 rounded h-full ${
                source === url ? "bg-green-500" : "bg-slate-500"
              }`}
              onClick={(e) => {
                e.preventDefault();
                setSource(url);
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </form>
      {source === "" ? (
        <div className="h-full animate-pulse flex justify-center items-center text-xl">
          Waiting...
        </div>
      ) : (
        <iframe
          className="border-white border-2"
          src={source}
          width="100%"
          height="100%"
          allow="encrypted-media"
          allowFullScreen
          title="Live Stream"
          ref={iframeRef}
        ></iframe>
      )}
    </div>
  );
}
