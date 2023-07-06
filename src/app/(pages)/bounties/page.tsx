import { LinkIcon } from "lucide-react";
import { BsDiscord, BsTwitter } from "react-icons/bs";
import Breadcrumb from "../../components/breadcrumb";
import Title from "@/app/components/content/title";
import SubTitle from "@/app/components/content/subTitle";
import Text from "@/app/components/content/text";

export default function Bounties() {
  return (
    <div className="p-16 border-r border-zinc-800 pr-8">
      <Breadcrumb />

      <div className="mt-16 text-zinc-400 gap-y-8 flex flex-col">
        <div className="flex flex-col">
          <Title title="Bounties" />

          <SubTitle subTitle="Understand how Sig Bounties work" />
        </div>

        <div className="mt-8">
          <Title title="Motivation" />

          <Text>
            We started the Sig Bounties project to help developers from outside
            the company to start contributing to our projects and being
            recognizing for their work. This way, we can discover new talents in
            the community in the same time we pay for their hardworking.
          </Text>
        </div>

        <div className="mt-6">
          <Title title="How are the bounties chosen?" />

          <Text>
            The bounties consists in tasks or challenges our teams chose to
            deprioritize in the moment and let some other developer to help us
            with it. The tasks are chosen by the teams and the bounties are
            created for the community. The bounties are also referred into
            github issues, so, each bounty has a github issue associated with
            it.
          </Text>

          <div className="mt-2 p-6 bg-zinc-800 rounded-lg w-2/3">
            <div className="font-bold mb-2">
              <SubTitle subTitle="Are the challenge too difficult for you?" />
            </div>
            <Text>Learn how to ask, learn in public</Text>

            <div className="mt-4">
              <Text>
                <a
                  className="text-sigPrimary font-bold flex items-center gap-x-2"
                  href="https://sibelius.github.io/zettelkasten/waiting-somebody"
                >
                  <LinkIcon className="h-4 w-4" />
                  Waiting for someone (Via Sibelius Zettelkasten)
                </a>
              </Text>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Title title="How to claim a bounty?" />

          <Text>
            Once the bounty is finished, add a comment in the github issue with
            details about how you solved the problem and a link to the pull
            request. The bounty will be reviewed and if it&apos;s approved, you
            will receive the bounty reward.
          </Text>

          <Text>
            You can always talk with me (Igor) in the discord channel if you
            have any questions.
          </Text>

          <div className="flex items-center gap-x-8">
            <Text>
              <a
                href="https://discord.gg/k7tKxaHZBu"
                className="flex items-center mt-4 text-sigPrimary gap-x-2 font-medium"
              >
                <BsDiscord className="h-6 w-6" /> Sig Community
              </a>
            </Text>

            <Text>
              <a
                href="https://twitter.com/sigcoding"
                className="flex items-center mt-4 text-sigPrimary gap-x-2 font-medium"
              >
                <BsTwitter className="h-6 w-6" /> Sig Twitter
              </a>
            </Text>

            <Text>
              <a
                href="https://twitter.com/ducaswtf"
                className="flex items-center mt-4 text-sigPrimary gap-x-2 font-medium"
              >
                <BsTwitter className="h-6 w-6" /> Igor
              </a>
            </Text>

            <Text>
              <a
                href="https://twitter.com/eduardottduca"
                className="flex items-center mt-4 text-sigPrimary gap-x-2 font-medium"
              >
                <BsTwitter className="h-6 w-6" /> Eduardo
              </a>
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
