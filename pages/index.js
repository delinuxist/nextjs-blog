import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";
import Link from "next/link";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className={"bg-emerald-50"}>
          James W. &quot;Jim&quot; Gordon is a fictional character appearing in
          American comic books published by DC Comics, most commonly in
          association with the superhero Batman.
        </p>
        <p>
          (This is a sample website - you&apos;ll be building a site like this
          on <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`posts/${id}`}>{title}</Link>

                <br />
                {id}
                <br />
                <Date dateString={date} />
              </li>
            ))}
          </ul>
        </section>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
