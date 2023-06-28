import { type MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { promises as fs } from "fs";
import { MdxContent } from "../../mdx-content";
import BountiesBreadcrumb from "@/app/components/bountiesBreadcrumb";

type Frontmatter = {
  title: string;
  date: string;
};

type Post<TFrontmatter> = {
  serialized: MDXRemoteSerializeResult;
  frontmatter: TFrontmatter;
};

interface IBountyProps {
  params: {
    slug: string;
  };
}

async function getPost(filepath: string): Promise<Post<Frontmatter>> {
  // Read the file from the filesystem
  const raw = await fs.readFile(filepath, "utf-8");

  // Serialize the MDX content and parse the frontmatter
  const serialized = await serialize(raw, {
    parseFrontmatter: true,
  });

  // Typecast the frontmatter to the correct type
  const frontmatter = serialized.frontmatter as Frontmatter;

  // Return the serialized content and frontmatter
  return {
    frontmatter,
    serialized,
  };
}

export default async function Bounty({ params }: IBountyProps) {
  // Get the serialized content and frontmatter
  const { serialized, frontmatter } = await getPost(
    `./src/content/${params.slug}.mdx`
  );

  return (
    <div className="text-zinc-400 p-16">
      <BountiesBreadcrumb />

      <div className="px-32 py-16">
        <h1 className="text-zinc-300 font-bold text-4xl">
          {frontmatter.title}
        </h1>

        <span className="text-zinc-400 text-lg mt-8">
          Published at {frontmatter.date}
        </span>

        <div className="mt-8">
          <MdxContent source={serialized} />
        </div>
      </div>
    </div>
  );
}
