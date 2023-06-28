"use client";

import {
  Box,
  ChevronDown,
  ChevronRight,
  ChevronRightIcon,
  FileIcon,
} from "lucide-react";
import { useState } from "react";
import SidebarItem from "./sidebarItem";

interface ISidebarItem {
  title: string;
  isOpen?: boolean;
  subItems?: ISidebarItem[];
}

const defaultItems: ISidebarItem[] = [
  {
    title: "Home",
    isOpen: false,
  },
  {
    title: "Bounties",
    isOpen: false,
    subItems: [
      {
        title: "Translation",
        isOpen: false,
        subItems: [
          {
            title: "i18n",
            isOpen: false,
          },
        ],
      },
    ],
  },
];

export default function BountiesSidebar() {
  const [sidebarItems, setSidebarItems] =
    useState<ISidebarItem[]>(defaultItems);

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
