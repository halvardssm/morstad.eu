import React from 'react';
import { useTranslation } from 'react-i18next';
import { PROJECTS } from '../constants';
import { TAGS_MAPPED } from '../variables'
import Emoji from './Emoji';

interface CardProps {
  project: typeof PROJECTS[number];
  selectedTags: string[]
}

const Card: React.FC<CardProps> = ({ project, selectedTags }) => {
  const { t } = useTranslation();

  return <div className="my-1 px-1 w-full lg:my-4 lg:px-4">

    <article className="overflow-hidden rounded-lg shadow-lg">
      <header className="flex items-center justify-between leading-tight p-2 md:p-4">
        <h2 className="text-lg">
          <a className="no-underline hover:underline text-black" href={project.url}>
            <Emoji symbol={project.symbol} className='mr-2' />
            {project.title}
            <i className="fa fa-link ml-2" />
          </a>
        </h2>
      </header>

      <div className="flex flex-wrap p-2 md:p-4">
        {project.tags.map((tagCode, i) => {
          const tag = TAGS_MAPPED.find(el => el.code === tagCode)!

          return <span key={i} className={`inline-block rounded-min text-white bg-${tag.color} px-2 py-1 text-xs font-bold mr-2 mb-1`}>
            {tag.name}
          </span>
        })}
      </div>

      <p className='p-2 md:p-4'>{project.description}</p>

      {/* <footer className="flex items-center justify-between leading-none p-2 md:p-4">
        <a className="no-underline text-grey-darker" href="#">
          <i className="fa fa-link mr-2"></i>
          {t('project.link_text')}
        </a>
      </footer> */}

    </article>

  </div>
}

export default Card;