import { Info, InstagramIcon, LinkIcon } from "lucide-react";
import { BsDiscord, BsLinkedin, BsTwitter } from "react-icons/bs";
import Breadcrumb from "../../components/breadcrumb";

export default function Content() {
  return (
    <div className="p-16 border-r border-zinc-800 pr-8">
      <Breadcrumb />

      <div className="mt-16 text-zinc-400 gap-y-8 flex flex-col">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold">Content</h1>

          <h2 className="text-xl mt-2">
            Let&apos;s take a look into our content
          </h2>
        </div>

        <div className="mt-8">
          <h3 className="font-bold text-2xl">Navigation</h3>

          <p className="max-w-5xl mt-2 text-lg">
            <div className="flex gap-x-2">
              <Info className="h-6 w-6 text-sigPrimary" /> To navigate in our
              contents platform, you must use the sidebar that lists our
              contents. All of our pages and sub-pages are listed there.
            </div>
          </p>
        </div>

        <div className="mt-8">
          <h3 className="font-bold text-2xl">Food for thought</h3>

          <p className="max-w-5xl mt-2 text-lg">
            If you want some food for thought, take a look at some of our
            comunity writers
          </p>

          <div className="mt-2">
            <div className="flex items-center gap-x-8">
              <a
                href="https://sibelius.github.io/zettelkasten/"
                className="flex items-center gap-x-2 text-sigPrimary underline"
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
          </div>
        </div>

        <div className="mt-8">
          <h3 className="font-bold text-2xl">Social Media</h3>

          <p className="max-w-5xl mt-2 text-lg">
            Come and take a look at our community, there are a lot of good
            content and smart people for you to learn with
          </p>

          <div className="mt-2">
            <div className="flex items-center gap-x-8">
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
          </div>
        </div>
      </div>
    </div>
  );
}
