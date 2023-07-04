import { Info, InstagramIcon, LinkIcon } from "lucide-react";
import { BsDiscord, BsLinkedin, BsTwitter } from "react-icons/bs";
import Title from "@/app/components/content/title";
import Breadcrumb from "../../components/breadcrumb";
import SubTitle from "@/app/components/content/subTitle";
import Text from "@/app/components/content/text";

export default function Content() {
  return (
    <div className="p-6 sm:p-16 border-r border-zinc-800 pr-8">
      <Breadcrumb />

      <div className="mt-16 text-zinc-400 gap-y-8 flex flex-col">
        <div className="flex flex-col">
          <Title title="Content" />

          <SubTitle subTitle="Let's take a look into our content" />
        </div>

        <div className="mt-8">
          <div className="flex items-center gap-x-2">
            <Title title="Navigation" />
            <Info className="h-6 w-6 text-sigPrimary" />
          </div>

          <Text>
            To navigate in our contents platform, you must use the sidebar that
            lists our contents. All of our pages and sub-pages are listed there.
          </Text>
        </div>

        <div className="mt-8">
          <Title title="Food for thought" />

          <Text>
            If you want some food for thought, take a look at some of our
            comunity writers
          </Text>

          <div className="mt-4">
            <Text>
              <div className="flex items-center gap-x-2 sm:gap-x-8">
                <a
                  href="https://sibelius.github.io/zettelkasten/"
                  className="flex items-center gap-x-2 sm:text-md text-sigPrimary underline"
                >
                  <LinkIcon className="h-6 w-6" /> Sibelius Zettelkasten
                </a>

                <a
                  href="https://eduardojm.github.io/articles"
                  className="flex items-center gap-x-2 text-sigPrimary underline"
                >
                  <LinkIcon className="h-6 w-6" /> Eduardo Oliveira
                </a>
              </div>
            </Text>
          </div>
        </div>

        <div className="mt-8">
          <Title title="Social Media" />

          <Text>
            Come and take a look at our community, there are a lot of good
            content and smart people for you to learn with
          </Text>

          <div className="mt-2">
            <Text>
              <div className="grid grid-cols-2 gap-y-4 sm:flex items-center gap-x-2 sm:gap-x-8">
                <a
                  href="https://discord.gg/k7tKxaHZBu"
                  className="flex items-center gap-x-2 text-sigPrimary underline"
                >
                  <BsDiscord className="h-6 w-6" /> Discord
                </a>

                <a
                  href="https://eduardojm.github.io/articles"
                  className="flex items-center gap-x-2 text-sigPrimary underline"
                >
                  <BsTwitter className="h-6 w-6" /> Twitter
                </a>

                <a
                  href="https://instagram.com/sigcoding"
                  className="flex items-center gap-x-2 text-sigPrimary underline"
                >
                  <InstagramIcon className="h-6 w-6" /> Instagram
                </a>

                <a
                  href="https://www.linkedin.com/company/sigcoding"
                  className="flex items-center gap-x-2 text-sigPrimary underline"
                >
                  <BsLinkedin className="h-6 w-6" /> LinkedIn
                </a>
              </div>
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
