import React from "react";
import { getAllPosts, PostT } from "../../lib/api";
import Link from "next/link";
import Container from "../../components/Container";
import { Layout } from "../../components/Layout";
import Head from "../../components/Head";
import { useTranslation } from "next-i18next";
import { Header } from "../../components/Header";
import Card from "../../components/Card";
import { useMappedTags } from "../../lib/hooks/useMappedTags";
import { Tags, TagT } from "../../components/Tags";
import { TAGS } from "../../lib/contstants";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Posts({ posts }: { posts: PostT[] }) {
  const { t } = useTranslation();
  const [mappedTags, setIsSelected] = useMappedTags();
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);

  const renderTags = () => {
    if (!mappedTags) return null;

    const usedTags = new Set<string>();

    posts.forEach((post) => {
      post.tags?.forEach((tag) => {
        usedTags.add(tag);
        if (TAGS[tag] === undefined)
          console.warn(`Tag '${tag}' is not defined`);
      });
    });

    const tags = mappedTags.filter((tag) => usedTags.has(tag.code));

    const onTagClick = (tag: TagT) => {
      if (selectedTags.includes(tag.code)) {
        setIsSelected(tag.code, false);
        setSelectedTags((tags) => tags.filter((el) => el !== tag.code));
      } else {
        setIsSelected(tag.code, true);
        setSelectedTags((tags) => [...tags, tag.code]);
      }
    };

    return <Tags tags={tags} onTagClick={(tag) => onTagClick(tag)} />;
  };

  const renderList = () => {
    if (!mappedTags) return null;

    return (
      <div className="flex flex-col flex-grow space-y-4 m-5">
        {posts.map((post) => (
          <Card key={post.slug}>
            <header className="flex items-center justify-between leading-tight mb-2 md:mb-4">
              <h2 className="text-lg">
                <Link href={`/posts/${post.slug}`}>
                  <a className="no-underline hover:underline text-black dark:text-white">
                    {post.title}
                  </a>
                </Link>
              </h2>
              <small className="ml-5">{post.date}</small>
            </header>

            <div className="flex flex-wrap mb-2 md:mb-4">
              {post.tags?.map((tagCode, i) => {
                const tag = mappedTags.find(
                  (el) => el.code === tagCode
                ) as TagT;

                return (
                  <span
                    key={i}
                    className={`inline-block rounded-min text-white bg-${tag.color} px-2 py-1 text-xs font-bold mr-2 mb-1 dark:text-black`}
                  >
                    {tag.name}
                  </span>
                );
              })}
            </div>

            {/*<p>{ t(project.description) }</p>*/}
          </Card>
        ))}
      </div>
    );
  };

  return (
    <Layout>
      <Head title={t("posts_title")} description={t("posts_description")} />
      <Container>
        <Header title={t("posts")} />
        {renderTags()}
        {renderList()}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  const { _nextI18Next } = await serverSideTranslations(locale, ["common"]);

  const posts = getAllPosts(["title", "date", "slug", "tags"]);

  return {
    props: {
      _nextI18Next,
      posts,
    },
  };
}
