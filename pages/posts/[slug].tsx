import { getAllPosts, getPostBySlug, PostT } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import { GetStaticPropsContext } from "next";
import { Markdown } from "../../components/Markdown";
import Container from "../../components/Container";
import { Layout } from "../../components/Layout";
import Head from "../../components/Head";
import { Header } from "../../components/Header";
import Link from "next/link";

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ slug: string }>) {
  const post = getPostBySlug(params!.slug);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      } as PostT,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default function PostPage({ post }: { post: PostT }) {
  function CodeFolderLink() {
    if (!post.codeFolderLink) return null;
    return (
      <div className="p-2 mb-5 bg-gray-100 dark:bg-black">
        This post has a connected code folder that you can find{" "}
        <a
          className="no-underline hover:underline font-semibold cursor-pointer"
          href={post.codeFolderLink}
        >
          here
        </a>
        .
      </div>
    );
  }

  function Footer() {
    return (
      <footer className="w-full text-center border-t border-grey p-4 pb-2 bottom-0 bg-white dark:bg-black">
        <div className="mx-auto">
          © {post.date.split("-")[0]}
          <Link href="/">
            <a className="no-underline hover:underline mx-2">Halvard Mørstad</a>
          </Link>
          -
          <a
            className="no-underline hover:underline mx-2"
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode"
          >
            Creative Commons 4.0 (NC-SA)
          </a>
        </div>
      </footer>
    );
  }

  return (
    <Layout>
      <Head
        title={post.title}
        description={(post.description as string) || ""}
      />
      <Container>
        <Header backUrl={"/posts"} showThemeSelector className="" />
        <CodeFolderLink />
        <Markdown content={post.content} />
      </Container>
      <Footer />
    </Layout>
  );
}
