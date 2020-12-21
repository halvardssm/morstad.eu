import React from "react";
import { useTranslation } from "react-i18next";
import Card from '../components/Card';
import { Layout } from '../components/Layout';
import { PROJECTS, TAGS } from '../constants'
import { TAGS_MAPPED } from '../variables';
import { useLocation } from "react-router-dom";

interface ProjectsLocationState {
  initialTags?: TAGS[]
}

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation<ProjectsLocationState>()

  const initialTags = location.state?.initialTags || []
  const [selectedTags, setSelectedTags] = React.useState<TAGS[]>(initialTags)

  const onTagClick = (tag: typeof TAGS_MAPPED[number]) => {
    if (selectedTags.includes(tag.code)) {
      setSelectedTags(selectedTags.filter(el => el !== tag.code))
    } else {
      setSelectedTags([...selectedTags, tag.code])
    }
  }

  const renderTiles = () => {
    return PROJECTS.filter(el => selectedTags.length > 0
      ? selectedTags.some(ell => el.tags.includes(ell))
      : true)
      .map((el, i) => {
        return <Card project={el} key={i} selectedTags={selectedTags} />
      })
  }

  const renderTags = () => {
    return <div className="flex flex-wrap p-2 md:p-4">
      {TAGS_MAPPED.map((tag, i) => {

        const isSelected = selectedTags.includes(tag.code)
        const bgColor = isSelected ? tag.color : 'gray-200'

        return <span key={i} onClick={() => onTagClick(tag)} className={`cursor-pointer inline-block rounded-min text-white bg-${bgColor} px-2 py-1 text-xs select-none font-bold mr-2 mb-1`}>
          {tag.name}
        </span>
      })}
    </div>
  }

  return (
    <Layout title={t('projects.title')}>
      <div>
        {renderTags()}
      </div>
      <div className="masonry-with-columns">
        {renderTiles()}
      </div>
    </Layout>
  );
};

export default Projects
