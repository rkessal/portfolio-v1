import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Main from "../layouts/main";
import Section from "../layouts/section";
export default function Oms() {
  return (
    <>
      <Head>
        <title>OMS</title>
        <meta name="description" content="OMS Project" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Main>
        <Section>
          <h1 className="uppercase tracking-wider text-4xl text-redMain font-medium mb-24 lg:w-2/3 lg:text-6xl">
            Organisation mondiale de la solidarité
          </h1>
          <div className="space-y-8">
            <div className="lg:w-4/5 xl:w-3/5">
              <h3 className="text-xl font-medium uppercase tracking-wider ">
                Description
              </h3>
              <p>
                L'organisation mondiale de la solidarité est une association
                située à Besançon dans l'Est de la France et qui a pour but de
                récolter des dons et aider les personnes dans le besoin.
              </p>
            </div>
            <div className="flex flex-row space-x-24 ">
              <div className="flex flex-col">
                <h3 className="text-xl font-medium uppercase tracking-wider">
                  Stack
                </h3>
                <span>Wordpress</span>
                <span>Elementor</span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-medium uppercase tracking-wider">
                  Liens
                </h3>
                <Link href="#">
                  <a>Site</a>
                </Link>
                <Link href="#">
                  <a>Repo</a>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-medium uppercase tracking-wider">
                Images
              </h3>
              <div className="flex flex-col items-center space-x-3 justify-evenly md:flex-row">
                <div className="rounded-lg shadow-lg overflow-hidden">
                  <Image
                    src="/oms.png"
                    width={1920}
                    height={887}
                    objectFit="contain"
                  />
                </div>
                <div className="rounded-lg shadow-lg  overflow-hidden">
                  <Image
                    src="/oms-mobile.png"
                    width={462}
                    height={887}
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </Section>
      </Main>
    </>
  );
}
