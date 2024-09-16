"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaInstagram,
  FaBars,
  FaWindowClose,
} from "react-icons/fa";
import siteContent from "../data/siteContent";

export default function Nav() {
  const [navbar, setNavbar] = useState(false);
  const { nav } = siteContent;

  const number = 447934057775;
  const waText = nav.whatsAppText;
  const whatsAppUrl = `https://wa.me/${number}?text=${encodeURIComponent(
    waText
  )}`;

  const handleNav = () => {
    setNavbar(!navbar);
  };

  const menuItems = nav.menuItems;

  return (
    <div className="">
      <div className=" overflow-hidden shadow-lg flex bg-brand flex-row h-[70px] px-6 relative w-screen items-center justify-between ">
        <Link href={"/"} className=" h-[55px] w-[55px] relative">
          <Image
            src="/jamaf_logo.png"
            fill
            sizes="55px"
            style={{ objectFit: "cover" }}
            alt="Picture of the author"
          />
        </Link>
        {/* <Link
          href={orderlink}
          target="_blank"
          className=" bg-red-600 absolute font-bold right-24 w-44  uppercase text-center px-4 py-1 rounded-sm"
        >
          {" "}
          Order online
        </Link> */}
        <div></div>
        <div
          onClick={handleNav}
          className=" h-[55px] w-[55px]  items-center  flex justify-center text-2xl relative"
        >
          {navbar == false ? (
            <FaBars className="hover:text-accent bg-highlight p-1 text-accent" />
          ) : (
            <FaWindowClose className="hover:text-red-500" />
          )}
        </div>
      </div>
      {navbar && (
        <div
          id="menu"
          className=" absolute top-[72px]  rounded-md bg-highlight  w-screen shadow-sm flex max-w-[660px] h-[460px] flex-col items-start z-20"
        >
          <div className="p-4 mt-4  flex flex-col gap-3 font-bold justify-center ">
            {menuItems.map(([text, url], i) => (
              <Link
                onClick={handleNav}
                key={i}
                href={url}
                className="hover:text-red-500 text-accent  focus:underline underline-offset-8 px-2 text-lg uppercase "
              >
                {" "}
                {text}
              </Link>
            ))}
            {/* <Link
              onClick={handleNav}
              href={orderlink}
              target="_blank"
              className="px-4 py-2 hover:font-semibold bg-red-600 rounded-sm  uppercase "
            >
              {" "}
              Order online
            </Link> */}
            <Link
              onClick={handleNav}
              href={whatsAppUrl}
              target="_blank"
              className="hover:font-semibold px-4 py-2 mt-1 hover:text-red-500 bg-brand text-highlight rounded-md uppercase "
            >
              Contact Us
            </Link>
            <div className="flex flex-row text-2xl p-4 gap-4 ">
              {/* <Link
                onClick={handleNav}
                className=""
                href={"https://www.facebook.com/"}
                target="_blank"
              >
                <FaFacebook />
              </Link> */}
              <Link
                onClick={handleNav}
                href={"https://www.instagram.com/jamafnbar"}
                target="_blank"
              >
                <FaInstagram />
              </Link>
              {/* <Link
                onClick={handleNav}
                href={"https://www.tiktok.com/"}
                target="_blank"
              >
                <FaTiktok />
              </Link> */}
            </div>
            <span className="px-2 text-sm  gap-2 flex flex-col">
              {" "}
              <p className="font-light">Opening Hours</p> <p>Monday - Sunday</p>
              <p>9:30am - 6pm</p>
            </span>
          </div>
          <span
            onClick={handleNav}
            className="text-white absolute text-xs  cursor-pointer top-5 right-12"
          >
            Close
          </span>
        </div>
      )}
    </div>
  );
}
