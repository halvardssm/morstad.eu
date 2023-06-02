import React from "react";
import Container from "../lib/components/Container";
import Layout from "../lib/components/Layout";
import Head from "../lib/components/Head";
import { Header } from "../lib/components/Header";
import Card from "../lib/components/Card";
import { useMappedTags } from "../lib/hooks/useMappedTags";
import { Tags, TagT } from "../lib/components/Tags";
import { TAGS } from "../constants";
import Footer from "../lib/components/Footer";
import { PostT } from "../types";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { parseContentData } from "../lib/helpers/utils";

const MappedTags = (props: {
  posts: PostT[];
  mappedTags: TagT[];
  selectedTags: string[];
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
  setIsSelected: (tagCode: string, isSelected: boolean) => void;
}) => {
  if (!props.mappedTags) return null;

  const usedTags = new Set<string>();

  props.posts.forEach((post) => {
    post.tags?.forEach((tag) => {
      usedTags.add(tag);
      if (TAGS[tag] === undefined) console.warn(`Tag '${tag}' is not defined`);
    });
  });

  const tags = props.mappedTags.filter((tag) => usedTags.has(tag.code));

  const onTagClick = (tag: TagT) => {
    if (props.selectedTags.includes(tag.code)) {
      props.setIsSelected(tag.code, false);
      props.setSelectedTags((tags) => tags.filter((el) => el !== tag.code));
    } else {
      props.setIsSelected(tag.code, true);
      props.setSelectedTags((tags) => [...tags, tag.code]);
    }
  };

  return <Tags tags={tags} onTagClick={(tag) => onTagClick(tag)} />;
};

const PostList = (props: {
  posts: PostT[];
  mappedTags: TagT[];
  selectedTags: string[];
}) => {
  if (!props.mappedTags) return null;

  return (
    <div className="flex flex-col flex-grow space-y-4 m-5">
      {props.posts
        .filter((el) =>
          props.selectedTags.length > 0
            ? props.selectedTags.some((it) => el.tags?.includes(it))
            : true
        )
        .sort((a, b) => (a.date > b.date ? -1 : 1))
        .map((post) => (
          <Card key={post.slug}>
            <header className="flex items-center justify-between leading-tight mb-2 md:mb-4">
              <h2 className="text-lg">
                <Link to={`/posts/${post.slug}`}>
                  <a className="no-underline hover:underline text-black dark:text-white">
                    {post.title}
                  </a>
                </Link>
              </h2>
              <small className="ml-5">{post.date}</small>
            </header>

            <div className="flex flex-wrap mb-2 md:mb-4">
              {post.tags?.map((tagCode, i) => {
                const tag = props.mappedTags.find((el) => el.code === tagCode);

                if (!tag) return null;

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

export default function Posts() {
  const { t } = useTranslation();
  const [mappedTags, setIsSelected] = useMappedTags();
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);
  const posts = parseContentData().posts;

  return (
    <Layout>
      <Head title={t("posts_title")} description={t("posts_description")} />
      <Container footer>
        <Header title={t("posts")} />
        <MappedTags
          posts={posts}
          mappedTags={mappedTags}
          setIsSelected={setIsSelected}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
        />
        <PostList
          posts={posts}
          mappedTags={mappedTags}
          selectedTags={selectedTags}
        />
      </Container>
      <Footer />
    </Layout>
  );
}
