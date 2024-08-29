"use client";
import CardsList from "./components/cardslist";
import Hero from "./components/hero";
import Pdfviewer from "./components/pdf";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-24">
      <Hero />
      <CardsList />
      {/* <Pdfviewer /> */}
    </main>
  );
}
