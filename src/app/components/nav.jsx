"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaInstagram,
  FaTiktok,
  FaFacebook,
  FaBars,
  FaWindowClose,
} from "react-icons/fa";
export default function Nav() {
  const [navbar, setNavbar] = useState(false);
  const handleNav = () => {
    setNavbar(!navbar);
  };
  const orderlink =
    "https://www.pronto-food-online.com/ordering/restaurant/menu?restaurant_uid=175b2cdb-5680-4673-b025-59f548105410&glfa_cid=1694974390.1601939947&glfa_t=1601940069781";
  const reserveLink =
    "https://www.pronto-food-online.com/ordering/restaurant/menu/reservation?restaurant_uid=175b2cdb-5680-4673-b025-59f548105410&reservation=true&glfa_cid=1277109742.1603227119&glfa_t=1603227121089";
  const menuItems = [
    ["Hq Menu", "/menu"],

    ["Call us", "tel:07759546969"],
    ["About HQ", "/"],
    // ['Order online', orderlink],
    // ['Reserve a table', reserveLink],
  ];
  return (
    <div className="">
      <div className=" overflow-hidden shadow-lg flex flex-row h-[70px] px-6 relative w-screen items-center justify-between ">
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
          className=" h-[55px] w-[55px]  items-center flex justify-center text-2xl relative"
        >
          {navbar == false ? (
            <FaBars className="hover:text-green-500" />
          ) : (
            <FaWindowClose className="hover:text-red-500" />
          )}
        </div>
      </div>
      {navbar && (
        <div
          id="menu"
          className=" absolute top-[72px]  rounded-md bg-black  w-screen shadow-sm flex max-w-[660px] h-[460px] flex-col items-start z-20"
        >
          <div className="p-4 mt-4  flex flex-col gap-3 font-bold justify-center ">
            {menuItems.map(([text, url], i) => (
              <Link
                onClick={handleNav}
                key={i}
                href={url}
                className="hover:text-green-400 focus:underline underline-offset-8 px-2 text-lg uppercase "
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
              href={reserveLink}
              target="_blank"
              className=" hover:font-semibold px-4 py-2 mt-1 bg-green-500 rounded-md uppercase "
            >
              {" "}
              Reserve a table
            </Link>
            <div className="flex flex-row text-2xl p-4 gap-4 ">
              <Link
                onClick={handleNav}
                className=""
                href={"https://www.facebook.com/hqmanchester"}
                target="_blank"
              >
                <FaFacebook />
              </Link>
              <Link
                onClick={handleNav}
                href={"https://www.instagram.com/hqmanchester/"}
                target="_blank"
              >
                <FaInstagram />
              </Link>
              <Link
                onClick={handleNav}
                href={"https://www.tiktok.com/@hqmanchester/"}
                target="_blank"
              >
                <FaTiktok />
              </Link>
            </div>
            <span className="px-2 text-sm  gap-2 flex flex-col">
              {" "}
              <p className="font-light">Opening Hours</p> <p>Monday - Sunday</p>
              <p>4pm - 11pm</p>
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
