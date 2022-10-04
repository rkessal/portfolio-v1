import Head from "next/head";
import Main from "./main";
import { useRouter } from "next/router";

export default function Project({ title, desc, children }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{`Projets - ${title}`}</title>
        <meta name="description" content={desc} />
      </Head>
      <Main router={router.asPath}>{children}</Main>
    </>
  );
}
