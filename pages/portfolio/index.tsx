import React from "react";
import Emoji from '../../components/Emoji';
import Head from 'next/head'
import Link from 'next/link'
import { Home, Link as LinkIcon } from 'react-feather';
import Footer from "../../components/Footer";

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
        description:
            "A modular Deno library for PostgreSQL, MySQL, MariaDB and SQLite migrations.",
    },
    {
        symbol: "📖",
        title: "Build and Deploy a REST API with Deno",
        tags: [TAGS.deno, TAGS.js, TAGS.ts, TAGS.beApp, TAGS.docker, TAGS.mysql, TAGS.pg, TAGS.sqlite, TAGS.course],
        url: "https://www.newline.co/courses/build-and-deploy-a-rest-api-with-deno",
        description:
            "A course on Newline.co where I teach about Deno and how to crate and deploy a REST API from scratch.",
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
        description:
            "A Hackathon project where the concept is to create a live stream of people playing music together remotely.",
    },
    {
        symbol: "🌍",
        title: "Translation Fetch",
        tags: [TAGS.node, TAGS.js, TAGS.ts, TAGS.lib],
        url: "https://github.com/halvardssm/package-translation-fetch",
        description:
            "A NPM package for syncing translations from POEditor to a repo, and then downloading them.",
    },
    {
        symbol: "🗝",
        title: "Oak Middleware JWT",
        tags: [TAGS.deno, TAGS.js, TAGS.ts, TAGS.lib],
        url: "https://github.com/halvardssm/oak-middleware-jwt",
        description: "A JWT middleware for the Oak server.",
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
        description:
            "A university project used to provide an interface for room bookings across the university buildings.",
    },
    {
        symbol: "🐹",
        title: "Domeneshop Client",
        tags: [
            TAGS.go,
            TAGS.lib,
        ],
        url: "https://github.com/halvardssm/go-domeneshop-client",
        description:
            "A Go client for domene.shop.",
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
        description: "A Terraform provider for Domeneshop.",
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
        description:
            "A university project where a creation of chess in JavaScript was required.",
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
        description: "A game entry for GMTK 2020 written in c# with Unity.",
    },
    {
        symbol: "⚔️",
        title: "Munchkin Buddy",
        tags: [
            TAGS.kotlin,
            TAGS.android,
        ],
        url: "https://github.com/halvardssm/munchkin-buddy",
        description: "An Android helper application for Munchkin, the board game.",
    },
    {
        symbol: "🚢",
        title: "Docker images",
        tags: [
            TAGS.docker,
        ],
        url: "https://github.com/halvardssm/docker-custom-images",
        description: "A collection of custom docker images used for development.",
    },
    {
        symbol: "🎴",
        title: "Checkers",
        tags: [
            TAGS.c,
        ],
        url: "https://github.com/halvardssm/c-checkers",
        description: "The checkers game written in C.",
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
        ],
        url: "https://github.com/codash-platform/codash",
        description: "A COVID-19 dashboard.",
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
        url: "https://github.com/halvardssm/halvardssm.github.io",
        description:
            "This exact website, my personal portfolio.",
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

export default function Portfolio() {
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

                        <p className='p-2 md:p-4'>{project.description}</p>

                        {/* <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                      <a className="no-underline text-grey-darker" href="#">
                        <i className="fa fa-link mr-2"></i>
                        {t('project.link_text')}
                      </a>
                    </footer> */}

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
                <title>Halvard Mørstad - Portfolio</title>
                <meta name="description" content="Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className='pt-5 pb-5 mx-auto flex-grow flex flex-col max-w-screen-2xl'>
                <div className="w-full flex items-center mt-5 mb-5 px-6 py-2">
                    <Link href='/' >
                        <a className='mr-6'><Home /></a>
                    </Link>

                    <h1 className='text-4xl'>Portfolio</h1>
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
