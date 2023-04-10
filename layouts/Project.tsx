import Head from "next/head";
import Main from "./Main";
import { useRouter } from "next/router";

type Props = {
  title: string;
  desc: string;
  children: JSX.Element[] | JSX.Element;
};

const Project = ({ title, desc, children }: Props) => {
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
};

export default Project;
