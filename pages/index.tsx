import Head from "next/head";
import { Coffee } from "react-feather";
import Link from "next/link";
import Footer from "../components/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...await serverSideTranslations(locale, ["common"]),
  },
});

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
    // @ts-ignore works
    const diff = cur - birthdate;
    return Math.floor(diff / 31536000000);
  }

  return (
    <div className="flex flex-col justify-between h-screen">
      <Head>
        <title>{t("name")}</title>
        <meta name="description" content={t("home_head_description")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="my-12">
        <h1 className="text-6xl font-medium text-center">{t("name")}</h1>
      </header>

      <main
        className="pt-5 pb-5 flex flex-col justify-center max-w-5xl mx-5 lg:mx-auto"
      >
        <div
          className="max-w-4xl text-justify text-last-center"
          dangerouslySetInnerHTML={{
            __html: t("about_me", {
              age: getAge("1996-08"),
              years_of_development: getAge("2017"),
            }),
          }}
        />

        <Link href="/portfolio">
          <a
            className="mt-20 flex flex-row justify-center no-underline hover:underline"
          >
            <code>{t("portfolio_link")}</code>
            <Coffee className="mx-2" />
          </a>
        </Link>
      </main>

      <Footer />
    </div>
  );
}
