import Link from "next/link";
import Imagetext from "./imagewithtext";
import siteContent from "../data/siteContent";
import Image from "next/image";

export default function Hero() {
  const { hero } = siteContent;

  return (
    <div className="h-[600px] relative  bg-cover bg-origin-border flex flex-col justify-center items-center w-screen ">
      <Imagetext imgSrc={"/menuhero.jpg"} />

      <div className="absolute flex flex-col justify-center items-center">
      <div className=" relative h-40 w-40">
        <Image src="/jamaf_logo.png" alt="jamaffoods" fill  style={{ objectFit: "cover" }}/>
      </div>
        <div className="pb-2  text-center">
          <h1 className="  font-bold text-5xl md:text-6xl text-highlight dark:text-gray-200 ">
            {hero.title}
          </h1>
          <p className="p-3 text-lg text-highlight dark:text-gray-200">{hero.subtitle}</p>
        </div>
      </div>
      <p className=" bg-highlight text-xs px-5 font-bold shadow-sm absolute text-brand dark:text-gray-200 bottom-4">
        {hero.allergyNotice}
      </p>
    </div>
  );
}
