import Breadcrumb from "@/app/components/breadcrumb";
import SubTitle from "@/app/components/content/subTitle";
import Text from "@/app/components/content/text";
import Title from "@/app/components/content/title";
import { LinkIcon } from "lucide-react";
import { BsDiscord, BsTwitter } from "react-icons/bs";

export default function SeoBounty() {
  return (
    <div className="p-16 border-r border-zinc-800 pr-8">
      <Breadcrumb />

      <div className="mt-16 text-zinc-400 gap-y-8 flex flex-col">
        <div className="flex flex-col">
          <Title title="Dynamic SEO" />

          <SubTitle subTitle="We need a dynamic SEO and sitemap" />
        </div>

        <div className="mt-8">
          <Title title="Requirements" />

          <Text>
            SEO is one of the most important things for a website. For Sig it
            has no difference, we need a dynamic SEO and sitemap for our website
            that gives support for all of our pages and routes.
          </Text>

          <Text>
            We want you to build a SEO system that can list all of the pages
            inside the <code>(pages)</code> directory and generate a sitemap for
            it. The sitemap should be generated in the build time and should
            also generate a <code>robots.txt</code> file with it.
          </Text>
        </div>

        <div className="mt-6">
          <Title title="References" />

          <Text>
            <ul>
              <li className="text-sigPrimary underline">
                <a href="https://nextjs.org/learn/seo/crawling-and-indexing/xml-sitemaps">
                  XML Sitemaps - Crawling and Indexing | Learn Next.js
                </a>
              </li>
              <li className="text-sigPrimary underline">
                <a href="https://claritydev.net/blog/nextjs-dynamic-sitemap-pages-app-directory">
                  Add a Dynamic Sitemap to Next.js 13 Website Using Pages or App
                  Directory
                </a>
              </li>
              <li className="text-sigPrimary underline">
                <a href="https://vercel.com/guides/how-do-i-generate-a-sitemap-for-my-nextjs-app-on-vercel">
                  How do I generate a “sitemap.xml” for my Next.js app on
                  Vercel?
                </a>
              </li>
              <li className="text-sigPrimary underline">
                <a href="https://nextjs.org/learn/seo/crawling-and-indexing/robots-txt">
                  What is a robots.txt File? - Crawling and Indexing | Learn
                  Next.js
                </a>
              </li>
            </ul>
          </Text>
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

          <Text>
            <div className="flex items-center gap-x-8">
              <a
                href="https://discord.gg/k7tKxaHZBu"
                className="flex items-center mt-4 text-sigPrimary gap-x-2 font-medium"
              >
                <BsDiscord className="h-6 w-6" /> Sig Community
              </a>

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
                <BsTwitter className="h-6 w-6" /> Igor
              </a>

              <a
                href="https://twitter.com/eduardottduca"
                className="flex items-center mt-4 text-sigPrimary gap-x-2 font-medium"
              >
                <BsTwitter className="h-6 w-6" /> Eduardo
              </a>
            </div>
          </Text>
        </div>
      </div>
    </div>
  );
}
