import { Suspense } from "react";
import MenuListContent from "./MenuListContent";

const MenuList = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MenuListContent />
    </Suspense>
  );
};

export default MenuList;
