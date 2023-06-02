import Container from "../lib/components/Container";
import Layout from "../lib/components/Layout";
import Head from "../lib/components/Head";
import { Header } from "../lib/components/Header";
import { PostT } from "../types";
import MarkdownRender from "../lib/components/MarkdownRender";
import { Link, useParams } from "react-router-dom";
import { parseContentData } from "../lib/helpers/utils";

function CodeFolderLink(props: { post: PostT }) {
  if (!props.post.codeFolderLink) return null;
  return (
    <div className="p-2 mb-5 bg-gray-100 dark:bg-black">
      This post has a connected code folder that you can find{" "}
      <a
        className="no-underline hover:underline font-semibold cursor-pointer"
        href={props.post.codeFolderLink}
      >
        here
      </a>
      .
    </div>
  );
}

function Footer(props: { post: PostT }) {
  return (
    <footer className="w-full text-center border-t border-grey p-4 pb-2 bottom-0 bg-white dark:bg-black">
      <div className="mx-auto">
        © {props.post.date.split("-")[0]}
        <Link to="/">
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

export default function PostPage() {
  const { postId } = useParams() as { postId: string };

  const post = parseContentData().posts.find((el) => el.slug === postId);

  if (!post) return <div>404</div>;

  return (
    <Layout>
      <Head
        title={post.title}
        description={(post.description as string) || ""}
      />
      <Container wide>
        <Header backUrl={"/posts"} showThemeSelector className="" />
        <CodeFolderLink post={post} />
        <MarkdownRender url={post.filePath} />
      </Container>
      <Footer post={post} />
    </Layout>
  );
}
