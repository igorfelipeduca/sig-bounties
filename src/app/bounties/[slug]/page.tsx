import { type MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { promises as fs } from "fs";
import { MdxContent } from "../../mdx-content";
import BountiesBreadcrumb from "@/app/components/bountiesBreadcrumb";
import path from "path";

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
  const raw = await fs.readFile(filepath, "utf-8");

  const serialized = await serialize(raw, {
    parseFrontmatter: true,
  });

  const frontmatter = serialized.frontmatter as Frontmatter;

  return {
    frontmatter,
    serialized,
  };
}

export default async function Bounty({ params }: IBountyProps) {
  const { serialized, frontmatter } = await getPost(filePath);

  return (
    <div className="text-zinc-400 p-16 border-r border-zinc-800">
      <BountiesBreadcrumb />

      <div className="py-16 max-w-4xl">
        <h1 className="text-zinc-300 font-bold text-4xl">
          {frontmatter.title}
        </h1>

        <span className="text-zinc-400 text-md mt-8">
          Published at {frontmatter.date}
        </span>

        <div className="mt-8">
          <MdxContent source={serialized} />
        </div>
      </div>
    </div>
  );
}
