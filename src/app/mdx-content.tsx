"use client"; // This is required!

import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";

type MdxContentProps = {
  source: MDXRemoteSerializeResult;
};

/** Place your custom MDX components here */
const MdxComponents = {
  /** h1 colored in yellow */
  h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h1 className="text-2xl font-medium py-2" {...props} />
  ),
  h2: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h2 className="text-xl font-medium py-2" {...props} />
  ),
  /** Card component */
  Card: (props: React.HTMLProps<HTMLDivElement>) => (
    <div className="p-8 rounded-lg bg-zinc-800 text-zinc-300" {...props} />
  ),
  a: (props: React.HTMLProps<HTMLAnchorElement>) => (
    <a href={props.href} {...props} className="text-sigPrimary underline" />
  ),
  p: (props: React.HTMLProps<HTMLParagraphElement>) => (
    <p {...props} className="text-lg py-4" />
  ),
  code: (props: any) => (
    <code
      {...props}
      className="text-sm mx-1 bg-zinc-600/30 p-1 rounded-sm text-zinc-200 font-medium"
    />
  ),
};

export function MdxContent({ source }: MdxContentProps) {
  return <MDXRemote {...source} components={MdxComponents} />;
}
