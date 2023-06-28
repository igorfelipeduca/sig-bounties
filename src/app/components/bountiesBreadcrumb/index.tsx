"use client";

import { ChevronRightIcon } from "lucide-react";
import { usePathname } from "next/navigation";

export default function BountiesBreadcrumb() {
  const pathname = usePathname();
  const routes = pathname.split("/");

  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return routes.map((route, index) => {
    if (route === "") {
      return null;
    }

    if (index === routes.length - 1) {
      return (
        <span key={index} className="flex text-zinc-500">
          {capitalize(route)}{" "}
          <ChevronRightIcon className="h-6 w-6 text-zinc-400" /> Home
        </span>
      );
    }

    return (
      <span key={index} className="flex text-zinc-500">
        {route} <ChevronRightIcon className="h-6 w-6 text-zinc-400" />
      </span>
    );
  });
}
