import fs from "fs";
import path from "path";

import { MDXRemote, type MDXRemoteOptions } from "next-mdx-remote-client/rsc";

import { Metadata } from "next";
import { getFrontmatter } from "next-mdx-remote-client/utils";
import components from "@/components/mdxComponents";

type RecipeFrontmatter = {
  title: string;
  video?: string;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "src/recipes");
  const recipes = fs.readdirSync(dir);

  return recipes.map((file) => ({ slug: file.replace(/\.mdx$/, "") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const content = await getRecipe(slug);
  const metadata = getFrontmatter<RecipeFrontmatter>(content).frontmatter;

  return {
    title: metadata.title,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const content = await getRecipe(slug);

  const { frontmatter, strippedSource } =
    getFrontmatter<RecipeFrontmatter>(content);

  const options: MDXRemoteOptions = {
    mdxOptions: {
      baseUrl: import.meta.url,
    },
  };

  return (
    <>
      <p>{frontmatter.video}</p>
      <MDXRemote
        source={strippedSource}
        options={options}
        components={components}
      />
    </>
  );
}

async function getRecipe(slug: string): Promise<string> {
  const file = path.join(process.cwd(), `src/recipes/${slug}.mdx`);
  const content = fs.readFileSync(file, "utf-8");

  return content;
}
