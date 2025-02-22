import fs from "fs";
import path from "path";

export const dynamicParams = false;

export function generateStaticParams() {
  const recipesDir = path.join(process.cwd(), "src/recipes");
  const recipesFiles = fs.readdirSync(recipesDir);

  return recipesFiles.map((file) => ({ slug: file.replace(/\.mdx$/, "") }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { default: Recipe } = await import(`@/recipes/${slug}.mdx`);

  return <Recipe />;
}
