import Image from "next/image";

import Sig from "../../../assets/sig.png";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="block sm:hidden py-16 px-8">
        <div className="flex justify-between items-center">
          <Image src={Sig} alt="Sig Coding" className="h-10 w-10" />

          <div className="flex items-center gap-x-4">
            <a
              href="https://discord.gg/k7tKxaHZBu"
              className="text-sm cursor-pointer text-zinc-200 hover:text-sigPrimary hover:underline"
            >
              Discord
            </a>
            <Link
              className="text-sm  cursor-pointer text-zinc-200 hover:text-sigPrimary hover:underline"
              href={"/bounties"}
            >
              Content
            </Link>
            <Link
              className="text-sm  cursor-pointer text-zinc-200 hover:text-sigPrimary hover:underline"
              href={"/about-us"}
            >
              About Us
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden sm:block px-64 py-16">
        <div className="flex justify-between items-center">
          <Image src={Sig} alt="Sig Coding" className="h-24 w-24" />

          <div className="grid grid-cols-4 gap-x-4">
            <span className="text-md cursor-pointer text-zinc-200 hover:text-sigPrimary hover:underline">
              Discord
            </span>
            <Link
              href={"/content"}
              className="text-md cursor-pointer text-zinc-200 hover:text-sigPrimary hover:underline"
            >
              Content
            </Link>
            <Link
              className="text-md cursor-pointer text-zinc-200 hover:text-sigPrimary hover:underline"
              href={"/about-us"}
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
