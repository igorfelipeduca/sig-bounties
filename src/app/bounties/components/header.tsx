import Image from "next/image";
import Branches from "../../assets/sig-branches.png";
import Link from "next/link";
import { Menu } from "lucide-react";
import SheetSidebar from "./sheetSidebar";

export default function BountiesHeader() {
  return (
    <>
      <div className="hidden sm:block">
        <div className="py-6 px-16 bg-zinc-900 border-b border-b-zinc-700 text-zinc-300 flex justify-between items-center">
          <Link href="/">
            <Image src={Branches} className="h-12 w-12" alt="Sig Branches" />
          </Link>

          <div className="grid grid-cols-2 gap-x-8">
            <span className="text-lg hover:text-sigPrimary hover:underline cursor-pointer">
              Contact
            </span>
            <span className="text-lg hover:text-sigPrimary hover:underline cursor-pointer">
              Discord
            </span>
          </div>
        </div>
      </div>

      <div className="sm:hidden block">
        <div className="py-6 px-16 bg-zinc-900 border-b border-b-zinc-700 text-zinc-300 flex justify-between items-center">
          <Link href="/">
            <Image src={Branches} className="h-8 w-8" alt="Sig Branches" />
          </Link>

          <div className="grid grid-cols-2 gap-x-4">
            <span className="text-sm hover:text-sigPrimary hover:underline cursor-pointer">
              Contact
            </span>
            <a
              href="https://discord.gg/k7tKxaHZBu"
              className="text-sm hover:text-sigPrimary hover:underline cursor-pointer"
            >
              Discord
            </a>
          </div>

          <SheetSidebar />
        </div>
      </div>
    </>
  );
}
