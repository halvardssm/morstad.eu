import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import { ROUTE_HOME } from '../Router';

interface HeaderProps {
  title?: string
}

export const Header: React.FC<HeaderProps> = (props) => {
  const { t } = useTranslation();
  return (
    <header id="header">
      <div className="w-full flex items-center mt-4 mb-5 px-6 py-2">
        <Link to={ROUTE_HOME} className='mr-6'>
          <i className="fas fa-home fa-2x" />
        </Link>

        <h1 className='text-4xl'>{props.title}</h1>
      </div>
    </header>
  );
};
