"use client";
import CardsList from "./components/cardslist";
import Hero from "./components/hero";
import Imagetext from "./components/imagewithtext";
import MenuList from "./components/menuList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-24">
      <Hero />

      <div className="mt-4 py-4 md:flex-row flex flex-col-reverse justify-center items-center" >
        <div><h2 className="text-6xl font-bold text-center my-10 text-highlight dark:text-gray-200">Our Menu</h2>
        <MenuList />
        </div>
        <video className="p-4" width="380px" height="720px" preload="auto" poster={"/jamaf_logo.png"}  controls >
                <source src="/welcome.MOV" />
                videoPlayer</video>
      </div>
      <CardsList />     
      {/* <Pdfviewer /> */}
    </main>
  );
}
