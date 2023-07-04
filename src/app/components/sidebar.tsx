"use client";
import { useState } from "react";
import SidebarItem from "../components/sidebarItem";
import { TSidebarItem } from "../types";
import { navigationItems } from "@/lib/navigation";

export default function Sidebar() {
  const [sidebarItems, setSidebarItems] =
    useState<TSidebarItem[]>(navigationItems);

  return (
    <div className="w-[20rem] h-screen border-l border-zinc-800 bg-zinc-900/40 text-zinc-400 p-8">
      {sidebarItems.map((item, index) => (
        <div className="gap-x-2 py-2" key={index}>
          <SidebarItem
            setSidebarItems={setSidebarItems}
            sidebarItems={sidebarItems}
            item={item}
          />
        </div>
      ))}
    </div>
  );
}
