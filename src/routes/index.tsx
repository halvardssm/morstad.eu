import { Coffee } from "react-feather";
import Link from "next/link";
import Footer from "../components/Footer";
import Head from "../components/Head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Layout } from "../components/Layout";
import Container from "../components/Container";

export const getStaticProps = async ({ locale }: { locale: string }) => {
  const { _nextI18Next } = await serverSideTranslations(locale, ["common"]);
  return {
    props: {
      _nextI18Next,
    },
  };
};

export default function Home() {
  const { t } = useTranslation();

  /**
   * Calculates age based on birthdate
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
            <Link href="/portfolio">
              <a className="no-underline hover:underline mx-2">
                {t("coffee_text_portfolio")}
              </a>
            </Link>
            |
            <Link href="/posts">
              <a className="no-underline hover:underline mx-2">
                {t("coffee_text_blog")}
              </a>
            </Link>
          </code>
        </div>

        <div
          className="max-w-4xl mx-auto text-justify text-last-center"
          dangerouslySetInnerHTML={{
            __html: t("about_me", {
              age: getAge("1996-08"),
              years_of_development: getAge("2017"),
            }),
          }}
        />
      </Container>

      <Footer />
    </Layout>
  );
}
