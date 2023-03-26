import Head from "next/head";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Projects from "../components/projects";
import Main from "../layouts/main";

import { usePreviewSubscription, getClient } from "@lib/sanity";
import { groq } from "next-sanity";
import { useRouter } from "next/router";

export default function Home({ projectData, preview }) {
  const router = useRouter();

  const { data: projects } = usePreviewSubscription(query, {
    initialData: projectData,
    enabled: preview || router.query.preview !== undefined,
  });

  return (
    <>
      <Head>
        <title>Errka - Portfolio</title>
        <meta name="description" content="Errká's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main home={true}>
        <Navbar />
        <Hero />
        <Projects projectData={projects} />
      </Main>
      <Footer />
    </>
  );
}

const query = groq`
    *[_type == "project"] | order(_createdAt desc){
      _id,
      title,
      image,
      link,
      stack[]->{
        tag
      }
    }
    `;

export async function getStaticProps({ params, preview = false }) {
  const project = await getClient(preview).fetch(query);

  return {
    props: {
      projectData: project,
      preview,
    },
    revalidate: 10,
  };
}
