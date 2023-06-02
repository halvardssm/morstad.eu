import { Coffee } from "react-feather";
import Footer from "../lib/components/Footer";
import Head from "../lib/components/Head";
import { useTranslation, Trans } from "react-i18next";
import Layout from "../lib/components/Layout";
import Container from "../lib/components/Container";
import { Link } from "react-router-dom";

export default function Home() {
  const { t } = useTranslation();

  /**
   * Calculates age based on date
   *
   * @param birthDate in format yyyy-mm-dd
   * @returns
   */
  function getAge(birthDate: string) {
    const birthdate = new Date(birthDate);
    const cur = new Date();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore works
    const diff = cur - birthdate;
    return Math.floor(diff / 31536000000);
  }

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
        <div
                  className="max-w-4xl mx-auto text-justify text-last-center"
                  >
        <Trans
          className="max-w-4xl mx-auto text-justify text-last-center"
          t={t}
          i18nKey="about_me"
          shouldUnescape
          values={{
            age: getAge("1996-08"),
            years_of_development: getAge("2017"),
          }}
        />
        </div>
      </Container>

      <Footer />
    </Layout>
  );
}
