"use client";
import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("Coming soon...");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="footer px-5 mb-6 ">
      <div
        id="footer-main"
        className='pt-20 pb-12  gap-16 items-start content-center py-8 px-4 mx-auto max-w-screen-xl md:grid md:grid-cols-2 lg:py-16 lg:px-6" '
      >
        <div className="">
          <h2 className="text-3xl text-accent font-bold sm:text-5xl">
            Subscribe
          </h2>
          <p className="text-base">
            Subscribe to our newsletter to stay in touch with the latest.
          </p>
          <form className="flex flex-col mb-5 " onSubmit={handleSubmit}>
            <label className=" pt-3 text-xs">Your work email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              // onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full py-3 px-4  bg-transparent    border-black-600 border-b-2 "
              placeholder=""
              disabled
            />
            {/* <div className=" buttons py-5 mt-3 mb-3">
              <button
                type="submit"
                className=" justify-center text-xs h-9   px-8 mb-5  font-bold rounded-full text-white bg-accent hover:bg-green-600 focus:outline-none focus:ring-accent focus:ring-offset-green-200 active:bg-green-600 transition duration-150 ease-in-out"
              >
                Sign up Now!
              </button>
            </div> */}
          </form>
        </div>

        <div className="md:pl-10">
          <h2 className="text-3xl sm:text-5xl text-accent font-bold">MANC</h2>
          <p className="mt-3">
            {" "}
            Jamaf Food & Bar
            <br />
            27-29, Church Street,
            <br />
            Manchester,
            <br />
            M4 1PE
            <br />
            <br />
          </p>
          <span className="mt-3">
            <p>Phone</p>
            0161 834 5562 | 07759546969
          </span>
          <div className="flex pt-3 justify-start text-center text-accent">
            {/* <Link href={"https://www.facebook.com/"}>
              <FaFacebookF className="text-xl mr-5" />
            </Link>{" "} */}
            <Link href={"https://www.instagram.com/jamafnbar"}>
              <FaInstagram className="text-xl mr-5 " />
            </Link>{" "}
            {/* <Link href={"https://www.tiktok.com/"}>
              <FaTiktok className="text-xl mr-5" />
            </Link> */}
          </div>
        </div>
      </div>
      <div
        id="footer-bottom"
        className="border-t-2 lg:flex text-gray-500 lg:justify-center lg:text-center"
      >
        <div className="text-xs my-4 flex flex-col lg:flex px-2 gap-1 align-top items-start  justify-center">
          <Link href="#contactus">
            <div className="flex md:px-5 content-center md:align-middle text-accent">
              <h2 className="text-xl text-center font-bold">JAMAF</h2>
              <span className="text-xl font-bold lg:grid p-1 lg:grid-cols-2 ">
                |
              </span>
              <p className="text-xl font-bold">Food & Bar</p>
            </div>
          </Link>
          <p className=""> Jamaf Food & Bar © 2024 </p>
          <span className=""> WhatsApp : 07759546969 </span>
          <Link href={"https://zabbu.org/"} className="">
            {" "}
            Developed By Zabbu Marketing{" "}
          </Link>
          <Link href="/">
            <h2 className="text-xs ">Privacy Policy</h2>{" "}
          </Link>

          <Link href="https://www.originally.black">
            <h2 className="text-xs uppercase pt-2  text-white  ">
              www.Originally.Black
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
