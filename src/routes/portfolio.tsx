import React from "react";
import Emoji from "../lib/components/Emoji";
import Head from "../lib/components/Head";
import { Link as LinkIcon } from "react-feather";
import Footer from "../lib/components/Footer";
import { useTranslation } from "react-i18next";
import { Header } from "../lib/components/Header";
import { Tags, TagT } from "../lib/components/Tags";
import Masonry from "../lib/components/Masonry";
import Container from "../lib/components/Container";
import Card from "../lib/components/Card";
import { useMappedTags } from "../lib/hooks/useMappedTags";
import { TAGS } from "../constants";
import { ProjectT } from "../types";
import { parseContentData } from "../lib/helpers/utils";

const MappedTags = (props: {
  projects: ProjectT[];
  mappedTags: TagT[];
  selectedTags: string[];
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
  setIsSelected: (tagCode: string, isSelected: boolean) => void;
}) => {
  if (!props.mappedTags) return null;
  const usedTags = new Set<string>();

  props.projects.forEach((project) => {
    project.tags.forEach((tag) => {
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

const Tiles = (props: {
  projects: ProjectT[];
  mappedTags: TagT[];
  selectedTags: string[];
}) => {
  const { t } = useTranslation();
  if (!props.mappedTags) return null;

  const tiles = props.projects
    .filter((el) =>
      props.selectedTags.length > 0
        ? props.selectedTags.some((it) => el.tags.includes(it))
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

          <p>{t(project.description)}</p>
        </Card>
      );
    });

  return <Masonry elements={tiles} />;
};

export default function Portfolio() {
  const { t } = useTranslation();
  const [mappedTags, setIsSelected] = useMappedTags();
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);
  const projects = parseContentData().projects;

  return (
    <div className="flex flex-col justify-between h-screen">
      <Head
        title={t("portfolio_title")}
        description={t("portfolio_description")}
      />

      <Container wide footer>
        <Header title={t("portfolio")} />

        <MappedTags
          projects={projects}
          mappedTags={mappedTags}
          setIsSelected={setIsSelected}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
        />
        <Tiles
          projects={projects}
          mappedTags={mappedTags}
          selectedTags={selectedTags}
        />
      </Container>

      <Footer />
    </div>
  );
}
