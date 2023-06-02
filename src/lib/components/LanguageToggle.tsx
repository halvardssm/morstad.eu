import Emoji from "./Emoji";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { supportedLanguages } from "../../i18n/config";

export type LanguageToggleProps = {
  className: string;
};

const LanguageToggle: FC<LanguageToggleProps> = (props) => {
  const { i18n } = useTranslation();
  const languageMap: Record<string, string> = {
    en: "🇬🇧",
    de: "🇩🇪",
    no: "🇳🇴",
  };

  const locales = supportedLanguages;

  return (
    <div className={`flex flex-row justify-around ${props.className}`}>
      {locales.map((lng) => {
        return (
          <div
            className="m-auto cursor-pointer"
            key={lng}
            onClick={() => i18n.changeLanguage(lng)}
          >
            <Emoji symbol={languageMap[lng]} />
          </div>
        );
      })}
    </div>
  );
};

export default LanguageToggle;
