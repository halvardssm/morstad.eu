import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { Layout } from '../components/Layout';
import Emoji from '../components/Emoji';
import { Link } from 'react-router-dom';
import { ROUTE_PROJECTS } from '../Router';
import { TAGS } from '../constants';

const Main: React.FC = () => {
  const { t } = useTranslation();


  return (
    <Layout title={t('name')}>
      <Emoji symbol={'😊'} />
      <p className='text-2xl'>Hello World!</p>
      <i className="fas fa-address-book"></i>
      <Link to={{ pathname: ROUTE_PROJECTS, state: { initialTags: [TAGS.js] } }}>test</Link>
    </Layout>
  );
};

export default Main
