import { Box, ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { TSidebarItem } from "../types";

interface ISidebarItemProps {
  item: TSidebarItem;
  sidebarItems: TSidebarItem[];
  setSidebarItems: React.Dispatch<React.SetStateAction<TSidebarItem[]>>;
}

export default function SidebarItem({
  item,
  sidebarItems,
  setSidebarItems,
}: ISidebarItemProps) {
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

  const parseFileName = (name: string) => {
    if (name.replaceAll(" ", "-").toLowerCase() === "home") return "";
    return name.replaceAll(" ", "-").toLowerCase();
  };

  return (
    <div className="flex flex-col items-start">
      {item.subItems ? (
        <>
          {item.isOpen ? (
            <div className="flex flex-col gap-y-2">
              <div
                className="flex items-center hover:text-zinc-600 cursor-pointer"
                onClick={() => handleOpenToggle(item)}
              >
                <ChevronDown className="h-6 w-6" /> {item.title}
              </div>

              <div className="pl-3 mt-2">
                {item.subItems?.map((subItem, subIndex) => (
                  <SidebarItem
                    setSidebarItems={setSidebarItems}
                    sidebarItems={sidebarItems}
                    item={subItem}
                    key={subIndex}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div
              className="flex items-center hover:text-zinc-600 cursor-pointer"
              onClick={() => handleOpenToggle(item)}
            >
              <ChevronRight className="h-6 w-6" /> {item.title}
            </div>
          )}
        </>
      ) : (
        <Link
          className="flex items-center hover:text-zinc-600 cursor-pointer gap-x-2"
          onClick={() => handleOpenToggle(item)}
          href={
            item.tag === "bounty"
              ? `/bounties/${item.url ? item.url : parseFileName(item.title)}`
              : `/${item.url ? item.url : parseFileName(item.title)}`
          }
        >
          <Box className="h-4 w-4" /> {item.title}
        </Link>
      )}
    </div>
  );
}
