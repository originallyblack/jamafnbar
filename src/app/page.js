"use client";
import CardsList from "./components/cardslist";
import Hero from "./components/hero";
import MenuList from "./components/menuList";
import Pdfviewer from "./components/pdf";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-24">
      <Hero />
      <CardsList />
      <div className="my-10">
        <h2 className="text-6xl font-bold text-center">Our Menu</h2>
        <MenuList />
      </div>
      {/* <Pdfviewer /> */}
    </main>
  );
}
