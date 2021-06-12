import React from "react";
import Emoji from '../../components/Emoji';
import Head from 'next/head'
import Link from 'next/link'
import { Home, Link as LinkIcon } from 'react-feather';
import Footer from "../../components/Footer";
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

enum TAGS {
    js = "js",
    ts = "ts",
    deno = "deno",
    node = "node",
    react = "react",
    redux = "redux",
    observables = "observables",
    saga = "saga",
    next = "next",
    tw = "tw",
    bootstrap = "bootstrap",

    java = "java",
    spring = "spring",

    docker = "docker",
    kotlin = "kotlin",
    go = "go",
    c = "c",
    c_sh = "c_sh",
    unity = "unity",
    tf = "tf",

    mysql = "mysql",
    pg = "pg",
    sqlite = "sqlite",
    gql = "gql",

    course = "course",
    lib = "lib",
    feApp = "feApp",
    beApp = "beApp",
    game = "game",
    android = "android",
}

const _TAGS: Record<keyof typeof TAGS, string> = {
    js: "JavaScript",
    ts: "TypeScript",
    deno: "Deno",
    node: "NodeJS",
    react: "ReactJS",
    redux: "Redux",
    observables: "Redux Observables",
    saga: "Redux Saga",
    next: "NextJS",
    tw: "Tailwind",
    bootstrap: "Bootstrap",

    java: "Java",
    spring: "Spring",

    docker: "Docker",
    kotlin: "Kotlin",
    go: "Go",
    c: "C",
    c_sh: "C#",
    unity: "Unity",
    tf: "Terraform",

    mysql: "MySQL",
    pg: "PostgreSQL",
    sqlite: "SQLite",
    gql: "GraphQL",

    course: "Course",
    lib: "Library",
    feApp: "Frontend Application",
    beApp: "Backend Application",
    game: "Game",
    android: "Android App",
};

const PROJECTS = [
    {
        symbol: "🦕",
        title: "Nessie",
        tags: [TAGS.deno, TAGS.js, TAGS.ts, TAGS.lib, TAGS.docker, TAGS.mysql, TAGS.pg, TAGS.sqlite],
        url: "https://github.com/halvardssm/deno-nessie",
        description: "p_nessie_description",
    },
    {
        symbol: "📖",
        title: "Build and Deploy a REST API with Deno",
        tags: [TAGS.deno, TAGS.js, TAGS.ts, TAGS.beApp, TAGS.docker, TAGS.mysql, TAGS.pg, TAGS.sqlite, TAGS.course],
        url: "https://www.newline.co/courses/build-and-deploy-a-rest-api-with-deno",
        description: "p_newline_course_description",
    },
    {
        symbol: "🎵",
        title: "Social Slam",
        tags: [
            TAGS.react,
            TAGS.js,
            TAGS.ts,
            TAGS.feApp,
            TAGS.redux,
            TAGS.saga,
            TAGS.pg,
            TAGS.gql,
        ],
        url: "https://github.com/SocialSlam/social-slam-frontend",
        description: "p_social_slam_description",
    },
    {
        symbol: "🌍",
        title: "Translation Fetch",
        tags: [TAGS.node, TAGS.js, TAGS.ts, TAGS.lib],
        url: "https://github.com/halvardssm/package-translation-fetch",
        description: "p_translation_fetch_description",
    },
    {
        symbol: "🗝",
        title: "Oak Middleware JWT",
        tags: [TAGS.deno, TAGS.js, TAGS.ts, TAGS.lib],
        url: "https://github.com/halvardssm/oak-middleware-jwt",
        description: "p_oak_middleware_jwt_description",
    },
    {
        symbol: "🎓",
        title: "Campus Management System",
        tags: [
            TAGS.java,
            TAGS.spring,
            TAGS.lib,
            TAGS.beApp,
            TAGS.feApp,
            TAGS.mysql,
        ],
        url: "https://github.com/halvardssm/java-campus-management-system",
        description: "p_tudelft_cms_description",
    },
    {
        symbol: "🐹",
        title: "Domeneshop Client",
        tags: [
            TAGS.go,
            TAGS.lib,
        ],
        url: "https://github.com/halvardssm/go-domeneshop-client",
        description: "p_go_domeneshop_client_description",
    },
    {
        symbol: "☂️",
        title: "Domeneshop Provider (WIP)",
        tags: [
            TAGS.go,
            TAGS.lib,
            TAGS.tf,
        ],
        url: "https://github.com/halvardssm/terraform-provider-domeneshop",
        description: "p_terraform_domeneshop_provider_description",
    },
    {
        symbol: "♟",
        title: "Chess has Quirks",
        tags: [
            TAGS.js,
            TAGS.node,
            TAGS.beApp,
            TAGS.feApp,
            TAGS.game,
        ],
        url: "https://github.com/halvardssm/js-chess-has-quirks",
        description: "p_chess_has_quirks_description",
    },
    {
        symbol: "👾",
        title: "Game Jam 2020 entry",
        tags: [
            TAGS.c_sh,
            TAGS.unity,
            TAGS.game,
        ],
        url: "https://github.com/CodeChroma/gmtk_2020",
        description: "p_gmtk_2020_description",
    },
    {
        symbol: "⚔️",
        title: "Munchkin Buddy",
        tags: [
            TAGS.kotlin,
            TAGS.android,
        ],
        url: "https://github.com/halvardssm/munchkin-buddy",
        description: "p_munchkin_buddy_description",
    },
    {
        symbol: "🚢",
        title: "Docker images",
        tags: [
            TAGS.docker,
        ],
        url: "https://github.com/halvardssm/docker-custom-images",
        description: "p_docker_images_description",
    },
    {
        symbol: "🎴",
        title: "Checkers",
        tags: [
            TAGS.c,
        ],
        url: "https://github.com/halvardssm/c-checkers",
        description: "p_c_checkers_description",
    },
    {
        symbol: "🦠",
        title: "CoDash",
        tags: [
            TAGS.js,
            TAGS.ts,
            TAGS.react,
            TAGS.saga,
            TAGS.redux,
            TAGS.bootstrap
        ],
        url: "https://github.com/codash-platform/codash",
        description: "p_codash_description",
    },
    {
        symbol: "👨🏼‍💻",
        title: "halvardssm.github.io",
        tags: [
            TAGS.react,
            TAGS.js,
            TAGS.ts,
            TAGS.feApp,
            TAGS.next,
            TAGS.tw,
        ],
        url: "https://github.com/halvardssm/morstad.eu",
        description: "p_morstad_eu_description",
    },
];

const TW_COLORS = [
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink",
];

const TAGS_MAPPED = Object.entries(_TAGS)
    .map((e) => {
        const colorNumber = Math.floor(Math.random() * TW_COLORS.length);
        const color = TW_COLORS[colorNumber];
        const gradient = Math.floor(Math.random() * (7 - 2 + 1) + 2) * 100;

        return {
            name: e[1],
            code: e[0] as TAGS,
            color: `${color}-${gradient}`,
        };
    });

    export const getStaticProps = async ({ locale }: { locale: string }) => ({
        props: {
          ...await serverSideTranslations(locale, ['common']),
        },
      })

export default function Portfolio() {
    const {t}= useTranslation()
    const [selectedTags, setSelectedTags] = React.useState<TAGS[]>([])

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
            .map((project, i) => {
                return <div key={i} className="break-inside w-full mb-4">

                    <article className="overflow-hidden rounded-lg shadow-lg dark:shadow-none border border-white">
                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                            <h2 className="text-lg">
                                <a className="no-underline hover:underline text-black dark:text-white" href={project.url}>
                                    <Emoji symbol={project.symbol} className='mr-2' />
                                    {project.title}
                                    <LinkIcon className='inline-block ml-2' size={16} />
                                </a>
                            </h2>
                        </header>

                        <div className="flex flex-wrap p-2 md:p-4">
                            {project.tags.map((tagCode, i) => {
                                const tag = TAGS_MAPPED.find(el => el.code === tagCode)!

                                return <span key={i} className={`inline-block rounded-min text-white bg-${tag.color} px-2 py-1 text-xs font-bold mr-2 mb-1 dark:text-black`}>
                                    {tag.name}
                                </span>
                            })}
                        </div>

                        <p className='p-2 md:p-4'>{t(project.description)}</p>
                    </article>
                </div>
            })
    }

    const renderTags = () => {
        return <div className="flex flex-wrap p-2 md:p-4">
            {TAGS_MAPPED.map((tag, i) => {

                const isSelected = selectedTags.includes(tag.code)
                const colors = isSelected ? `text-white bg-${tag.color} border-${tag.color}` : `text-${tag.color} bg-white border-${tag.color} dark:bg-black`

                return <span key={i} onClick={() => onTagClick(tag)} className={`cursor-pointer inline-block rounded-min border ${colors} px-2 py-1 text-xs select-none font-bold mr-2 mb-1`}>
                    {tag.name}
                </span>
            })}
        </div>
    }

    return (
        <div className='flex flex-col justify-between h-screen'>
            <Head>
                <title>{t('portfolio_title')}</title>
                <meta name="description" content="portfolio_description" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className='pt-5 pb-5 mx-auto flex-grow flex flex-col max-w-screen-2xl'>
                <div className="w-full flex items-center mt-5 mb-5 px-6 py-2">
                    <Link href='/' >
                        <a className='mr-6'><Home /></a>
                    </Link>

                    <h1 className='text-4xl'>{t('portfolio')}</h1>
                </div>
                <div>
                    {renderTags()}
                </div>
                <div className="masonry-1-col sm:masonry-2-col lg:masonry-3-col 2xl:masonry-4-col m-5 flex-grow">
                    {renderTiles()}
                </div>
            </main>

            <Footer />
        </div>
    );
}
