import Head from "next/head";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Projects from "../components/projects";
import Main from "../layouts/main";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function Home() {
  const { data, error } = useSWR("/api/projectsData", fetcher);
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Errká's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Main>
        <Navbar />
        <Hero>
          Je travaille la conception, le design et le développement de vos
          produits digitaux.
        </Hero>
        <Projects data={data} error={error} />
        <Footer />
      </Main>
    </>
  );
}
