import Head from "next/head";
import Projects from "../components/Projects";
import Main from "../layouts/Main";
import { usePreviewSubscription, getClient } from "@lib/sanity";
import { groq } from "next-sanity";
import { useRouter } from "next/router";
import Hero from "components/Hero";

type Props = {
  projectData: any;
  preview: any;
};

const Home = ({ projectData, preview }: Props) => {
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
        <Hero />
        <Projects projectData={projects} />
      </Main>
    </>
  );
};

export default Home;

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

export async function getStaticProps({
  preview = false,
}: {
  preview: boolean;
}) {
  const project = await getClient(preview).fetch(query);

  return {
    props: {
      projectData: project,
      preview,
    },
    revalidate: 10,
  };
}
