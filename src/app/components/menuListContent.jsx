"use client";
import React, { useState, useEffect, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import menuData from "../data/menu";
import MenuSection from "./menuSection";

const MenuListContent = () => {
  const [activeTab, setActiveTab] = useState("mainDishes");
  const tabs = Object.keys(menuData);
  const tabsRef = useRef(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && tabs.includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams, tabs]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    router.push(`?tab=${tab}`, { scroll: false });
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="relative">
        <div
          ref={tabsRef}
          className="flex overflow-x-auto scrollbar-hide space-x-1 mb-6 pb-2"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`font-medium px-4 py-2 transition-colors whitespace-nowrap ${
                activeTab === tab
                  ? "bg-brand text-white"
                  : " text-white hover:bg-brand"
              }`}
            >
              {menuData[tab].title}
            </button>
          ))}
        </div>
      </div>
      {tabs.map(
        (tab) =>
          activeTab === tab && (
            <MenuSection
              key={tab}
              title={menuData[tab].title}
              items={menuData[tab].items}
              description={menuData[tab].description}
              price={menuData[tab].price}
            />
          )
      )}
    </div>
  );
};

export default MenuListContent;
