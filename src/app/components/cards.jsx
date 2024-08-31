import Link from "next/link";
import React from "react";

export default function Card({ heading, info, cta }) {
  return (
    <div className=" p-7 max-w-[350px]">
      <div className="flex flex-col">
        <div className="font-extrabold text-3xl"> {heading}</div>
        <div className="py-4"> {info}</div>
        <div>
          <div className="relative">
            <Link
              href={cta.link}
              target="_blank"
              className="bg-accent text-white font-medium w-52 text-center px-4 py-2"
            >
              {cta.text}
            </Link>
            <span className="absolute"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

// #d1a73a
