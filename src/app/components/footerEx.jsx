"use client";
import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import siteContent from "../data/siteContent";
import Imagetext from "./imagewithtext";

export default function Footer() {
  const { footer } = siteContent;
  const [email, setEmail] = useState(footer.emailPlaceholder);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="footer px-5  ">
      <div
        id="footer-main"
        className='pt-20 pb-12 relative gap-16   items-start content-center py-8 px-4 mx-auto max-w-screen-xl md:grid md:grid-cols-2 lg:py-16 lg:px-6" '
      ><Imagetext imgSrc={"/jamafnbar_bar_drinks.jpg"} className="opacity-80"/>
        <div className="">
          <h2 className="text-3xl text-accent font-bold sm:text-5xl">
            {footer.subscribeTitle}
          </h2>
          <p className="text-base">{footer.subscribeText}</p>
          <form className="flex flex-col mb-5 " onSubmit={handleSubmit}>
            <label className=" pt-3 text-xs">Your Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              required
              className="block w-full py-3 px-4  bg-transparent    border-black-600 border-b-2 "
              placeholder=""
              disabled
            />
          </form>
        </div>
        
        <div className="md:pl-10">
          <h2 className="text-3xl sm:text-5xl text-accent font-bold">Church Street</h2>
          <p className="mt-3">
            {footer.address.name}
            <br />
            {footer.address.street}
            <br />
            {footer.address.city}
            <br />
            {footer.address.postcode}
            <br />
            <br />
          </p>
          <span className="mt-3">
            <p>Phone</p>
            {footer.phone}
          </span>
          <div className="flex pt-3 justify-start text-center text-accent">
            <Link href={"https://www.instagram.com/jamafnbar"}>
              <FaInstagram className="text-xl mr-5 " />
            </Link>{" "}
          </div>
        </div>


      </div>
      <div
        id="footer-bottom"
        className="border-t-2 w-screen lg:flex text-black bg-brand h-full lg:text-center p-4"
      >
        <div className="text-xs mt-4 flex flex-col lg:flex px-2 gap-1 align-top items-start  justify-center">
          <Link href="#contactus">
            <div className="flex md:px-5 content-center md:align-middle text-accent">
              <h2 className="text-xl text-center font-bold">JAMAF</h2>
              <span className="text-xl font-bold lg:grid p-1 lg:grid-cols-2 ">
                |
              </span>
              <p className="text-xl font-bold">Food & Bar</p>
            </div>
          </Link>
          <p className="">{footer.copyright}</p>
          <span className=""> WhatsApp : {footer.phone} </span>
          <Link href={footer.developerLink} className="">
            {footer.developerText}
          </Link>
          <Link href="/">
            <h2 className="text-xs ">Privacy Policy</h2>{" "}
          </Link>

          <Link href="https://www.originally.black">
            <h2 className="text-sm uppercase pt-2 font-medium text-highlight  ">
              {footer.originallyBlack}
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
