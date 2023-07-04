import { LinkIcon } from "lucide-react";
import Breadcrumb from "../../components/breadcrumb";
import Link from "next/link";
import Title from "@/app/components/content/title";
import SubTitle from "@/app/components/content/subTitle";
import Text from "@/app/components/content/text";

export default function AboutUs() {
  return (
    <div className="p-6 sm:p-16 border-r border-zinc-800 pr-8">
      <Breadcrumb />

      <div className="mt-16 text-zinc-400 gap-y-8 flex flex-col">
        <div className="flex flex-col">
          <Title title="About Us" />

          <SubTitle subTitle="Learn more about us" />
        </div>

        <div className="mt-6">
          <Title title="What is Sig?" />

          <Text>
            Sig is, first things first, a community. We are a DAO company
            specialized in SaaS production. Powered by sustanability and ESG
            principles, we are a company that believes in the power of
            technology to change the world. If you think you can make the
            difference, we are sure that you have a place in here.
          </Text>
        </div>

        <div className="mt-8">
          <Title title="Motivation" />

          <Text>
            Sig was created after a principle that is: Big companies are
            throwing away new talents that are not able to get a job because
            they don&apos;t have experience. We believe that the best way to
            learn is by doing, and we want to help you to get experience by
            doing real projects. Juniors are{" "}
            <span className="text-sigPrimary">dreamers</span>, and we help their
            dreams come true.
          </Text>
        </div>

        <div className="mt-6">
          <Title title="Our purpose" />

          <Text>
            {" "}
            Tech must help the world to be a better place. We want to be a{" "}
            <span className="text-sigPrimary">ESG</span> company that helps the
            environemnt through software. We are partners of an NGO called{" "}
            <span className="text-sigPrimary">
              Gamba (Grupo Ambiental da Bahia)
            </span>{" "}
            and one of Sig&apos;s modules is based in building sustainable
            technology to help poor comunities and the environment.
          </Text>

          <Text>
            Sig&apos;s purpose is to make developers recognize that their work
            can really make a difference, and, what about start being someone
            that helps the environment through{" "}
            <span className="text-sigPrimary">passion</span> and{" "}
            <span className="text-sigPrimary">code</span>.
          </Text>

          <Link
            href={"/sig-gamba"}
            className="max-w-5xl mt-2 text-sm sm:text-lg text-sigPrimary flex items-center gap-x-2"
          >
            <LinkIcon className="h-4 w-4 sm:h-6 sm:w-6" />
            Learn more about our project
          </Link>
        </div>

        <div className="mt-6">
          <Title title="How to be a part" />

          <Text>
            As a community, we are always looking for new talents to join us. If
            you are interested in solving challenges and creating inovative
            products with other developers in a horizontal company, you are in
            the right place. To be a part of Sig Community, you must enter in
            our{" "}
            <a href="" className="text-sigPrimary">
              Discord Server
            </a>{" "}
            and meet the developers, designers, QAs, PMs and other techonlogy
            passionates that are part of our community.
          </Text>

          <Text>
            To start contributing, you must take a look at our bounties system,
            it will be available in this website{" "}
            <span className="text-sigPrimary">soon</span> and it is already
            working at our Discord.
          </Text>
        </div>

        <div className="mt-6">
          <Title title="Follow us" />

          <div className="flex gap-x-4 items-center sm:gap-x-8">
            <a
              href="https://instagram.com/sigcoding"
              className="flex items-center gap-x-2 text-sigPrimary text-md sm:text-xl mt-2"
            >
              <LinkIcon className="h-4 w-4 sm:h-6 sm:w-6" />
              Instagram
            </a>

            <a
              href="https://twitter.com/sigcoding"
              className="flex items-center gap-x-2 text-sigPrimary text-md sm:text-xl mt-2"
            >
              <LinkIcon className="h-4 w-4 sm:h-6 sm:w-6" />
              Twitter
            </a>

            <a
              href="https://www.linkedin.com/company/sigcoding"
              className="flex items-center gap-x-2 text-sigPrimary text-md sm:text-xl mt-2"
            >
              <LinkIcon className="h-4 w-4 sm:h-6 sm:w-6" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
