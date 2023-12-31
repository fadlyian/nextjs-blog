import Head from "next/head";
import style from "./layout.module.css";
import Image from "next/image";
import Link from 'next/link';
import utilStyles from "../styles/utils.module.css";

const name = "Fadly Sofyansyah";
export const siteTitle = "Next.js sample website";

export default function Layouts({ children, home }) {
  return (
    <div className={style.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using nextJS"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={style.header}>
        {home ? (
          <>
            <Image
              priority
              src={"/images/profile.jpg"}
              className={utilStyles.borderCircle}
              height={250}
              width={250}
              alt="ian ganteng"
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src={"/images/profile.jpg"}
                className={utilStyles.borderCircle}
                height={250}
                width={250}
                alt="ian tampan"
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href={"/"} className={utilStyles.colorInherit}>
              {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={utilStyles.backToHome}>
          <Link href={"/"}>Back To Home</Link>
        </div>
      )}
    </div>
  );
}
