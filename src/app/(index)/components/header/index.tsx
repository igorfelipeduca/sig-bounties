import Image from "next/image";

import Sig from "../../../assets/sig.png";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="block sm:hidden py-16 px-8">
        <div className="flex justify-between items-center">
          <Image src={Sig} alt="Sig Coding" className="h-16 w-16" />

          <div className="grid grid-cols-3 gap-x-4">
            <span className="text-md cursor-pointer text-zinc-200 hover:text-sigPrimary hover:underline">
              Discord
            </span>
            <span className="text-md cursor-pointer text-zinc-200 hover:text-sigPrimary hover:underline">
              Contact
            </span>
            <Link
              className="text-md cursor-pointer text-zinc-200 hover:text-sigPrimary hover:underline"
              href={"/bounties"}
            >
              Bounties
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden sm:block px-64 py-16">
        <div className="flex justify-between items-center">
          <Image src={Sig} alt="Sig Coding" className="h-24 w-24" />

          <div className="grid grid-cols-3 gap-x-4">
            <span className="text-md cursor-pointer text-zinc-200 hover:text-sigPrimary hover:underline">
              Discord
            </span>
            <span className="text-md cursor-pointer text-zinc-200 hover:text-sigPrimary hover:underline">
              Contact
            </span>
            <Link
              href={"/bounties"}
              className="text-md cursor-pointer text-zinc-200 hover:text-sigPrimary hover:underline"
            >
              Bounties
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
