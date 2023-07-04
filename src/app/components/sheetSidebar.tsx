"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import SidebarItem from "./sidebarItem";
import { TSidebarItem } from "../types";
import { navigationItems } from "@/lib/navigation";

export default function SheetSidebar() {
  const [sidebarItems, setSidebarItems] =
    useState<TSidebarItem[]>(navigationItems);

  const handleOpenToggle = (item: TSidebarItem) => {
    const newSidebarItems = sidebarItems.map((i) => {
      if (i.title === item.title) {
        return {
          ...i,
          isOpen: !i.isOpen,
        };
      } else {
        if (i.subItems) {
          return {
            ...i,
            subItems: i.subItems.map((si) => {
              if (si.title === item.title) {
                return {
                  ...si,
                  isOpen: !si.isOpen,
                };
              } else {
                return si;
              }
            }),
          };
        } else {
          return i;
        }
      }
    });

    setSidebarItems(newSidebarItems);
  };

  return (
    <Sheet>
      <SheetTrigger className="bg-inherit">
        <Menu className="h-6 w-6 text-zinc-500" />
      </SheetTrigger>
      <SheetContent className="bg-black text-zinc-400">
        <>
          {sidebarItems.map((item, index) => (
            <div className="gap-x-2 py-2" key={index}>
              <SidebarItem
                setSidebarItems={setSidebarItems}
                sidebarItems={sidebarItems}
                item={item}
              />
            </div>
          ))}
        </>
      </SheetContent>
    </Sheet>
  );
}
