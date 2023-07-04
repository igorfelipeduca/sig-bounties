import Image from "next/image";
import Branches from "../assets/sig-branches.png";
import {
  CalendarIcon,
  ClockIcon,
  FileIcon,
  LeafIcon,
  MedalIcon,
  HardHatIcon,
} from "lucide-react";
import ContributorTag from "../components/contributorTag";
import { BsStopwatch } from "react-icons/bs";
import Seraphini from "../assets/partners/seraphini.png";
import Migranti from "../assets/partners/migranti.png";
import Gamba from "../assets/partners/gamba.png";
import Fros from "../assets/partners/fros.svg";
import Espiral from "../assets/partners/espiral.png";

export default function Home() {
  return (
    <>
      <div className="block sm:hidden">
        <div className="flex flex-col justify-between">
          <div>
            <div className="mt-16 text-2xl w-xl text-white font-bold leading-snug px-4">
              WE BUY{" "}
              <span className="border-b-4 border-sigPrimary hover:border-none hover:bg-sigPrimary transition-colors ease">
                IDEAS
              </span>
              , AND WE MAKE{" "}
              <span className="border-b-4 border-sigPrimary hover:border-none hover:bg-sigPrimary transition-colors ease">
                RESULTS
              </span>{" "}
              HAPPEN.
            </div>

            <div className="mt-16 border-t border-zinc-800 text-zinc-400 px-4 font-light w-xl flex justify-between py-8 text-xs">
              <h1 className="cursor-pointer hover:border-b hover:border-b-sigPrimary hover:text-sig-primary">
                JOIN THE TEAM
              </h1>

              <h1 className="cursor-pointer hover:border-b hover:border-b-sigPrimary hover:text-sig-primary">
                POWER YOUR IDEA
              </h1>
            </div>
          </div>

          <div className="flex justify-center mt-16">
            <div className="rounded-2xl">
              <Image src={Branches} alt="Sig Branches" />
            </div>
          </div>

          {/* parceiros */}
          <div className="justify-center mt-16 w-screen">
            <h1 className="text-xl text-white text-center">Trusted by</h1>
          </div>

          <div className="justify-center w-screen">
            <div className="mt-8 flex gap-x-12 items-center justify-center">
              <a
                href="https://www.gamba.org.br/"
                target="_blank"
                className="w-fit"
              >
                <Image src={Gamba} alt="Gamba" className="h-16 w-16 m-0" />
              </a>
              <a
                href="https://www.espiralds.com/"
                target="_blank"
                className="w-fit"
              >
                <Image src={Espiral} alt="Espiral" className="h-16 w-16 m-0" />
              </a>
              <a
                href="https://sibelius.github.io/zettelkasten/"
                target="_blank"
                className="w-fit"
              >
                <Image
                  src={Seraphini}
                  alt="Seraphini"
                  className="h-auto w-16 m-0"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="ml-8 mt-4 flex gap-x-2">
            <a href="https://fros.dev/" target="_blank" className="w-fit h-fit">
              <Image
                src={Fros}
                alt="Fros"
                className="h-auto w-24 m-0 align-center"
              />
            </a>
            <a
              href="https://instagram.com/migrandoparati.oficial?igshid=YzcxN2Q2NzY0OA=="
              target="_blank"
              className="w-fit h-fit"
            >
              <Image
                src={Migranti}
                alt="Migranti"
                className="h-auto w-36 m-0 align-middle"
              />
            </a>
          </div>
        </div>

        <div className="mt-32 w-screen bg-gray-50">
          <div className="p-16">
            <div className="flex justify-center mb-8">
              <div className="w-32 border-t-2 border-black" />
            </div>

            <div className="flex justify-center">
              <h2 className="text-black font-bold text-2xl">
                How does Sig work?
              </h2>
            </div>

            <div className="mt-0 flex flex-col gap-y-4 justify-center">
              <div className="mt-16 flex justify-center">
                <div className="grid grid-rows-1 gap-x-16 gap-y-8">
                  <div className="bg-gray-50 rounded-2xl border-2 border-zinc-400 h-64 shadow-2xl text-black p-8 max-w-lg hover:border-sigDarker ease-linear transition-all">
                    <div className="flex items-center gap-x-2">
                      <div className="p-2 rounded-xl bg-black h-16 w-16 flex justify-center items-center">
                        <CalendarIcon className="h-8 w-8 text-sigPrimary" />
                      </div>
                      <h1 className="text-xl">Flexible calendar</h1>
                    </div>

                    <p className="mt-4">
                      We have the freedom to work every day we want at SIG, and
                      we enjoy the variety and challenge of our projects.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-2xl border-2 border-zinc-400 h-64 shadow-2xl text-black p-8 max-w-lg hover:border-sigDarker ease-linear transition-all">
                    <div className="flex items-center gap-x-2">
                      <div className="p-2 rounded-xl bg-black h-16 w-16 flex justify-center items-center">
                        <BsStopwatch className="h-8 w-8 text-sigPrimary" />
                      </div>
                      <h1 className=" text-xl">Asynchronous teams</h1>
                    </div>

                    <p className="mt-4 ">
                      We have the freedom to work every day we want at SIG, and
                      we enjoy the variety and challenge of our projects.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-2xl border-2 border-zinc-400 h-64 shadow-2xl text-black p-8 max-w-lg hover:border-sigDarker ease-linear transition-all">
                    <div className="flex items-center gap-x-2">
                      <div className="p-2 rounded-xl bg-black h-16 w-16 flex justify-center items-center">
                        <MedalIcon className="h-8 w-8 text-sigPrimary" />
                      </div>
                      <h1 className=" text-xl">Divided leadership</h1>
                    </div>

                    <p className="mt-4 ">
                      We have the freedom to work every day we want at SIG, and
                      we enjoy the variety and challenge of our projects.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-2xl border-2 border-zinc-400 h-64 shadow-2xl text-black p-8 max-w-lg hover:border-sigDarker ease-linear transition-all">
                    <div className="flex items-center gap-x-2">
                      <div className="p-2 rounded-xl bg-black h-16 w-16 flex justify-center items-center">
                        <LeafIcon className="h-8 w-8 text-sigPrimary" />
                      </div>
                      <h1 className=" text-xl">Sustainable company</h1>
                    </div>

                    <p className="mt-4 ">
                      We have the freedom to work every day we want at SIG, and
                      we enjoy the variety and challenge of our projects.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-2xl border-2 border-zinc-400 h-32 shadow-2xl text-black p-8 max-w-lg hover:border-sigDarker ease-linear transition-all">
                    <div className="flex items-center gap-x-4">
                      <div className="p-2 rounded-xl bg-black h-16 w-16 flex justify-center items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                        >
                          <circle cx="12" cy="12" r="2.197" fill="#00FFC2" />
                          <path
                            fill="#00FFC2"
                            d="M21.63441 6.43671c-.70909-1.22723-2.41155-1.73142-4.79628-1.42354c-.30258.03942-.61354.09379-.92927.15769C15.00856 2.619 13.6066 1 12 1C10.39089 1 8.98713 2.62441 8.087 5.1834c-2.7384-.54268-4.90657-.15669-5.72186 1.25331C1.55256 7.84376 2.2947 9.90626 4.12193 12C2.2947 14.09374 1.55256 16.15624 2.3651 17.56329c.58143 1.00732 1.85 1.49542 3.52453 1.49542a11.47535 11.47535 0 0 0 2.197-.24305C8.98673 21.37518 10.39069 23 12 23c1.60658 0 3.00854-1.619 3.90884-4.17086c.31573.0639.62669.11827.92927.15769a10.18235 10.18235 0 0 0 1.297.088c1.70461 0 2.92647-.52028 3.49932-1.51151c.81254-1.407.07053-3.46955-1.75643-5.56329C21.70494 9.90626 22.447 7.84376 21.63441 6.43671ZM16.9851 6.13956a9.0809 9.0809 0 0 1 1.15965-.08046c1.26048 0 2.14979.32826 2.507.94617c.50426.87335-.06645 2.44138-1.55187 4.16777a20.50554 20.50554 0 0 0-2.30139-1.95281a19.9752 19.9752 0 0 0-.5471-2.93612C16.49539 6.23744 16.7503 6.17013 16.9851 6.13956Zm-3.07236 9.17417c-.64647.37332-1.28408.70346-1.90695.9935c-.63936-.29755-1.2812-.62534-1.919-.9935c-.64888-.37459-1.25525-.76326-1.81959-1.15917c-.06229-.6861-.09688-1.405-.09688-2.15456s.03459-1.46846.09688-2.15456c.56434-.39591 1.17071-.78458 1.81959-1.15917c.63487-.36648 1.27383-.69333 1.91024-.98982c.62668.29132 1.26511.61409 1.91573.98982c.64908.37472 1.25572.76346 1.82019 1.15958c.06222.686.09682 1.40477.09682 2.15415s-.0346 1.46813-.09682 2.15415C15.16846 14.55027 14.56182 14.939 13.91274 15.31373Zm1.628.3351a17.87565 17.87565 0 0 1-.39136 1.82408a18.46424 18.46424 0 0 1-1.76012-.58257c.36293-.18713.72713-.38337 1.092-.594C14.8457 16.086 15.1977 15.86928 15.54078 15.64883Zm-4.92407 1.24372A18.41329 18.41329 0 0 1 8.851 17.474a17.86018 17.86018 0 0 1-.39176-1.82549c.34328.22058.69541.43734 1.06.64787C9.88355 16.50677 10.24989 16.70348 10.61671 16.89255ZM7.07428 13.25036A18.3863 18.3863 0 0 1 5.67548 12a18.38878 18.38878 0 0 1 1.3988-1.25043c-.02005.41033-.03252.82636-.03252 1.25043S7.05423 12.8401 7.07428 13.25036Zm1.385-4.89886a17.86727 17.86727 0 0 1 .391-1.82227a18.22228 18.22228 0 0 1 1.76937.57681c-.36775.18947-.735.38659-1.10031.59759C9.15468 7.91416 8.80255 8.13092 8.45927 8.3515Zm4.93057-1.242a18.48842 18.48842 0 0 1 1.75958-.58237a17.87565 17.87565 0 0 1 .39136 1.82408c-.34308-.22045-.69508-.43715-1.05948-.64754C14.11663 7.4931 13.75263 7.29652 13.38984 7.10946ZM16.92577 10.75A18.40125 18.40125 0 0 1 18.324 12a18.38809 18.38809 0 0 1-1.39826 1.25c.02-.41013.03251-.826.03251-1.25S16.94581 11.1601 16.92577 10.75ZM12 2.12854c.99773 0 2.05613 1.23433 2.80746 3.31044a20.80159 20.80159 0 0 0-2.8094 1.01141A20.51935 20.51935 0 0 0 9.19055 5.44481C9.94208 3.36508 11.00163 2.12854 12 2.12854ZM3.34774 7.00527c.35133-.60825 1.2519-.93437 2.52043-.93437a10.26212 10.26212 0 0 1 1.88362.20148A19.96778 19.96778 0 0 0 7.20147 9.2205a20.48874 20.48874 0 0 0-2.30166 1.95288C3.41412 9.44692 2.84341 7.87869 3.34774 7.00527Zm0 9.98946c-.50433-.87342.06638-2.44165 1.55207-4.16811A20.50145 20.50145 0 0 0 7.20147 14.7795a19.94422 19.94422 0 0 0 .5518 2.95356C5.50578 18.162 3.85468 17.87245 3.34774 16.99473ZM12 21.87146c-.99866 0-2.05847-1.23708-2.81007-3.31775a20.44828 20.44828 0 0 0 2.81155-1.00255a20.80209 20.80209 0 0 0 2.806 1.00979C14.05615 20.63706 12.99775 21.87146 12 21.87146Zm8.65175-4.87673c-.45914.79277-1.79257 1.10923-3.66667.86571c-.2348-.03057-.48971-.09788-.73369-.14455a19.97619 19.97619 0 0 0 .5471-2.93619A20.50419 20.50419 0 0 0 19.0999 12.827C20.58532 14.55335 21.156 16.12138 20.65177 16.99473Z"
                          />
                          <circle cx="-.5" cy="2" r="1.5" fill="#00FFC2">
                            <animateMotion
                              dur="2s"
                              path="M14.75 14.1471C12.2277 15.6034 9.69019 16.4332 7.6407 16.6145C5.54599 16.7998 4.15833 16.3018 3.62324 15.375C3.08815 14.4482 3.35067 12.9974 4.55852 11.276C5.74031 9.59178 7.72768 7.80915 10.25 6.35289C12.7723 4.89662 15.3098 4.06682 17.3593 3.88549C19.454 3.70016 20.8417 4.1982 21.3768 5.125C21.9118 6.0518 21.6493 7.50256 20.4415 9.22397C19.2597 10.9082 17.2723 12.6909 14.75 14.1471Z"
                              repeatCount="indefinite"
                            />
                          </circle>
                        </svg>
                      </div>
                      <h1 className="text-xl">DAO System</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 w-screen bg-black">
          <div className="flex justify-center mb-4">
            <div className="w-32 border-t-2 border-white" />
          </div>

          <div className="flex justify-center">
            <h2 className="text-white font-bold text-2xl">Our manifest</h2>
          </div>

          <a
            href="https://docs.google.com/document/d/e/2PACX-1vT-fsMUlsNqKTBMR1qXZoh3_nLXuGU7o30ROUGJ-NGdvrFaQKMW0cOYyz9GCoVxW_bpkY90MFzOHmHJ/pub"
            target="_blank"
            className="flex justify-center mb-8"
          >
            <div className="mt-8 bg-sigDarker rounded-lg shadow-xl text-white p-6 w-[18rem] flex justify-center">
              <h1 className="text-xl flex items-center justify-center gap-x-4 ">
                <FileIcon className="h-6 w-6" />
                Read our manifest
              </h1>
            </div>
          </a>
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
              , AND WE MAKE{" "}
              <span className="border-b-4 border-sigPrimary hover:border-none hover:bg-sigPrimary transition-colors ease">
                RESULTS
              </span>{" "}
              HAPPEN.
            </div>

            <div className="mt-16 border-t border-zinc-400 text-zinc-400 font-light w-[40rem] flex justify-between py-8">
              <h1 className="cursor-pointer hover:border-b hover:border-b-sigPrimary hover:text-sig-primary">
                JOIN THE TEAM
              </h1>

              <h1 className="cursor-pointer hover:border-b hover:border-b-sigPrimary hover:text-sig-primary">
                POWER YOUR IDEA
              </h1>
            </div>
          </div>

          <div>
            <div className="w-[80rem] ml-24 rounded-2xl">
              <Image src={Branches} alt="Sig Branches" />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16 w-screen">
          <h1 className="text-2xl text-white">Trusted by</h1>
        </div>
        <div className="flex justify-center w-screen ">
          <div className="mt-8 grid grid-cols-5 gap-x-16 items-center">
            <a href="https://www.gamba.org.br/" target="_blank">
              <Image src={Gamba} alt="Gamba" className="h-auto w-24 m-0" />
            </a>
            <a href="https://www.espiralds.com/" target="_blank">
              <Image src={Espiral} alt="Espiral" className="h-auto w-24 m-0" />
            </a>
            <a href="https://sibelius.github.io/zettelkasten/" target="_blank">
              <Image
                src={Seraphini}
                alt="Seraphini"
                className="h-auto w-16 m-0"
              />
            </a>
            <a href="https://fros.dev/" target="_blank">
              <Image src={Fros} alt="Gamba" className="h-auto w-24 m-0" />
            </a>
            <a
              href="https://instagram.com/migrandoparati.oficial?igshid=YzcxN2Q2NzY0OA=="
              target="_blank"
            >
              <Image
                src={Migranti}
                alt="Migranti"
                className="h-auto w-36 m-0"
              />
            </a>
          </div>
        </div>

        <div className="w-screen bg-white mt-32">
          <div className="p-16">
            <div className="flex items-center gap-x-4 mb-8">
              <ContributorTag
                githubUser="igorfelipeduca"
                name="Igor F. Duca"
                twitterUser="ducaswtf"
                contributed="How does Sig work?"
              />

              <ContributorTag
                githubUser="eduardotduca"
                name="Eduardo T. Duca"
                twitterUser="eduardottduca"
                contributed="How does Sig work? / Partners Section / Manifest Section"
              />
            </div>

            <div className="flex justify-center mb-8">
              <div className="w-32 border-t-4 border-black" />
            </div>

            <div className="flex justify-center">
              <h2 className="text-black font-bold text-4xl">
                How does Sig work?
              </h2>
            </div>
            <div className="mt-16 flex justify-center">
              <div className="grid grid-cols-2 gap-x-16 gap-y-8">
                <div className="bg-gray-50 rounded-2xl border-2 border-zinc-400 h-64 shadow-2xl text-black p-8 max-w-lg hover:border-sigDarker ease-linear transition-all">
                  <div className="flex items-center gap-x-2">
                    <div className="p-2 rounded-xl bg-black h-16 w-16 flex justify-center items-center">
                      <CalendarIcon className="h-8 w-8 text-sigPrimary" />
                    </div>
                    <h1 className="text-xl">Flexible calendar</h1>
                  </div>

                  <p className="mt-4">
                    We have the freedom to work every day we want at SIG, and we
                    enjoy the variety and challenge of our projects.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl border-2 border-zinc-400 h-64 shadow-2xl text-black p-8 max-w-lg hover:border-sigDarker ease-linear transition-all">
                  <div className="flex items-center gap-x-2">
                    <div className="p-2 rounded-xl bg-black h-16 w-16 flex justify-center items-center">
                      <BsStopwatch className="h-8 w-8 text-sigPrimary" />
                    </div>
                    <h1 className=" text-xl">Asynchronous teams</h1>
                  </div>

                  <p className="mt-4 ">
                    We have the freedom to work every day we want at SIG, and we
                    enjoy the variety and challenge of our projects.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl border-2 border-zinc-400 h-64 shadow-2xl text-black p-8 max-w-lg hover:border-sigDarker ease-linear transition-all">
                  <div className="flex items-center gap-x-2">
                    <div className="p-2 rounded-xl bg-black h-16 w-16 flex justify-center items-center">
                      <MedalIcon className="h-8 w-8 text-sigPrimary" />
                    </div>
                    <h1 className=" text-xl">Divided leadership</h1>
                  </div>

                  <p className="mt-4 ">
                    We have the freedom to work every day we want at SIG, and we
                    enjoy the variety and challenge of our projects.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl border-2 border-zinc-400 h-64 shadow-2xl text-black p-8 max-w-lg hover:border-sigDarker ease-linear transition-all">
                  <div className="flex items-center gap-x-2">
                    <div className="p-2 rounded-xl bg-black h-16 w-16 flex justify-center items-center">
                      <LeafIcon className="h-8 w-8 text-sigPrimary" />
                    </div>
                    <h1 className=" text-xl">Sustainable company</h1>
                  </div>

                  <p className="mt-4 ">
                    We have the freedom to work every day we want at SIG, and we
                    enjoy the variety and challenge of our projects.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <div className="bg-gray-50 rounded-2xl border-2 border-zinc-400 shadow-2xl text-black p-8 w-1/2 hover:border-sigDarker ease-linear transition-all flex justify-center">
                <div className="flex items-center gap-x-4">
                  <div className="p-2 rounded-xl bg-black h-16 w-16 flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="2.197" fill="#00FFC2" />
                      <path
                        fill="#00FFC2"
                        d="M21.63441 6.43671c-.70909-1.22723-2.41155-1.73142-4.79628-1.42354c-.30258.03942-.61354.09379-.92927.15769C15.00856 2.619 13.6066 1 12 1C10.39089 1 8.98713 2.62441 8.087 5.1834c-2.7384-.54268-4.90657-.15669-5.72186 1.25331C1.55256 7.84376 2.2947 9.90626 4.12193 12C2.2947 14.09374 1.55256 16.15624 2.3651 17.56329c.58143 1.00732 1.85 1.49542 3.52453 1.49542a11.47535 11.47535 0 0 0 2.197-.24305C8.98673 21.37518 10.39069 23 12 23c1.60658 0 3.00854-1.619 3.90884-4.17086c.31573.0639.62669.11827.92927.15769a10.18235 10.18235 0 0 0 1.297.088c1.70461 0 2.92647-.52028 3.49932-1.51151c.81254-1.407.07053-3.46955-1.75643-5.56329C21.70494 9.90626 22.447 7.84376 21.63441 6.43671ZM16.9851 6.13956a9.0809 9.0809 0 0 1 1.15965-.08046c1.26048 0 2.14979.32826 2.507.94617c.50426.87335-.06645 2.44138-1.55187 4.16777a20.50554 20.50554 0 0 0-2.30139-1.95281a19.9752 19.9752 0 0 0-.5471-2.93612C16.49539 6.23744 16.7503 6.17013 16.9851 6.13956Zm-3.07236 9.17417c-.64647.37332-1.28408.70346-1.90695.9935c-.63936-.29755-1.2812-.62534-1.919-.9935c-.64888-.37459-1.25525-.76326-1.81959-1.15917c-.06229-.6861-.09688-1.405-.09688-2.15456s.03459-1.46846.09688-2.15456c.56434-.39591 1.17071-.78458 1.81959-1.15917c.63487-.36648 1.27383-.69333 1.91024-.98982c.62668.29132 1.26511.61409 1.91573.98982c.64908.37472 1.25572.76346 1.82019 1.15958c.06222.686.09682 1.40477.09682 2.15415s-.0346 1.46813-.09682 2.15415C15.16846 14.55027 14.56182 14.939 13.91274 15.31373Zm1.628.3351a17.87565 17.87565 0 0 1-.39136 1.82408a18.46424 18.46424 0 0 1-1.76012-.58257c.36293-.18713.72713-.38337 1.092-.594C14.8457 16.086 15.1977 15.86928 15.54078 15.64883Zm-4.92407 1.24372A18.41329 18.41329 0 0 1 8.851 17.474a17.86018 17.86018 0 0 1-.39176-1.82549c.34328.22058.69541.43734 1.06.64787C9.88355 16.50677 10.24989 16.70348 10.61671 16.89255ZM7.07428 13.25036A18.3863 18.3863 0 0 1 5.67548 12a18.38878 18.38878 0 0 1 1.3988-1.25043c-.02005.41033-.03252.82636-.03252 1.25043S7.05423 12.8401 7.07428 13.25036Zm1.385-4.89886a17.86727 17.86727 0 0 1 .391-1.82227a18.22228 18.22228 0 0 1 1.76937.57681c-.36775.18947-.735.38659-1.10031.59759C9.15468 7.91416 8.80255 8.13092 8.45927 8.3515Zm4.93057-1.242a18.48842 18.48842 0 0 1 1.75958-.58237a17.87565 17.87565 0 0 1 .39136 1.82408c-.34308-.22045-.69508-.43715-1.05948-.64754C14.11663 7.4931 13.75263 7.29652 13.38984 7.10946ZM16.92577 10.75A18.40125 18.40125 0 0 1 18.324 12a18.38809 18.38809 0 0 1-1.39826 1.25c.02-.41013.03251-.826.03251-1.25S16.94581 11.1601 16.92577 10.75ZM12 2.12854c.99773 0 2.05613 1.23433 2.80746 3.31044a20.80159 20.80159 0 0 0-2.8094 1.01141A20.51935 20.51935 0 0 0 9.19055 5.44481C9.94208 3.36508 11.00163 2.12854 12 2.12854ZM3.34774 7.00527c.35133-.60825 1.2519-.93437 2.52043-.93437a10.26212 10.26212 0 0 1 1.88362.20148A19.96778 19.96778 0 0 0 7.20147 9.2205a20.48874 20.48874 0 0 0-2.30166 1.95288C3.41412 9.44692 2.84341 7.87869 3.34774 7.00527Zm0 9.98946c-.50433-.87342.06638-2.44165 1.55207-4.16811A20.50145 20.50145 0 0 0 7.20147 14.7795a19.94422 19.94422 0 0 0 .5518 2.95356C5.50578 18.162 3.85468 17.87245 3.34774 16.99473ZM12 21.87146c-.99866 0-2.05847-1.23708-2.81007-3.31775a20.44828 20.44828 0 0 0 2.81155-1.00255a20.80209 20.80209 0 0 0 2.806 1.00979C14.05615 20.63706 12.99775 21.87146 12 21.87146Zm8.65175-4.87673c-.45914.79277-1.79257 1.10923-3.66667.86571c-.2348-.03057-.48971-.09788-.73369-.14455a19.97619 19.97619 0 0 0 .5471-2.93619A20.50419 20.50419 0 0 0 19.0999 12.827C20.58532 14.55335 21.156 16.12138 20.65177 16.99473Z"
                      />
                      <circle cx="-.5" cy="2" r="1.5" fill="#00FFC2">
                        <animateMotion
                          dur="2s"
                          path="M14.75 14.1471C12.2277 15.6034 9.69019 16.4332 7.6407 16.6145C5.54599 16.7998 4.15833 16.3018 3.62324 15.375C3.08815 14.4482 3.35067 12.9974 4.55852 11.276C5.74031 9.59178 7.72768 7.80915 10.25 6.35289C12.7723 4.89662 15.3098 4.06682 17.3593 3.88549C19.454 3.70016 20.8417 4.1982 21.3768 5.125C21.9118 6.0518 21.6493 7.50256 20.4415 9.22397C19.2597 10.9082 17.2723 12.6909 14.75 14.1471Z"
                          repeatCount="indefinite"
                        />
                      </circle>
                    </svg>
                  </div>
                  <h1 className="text-xl">DAO System</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-32 w-screen bg-black">
          <div className="flex justify-center mb-8">
            <div className="w-32 border-t-4 border-white" />
          </div>
          <div className="text-center justify-center mb-8">
            <h2 className="text-white font-bold text-4xl">Our Manifest</h2>

            <div className="mt-6">
              <h3 className="text-white text-justify pl-[19rem] pr-[19rem] indent-10">
                Sig was founded on a principle: to share knowledge, plant ideas
                and reap results, and above all: to give opportunity to those
                who have not yet been able to be part of the technology market.
              </h3>
              <h3 className="text-white text-justify pl-[19rem] pr-[19rem] indent-10">
                The whole purpose of the company is based on not caring about
                experience or knowledge, but about commitment and proactivity to
                our activities.
              </h3>
              <h3 className="text-white text-justify pl-[19rem] pr-[19rem] indent-10">
                We offer the employees of our initiative an opportunity to start
                being part of the technology market, leaving fictitious projects
                and challenges aside and start producing and being part of
                something much bigger, thus being able to live with other
                developers, attend lectures with people who have already gone
                through the same point where they are today and also have free
                mentoring and consulting, Everything so that your effort is as
                valued as possible.
              </h3>
              <p className="text-white">(...)</p>
            </div>

            <div className="flex justify-center w-screen">
              <a
                href="https://docs.google.com/document/d/e/2PACX-1vT-fsMUlsNqKTBMR1qXZoh3_nLXuGU7o30ROUGJ-NGdvrFaQKMW0cOYyz9GCoVxW_bpkY90MFzOHmHJ/pub"
                target="_blank"
              >
                <div
                  className="
            mt-8 bg-sigDarker rounded-lg shadow-xl text-white p-6 w-[20rem] flex justify-center "
                >
                  <h1 className="text-xl flex items-center justify-center gap-x-4 ">
                    <FileIcon className="h-6 w-6" />
                    Read our manifest
                  </h1>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
