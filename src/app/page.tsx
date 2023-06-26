import Image from "next/image";
import Branches from "./assets/sig-branches.png";
import { CalendarIcon, ClockIcon } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="block sm:hidden">
        <div className="flex flex-col justify-between px-8">
          <div>
            <div className="mt-16 text-2xl w-xl text-white font-bold leading-snug">
              WE BUY{" "}
              <span className="border-b-4 border-sigPrimary hover:border-none hover:bg-sigPrimary transition-colors ease">
                IDEAS
              </span>
              , AND WE PAY FOR{" "}
              <span className="border-b-4 border-sigPrimary hover:border-none hover:bg-sigPrimary transition-colors ease">
                RESULTS
              </span>
              .
            </div>

            <div className="mt-16 border-t border-zinc-400 text-zinc-400 font-light w-xl flex justify-between py-8 text-xs">
              <h1 className="cursor-pointer hover:border-b hover:border-b-sigPrimary hover:text-sig-primary">
                BE A PART AS DEVELOPER
              </h1>

              <h1 className="cursor-pointer hover:border-b hover:border-b-sigPrimary hover:text-sig-primary">
                POWER YOUR STARTUP
              </h1>
            </div>
          </div>

          <div className="flex justify-center mt-16">
            <div className="rounded-2xl">
              <Image src={Branches} alt="Sig Branches" />
            </div>
          </div>
        </div>

        <div className="mt-32 w-screen bg-sigPrimary">
          <div className="p-16">
            <div className="flex justify-center mb-8">
              <div className="w-32 border-t-2 border-black" />
            </div>

            <div className="flex justify-center">
              <h2 className="text-black font-bold text-2xl">
                How does Sig work?
              </h2>
            </div>

            <div className="mt-16 flex flex-col gap-y-4 justify-center">
              <p className="max-w-prose font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                error eius perferendis dolores sequi nostrum excepturi, earum
                ullam laboriosam illo, natus possimus temporibus, numquam
                laborum odit sint saepe magnam vel amet similique iure.
              </p>
              <p className="max-w-prose font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                error eius perferendis dolores sequi nostrum excepturi, earum
                ullam laboriosam illo, natus possimus temporibus, numquam
                laborum odit sint saepe magnam vel amet similique iure.
              </p>
              <p className="max-w-prose font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                error eius perferendis dolores sequi nostrum excepturi, earum
                ullam laboriosam illo, natus possimus temporibus, numquam
                laborum odit sint saepe magnam vel amet similique iure.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:block">
        <div className="flex justify-between py-16 px-32">
          <div>
            <div className="mt-32 text-6xl text-white font-bold w-[48rem] leading-snug">
              WE BUY{" "}
              <span className="border-b-4 border-sigPrimary hover:border-none hover:bg-sigPrimary transition-colors ease">
                IDEAS
              </span>
              , AND PAY FOR{" "}
              <span className="border-b-4 border-sigPrimary hover:border-none hover:bg-sigPrimary transition-colors ease">
                RESULTS
              </span>
              .
            </div>

            <div className="mt-16 border-t border-zinc-400 text-zinc-400 font-light w-[40rem] flex justify-between py-8">
              <h1 className="cursor-pointer hover:border-b hover:border-b-sigPrimary hover:text-sig-primary">
                BE A PART AS DEVELOPER
              </h1>

              <h1 className="cursor-pointer hover:border-b hover:border-b-sigPrimary hover:text-sig-primary">
                POWER YOUR STARTUP
              </h1>
            </div>
          </div>

          <div>
            <div className="w-[80rem] ml-24 rounded-2xl">
              <Image src={Branches} alt="Sig Branches" />
            </div>
          </div>
        </div>

        <div className="mt-32 w-screen bg-sigPrimary">
          <div className="p-16">
            <div className="flex justify-center mb-8">
              <div className="w-32 border-t-4 border-black" />
            </div>

            <div className="flex justify-center">
              <h2 className="text-black font-bold text-4xl">
                How does Sig work?
              </h2>
            </div>

            <div className="mt-16">
              <div className="grid grid-cols-2 gap-x-16">
                <div className="bg-black rounded-lg shadow-2xl text-white p-16">
                  <h1 className="text-2xl flex items-center gap-x-4">
                    <CalendarIcon className="h-8 w-8 text-white" />
                    Flexible calendar
                  </h1>
                </div>

                <div className="bg-black rounded-lg shadow-2xl text-white p-16">
                  <h1 className="text-2xl flex items-center gap-x-4">
                    <ClockIcon className="h-8 w-8 text-white" />
                    Asynchronous teams
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
