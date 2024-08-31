import React from "react";
import Grid from "../components/grid";
import Menubar from "../components/menubar";
import MenuList from "../components/menuList";

export default function page() {
  return (
    <div className="max-w-[100vw] min-h-[50svh]">
      <MenuList />
    </div>
  );
}
