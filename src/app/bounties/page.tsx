import { ChevronRightIcon, LinkIcon } from "lucide-react";
import BountiesBreadcrumb from "../components/bountiesBreadcrumb";
import { BsDiscord, BsTwitter } from "react-icons/bs";

export default function Bounties() {
  return (
    <div className="p-16 border-r border-zinc-800 pr-8">
      <BountiesBreadcrumb />

      <div className="mt-16 text-zinc-400 gap-y-8 flex flex-col">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold">Bounties</h1>

          <h2 className="text-xl mt-2">Understand how Sig Bounties work</h2>
        </div>

        <div className="mt-8">
          <h3 className="font-bold text-2xl">Motivation</h3>

          <p className="max-w-5xl mt-2 text-lg">
            We started the Sig Bounties project to help developers from outside
            the company to start contributing to our projects and being
            recognizing for their work. This way, we can discover new talents in
            the community in the same time we pay for their hardworking.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="font-bold text-2xl">How are the bounties chosen?</h3>

          <p className="max-w-5xl mt-2 text-lg">
            The bounties consists in tasks or challenges our teams chose to
            deprioritize in the moment and let some other developer to help us
            with it. The tasks are chosen by the teams and the bounties are
            created for the community. The bounties are also referred into
            github issues, so, each bounty has a github issue associated with
            it.
          </p>

          <div className="mt-2 p-6 bg-zinc-800 rounded-lg w-2/3">
            <h1 className="font-medium">
              Are the challenge too difficult for you?
            </h1>
            <h2 className="font-bold">Learn how to ask, learn in public</h2>

            <div className="mt-4">
              <a
                className="text-sigPrimary font-bold flex items-center gap-x-2"
                href="https://sibelius.github.io/zettelkasten/waiting-somebody"
              >
                <LinkIcon className="h-4 w-4" />
                Waiting for someone (Via Sibelius Zettelkasten)
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-bold text-2xl">How to claim a bounty?</h3>

          <p className="max-w-5xl mt-2 text-lg">
            Once the bounty is finished, add a comment in the github issue with
            details about how you solved the problem and a link to the pull
            request. The bounty will be reviewed and if it&apos;s approved, you
            will receive the bounty reward.
          </p>

          <p className="max-w-5xl mt-2 text-lg">
            You can always talk with me (Igor) in the discord channel if you
            have any questions.
          </p>

          <div className="flex items-center gap-x-8">
            <div className="flex items-center mt-4 text-sigPrimary gap-x-2 font-medium">
              <BsDiscord className="h-6 w-6" /> Sig Community
            </div>

            <a
              href="https://twitter.com/sigcoding"
              className="flex items-center mt-4 text-sigPrimary gap-x-2 font-medium"
            >
              <BsTwitter className="h-6 w-6" /> Sig Twitter
            </a>

            <a
              href="https://twitter.com/ducaswtf"
              className="flex items-center mt-4 text-sigPrimary gap-x-2 font-medium"
            >
              <BsTwitter className="h-6 w-6" /> Duca
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
