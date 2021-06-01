import Head from 'next/head'
import { Coffee } from 'react-feather';
import Link from 'next/link'
import Footer from '../components/Footer'

export default function Home() {

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
    <div className='flex flex-col justify-between h-screen'>
      <Head>
        <title>Halvard Mørstad</title>
        <meta name="description" content="A personal landingpage with some personal content" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='my-12'>
        <h1 className='text-6xl font-medium text-center'>
          Halvard Mørstad
        </h1>
      </header>

      <main className='pt-5 pb-5 flex flex-col justify-center max-w-5xl mx-auto'>
        <div className='text-center max-w-4xl'>
          <p>Welcome to my page!</p>
          <br />
          <p>If you are wondering if I am the right fit for your next employee or contractor, the answer is 'yes'!</p>
          <br />
          <p>However, if you are not convinced by my bold statement above, that is exactly what this page is for.</p>
          <br />
          <p>Here you will find all the relevant links, and you also have a nice page to bookmark.</p>
          <br />
          <p>Now a bit about me (assuming you are here to know more about me).</p>
          <br />
          <p>I am a {getAge('1996-08')} year old <b>Full-Stack Developer</b>, and have worked profesially with development since 2017 (a solid <b>{getAge('2017')}</b> years!).
          My techstack is mostly <b>TypeScript</b>, but I am also as fluent in <b>PHP</b>.
          That being said, I am also proficient in other languages like <b>Python</b>, and I am currently learning <b>Rust</b> and <b>Go</b> to improve across the entire web stack.
          As you can see, my main set of skills lays in <b>Web Development</b>, but this is not limiting.</p>
          <br />
          <p>On the <b>DevOps</b> side of things, I am also experienced in using <b>AWS</b> together with Terraform to provision the likes of <b>S3</b>, <b>CloudFront</b> & <b>ECS</b>.
          Across development, staging and production, I am also knowledgeable in the setups using both <b>Docker</b> and <b>Docker Compose</b> to create a reproduceable environment for easy deployment.</p>
          <br />
          <p>I have experience working both with <b>Monoliths</b> and <b>Micro-services</b>, and <b>refactoring</b> both has been my task more than once.
          Recently I had the pleasure of <b>leading a project</b> where refactoring and <b>optimizing</b> an entire codebase was on the table, and being the lead of such a project thought me many lessons.</p>
          <br />
          <p>But enough about me for now. If you are interrested in getting to know me better or you would like to have me work on your next project, give me a ping on one of the platforms bellow.</p>
        </div>

        <Link href='/portfolio' >
          <a className='mt-20 flex flex-row justify-center no-underline hover:underline'>
            <code>Grab a coffee and take a look at my portfolio </code>
            <Coffee className='mx-2' />
          </a>
        </Link>
      </main>

      <Footer />
    </div>
  )
}
