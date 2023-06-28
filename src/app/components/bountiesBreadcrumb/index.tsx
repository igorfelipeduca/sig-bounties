"use client";

import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BountiesBreadcrumb() {
  const pathname = usePathname();
  const routes = pathname.split("/");

  return (
    <div className="flex items-center">
      {routes.map((route, index) => (
        <>
          {route === "" ? null : (
            <>
              {routes.indexOf(route) === routes.length - 1 ? (
                <Link
                  href={`/bounties/${route}`}
                  key={index}
                  className="flex text-zinc-400 capitalize hover:text-zinc-300"
                >
                  {route.replaceAll("-", " ")}
                </Link>
              ) : (
                <div className="flex items-center capitalize" key={index}>
                  <Link
                    href={`/bounties`}
                    className="flex text-zinc-500 hover:text-zinc-300"
                  >
                    {route}
                  </Link>
                  <ChevronRightIcon className="h-6 w-6 text-zinc-400 " />
                </div>
              )}
            </>
          )}
        </>
      ))}
    </div>
  );
}
