import { Coffee } from "react-feather";
import Footer from "../lib/components/Footer";
import Head from "../lib/components/Head";
import { useTranslation, Trans } from "react-i18next";
import Layout from "../lib/components/Layout";
import Container from "../lib/components/Container";
import { Link } from "react-router-dom";
import { getAgeInYears } from "../lib/helpers/utils";

export default function Home() {
  const { t } = useTranslation();

  return (
    <Layout>
      <Head title={t("name")} description={t("home_head_description")} />

      <header className="mt-12 mb-6">
        <h1 className="text-6xl font-medium text-center">{t("name")}</h1>
      </header>

      <Container footer>
        <div className="mb-8 text-justify text-last-center">
          <code>
            <Coffee className="inline mr-2" />
            {t("coffee_text")}
            <br />
            <Link to="/portfolio">
              <a className="no-underline hover:underline mx-2">
                {t("coffee_text_portfolio")}
              </a>
            </Link>
            |
            <Link to="/posts">
              <a className="no-underline hover:underline mx-2">
                {t("coffee_text_blog")}
              </a>
            </Link>
          </code>
        </div>
        <div className="max-w-4xl mx-auto text-justify text-last-center">
          <Trans
            className="max-w-4xl mx-auto text-justify text-last-center"
            t={t}
            i18nKey="about_me"
            shouldUnescape
            values={{
              years_of_development: getAgeInYears("2017"),
            }}
          />
          <br />
          <p className="max-w-4xl mx-auto text-justify text-last-left">
            <Trans
              className="max-w-4xl mx-auto text-justify text-last-left"
              t={t}
              i18nKey="skills_list"
              shouldUnescape
            />
          </p>
          <br />
          <p className="max-w-4xl mx-auto text-justify text-last-center">
            {t("outro")}
          </p>
        </div>
      </Container>
      <Footer />
    </Layout>
  );
}
