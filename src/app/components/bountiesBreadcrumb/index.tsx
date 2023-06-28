"use client";

import { ChevronRightIcon } from "lucide-react";
import { usePathname } from "next/navigation";

export default function BountiesBreadcrumb() {
  const pathname = usePathname();
  const routes = pathname.split("/");

  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="flex items-center gap-x-2">
      {routes.map((route, index) => (
        <>
          {route === "" ? null : (
            <>
              {routes.indexOf(route) === routes.length - 1 ? (
                <span key={index} className="flex text-zinc-500">
                  {capitalize(route.replaceAll("-", " "))}
                </span>
              ) : (
                <div className="flex items-center">
                  <span key={index} className="flex text-zinc-500">
                    {capitalize(route)}
                  </span>
                  <ChevronRightIcon className="h-6 w-6 text-zinc-400" />
                </div>
              )}
            </>
          )}
        </>
      ))}
    </div>
  );
}
