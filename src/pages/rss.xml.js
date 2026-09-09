import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(ctx) {
  const blog = await getCollection("blog");

  return rss({
    title: "Halvard's Blog",
    description: "A variety of content I fancy writing about",
    site: ctx.site,
    trailingSlash: false,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.summary,
      link: `/blog/${post.id}`,
    })),
    customData: `<language>en</language>`,
    stylesheet: "/pretty-feed-v3.xsl",
  });
}
