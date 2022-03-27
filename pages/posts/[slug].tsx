import { getAllPosts, getPostBySlug, PostT } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import { GetStaticPropsContext } from "next";
import { Markdown } from "../../components/Markdown";
import Container from "../../components/Container";
import { Layout } from "../../components/Layout";
import Head from "../../components/Head";
import { Header } from "../../components/Header";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getStaticProps({
  locale,
  params,
}: GetStaticPropsContext<{ slug: string }> & { locale: string }) {
  const { _nextI18Next } = await serverSideTranslations(locale, ["common"]);
  const post = getPostBySlug(params!.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      _nextI18Next,
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
  const { t } = useTranslation();

  return (
    <Layout>
      <Head
        title={post.title}
        description={(post.description as string) || ""}
      />
      <Container wide>
        <Header title={post.title} backUrl={"/posts"} />
        <div className="my-8 mx-5 lg:max-w-5xl lg:mx-auto lg:px-5">
          <Markdown content={post.content} />
        </div>
      </Container>
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
    </Layout>
  );
}
