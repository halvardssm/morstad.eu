import React from "react";
import Emoji from "../../components/Emoji";
import Head from "../../components/Head";
import { Link as LinkIcon } from "react-feather";
import Footer from "../../components/Footer";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Header } from "../../components/Header";
import { Tags, TagT } from "../../components/Tags";
import Masonry from "../../components/Masonry";
import Container from "../../components/Container";
import Card from "../../components/Card";
import { getAllProjects, ProjectT } from "../../lib/api";
import { useMappedTags } from "../../lib/hooks/useMappedTags";
import { TAGS } from "../../lib/contstants";

export async function getStaticProps({ locale }: { locale: string }) {
  const { _nextI18Next } = await serverSideTranslations(locale, ["common"]);
  const projects = getAllProjects();
  return {
    props: {
      _nextI18Next,
      projects,
    },
  };
}

export default function Portfolio({ projects }: { projects: ProjectT[] }) {
  const { t } = useTranslation();
  const [mappedTags, setIsSelected] = useMappedTags();
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);

  const renderTags = () => {
    if (!mappedTags) return null;
    const usedTags = new Set<string>();

    projects.forEach((project) => {
      project.tags.forEach((tag) => {
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

  const renderTiles = () => {
    if (!mappedTags) return null;

    const tiles = projects
      .filter((el) =>
        selectedTags.length > 0
          ? selectedTags.some((it) => el.tags.includes(it))
          : true
      )
      .map((project) => {
        return (
          <Card>
            <header className="flex items-center justify-between leading-tight mb-2 md:mb-4">
              <h2 className="text-lg">
                <a
                  className="no-underline hover:underline text-black dark:text-white"
                  href={project.url}
                >
                  <Emoji symbol={project.symbol} className="mr-2" />
                  {project.title}
                  <LinkIcon className="inline-block ml-2" size={16} />
                </a>
              </h2>
            </header>

            <div className="flex flex-wrap mb-2 md:mb-4">
              {project.tags.map((tagCode, i) => {
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

            <p>{t(project.description)}</p>
          </Card>
        );
      });

    return <Masonry elements={tiles} />;
  };

  return (
    <div className="flex flex-col justify-between h-screen">
      <Head
        title={t("portfolio_title")}
        description={t("portfolio_description")}
      />

      <Container wide footer>
        <Header title={t("portfolio")} />

        {renderTags()}
        {renderTiles()}
      </Container>

      <Footer />
    </div>
  );
}
