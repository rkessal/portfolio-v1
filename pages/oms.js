import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Main from "../layouts/main";
import Section from "../layouts/section";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function Oms() {
  const [fullscreen, setFullScreen] = useState(false);

  function disableScroll() {}

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
          <div
            className={
              fullscreen
                ? "fixed top-0 right-0 bottom-0 left-0 bg-gray-700 opacity-50 z-20"
                : "hidden"
            }
          />
          <h1 className="uppercase tracking-wider text-4xl text-redMain font-medium mb-24 lg:w-2/3 lg:text-6xl">
            Organisation mondiale de la solidarité
          </h1>
          <div className="space-y-8">
            <div className="lg:w-4/5 xl:w-3/5">
              <h3 className="text-xl font-medium uppercase tracking-wider ">
                Description
              </h3>
              <p>
                L&apos;organisation mondiale de la solidarité est une
                association située à Besançon dans l&apos;Est de la France et
                qui a pour but de récolter des dons et aider les personnes dans
                le besoin.
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
                <Link href="http://organisationmondialedelasolidarite.com/">
                  <a>Site</a>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-medium uppercase tracking-wider">
                Images
              </h3>
              <div className="flex flex-col grid-cols-5 auto-rows-min space-y-3 md:gap-3 md:space-y-0 md:grid ">
                <div className="rounded-lg shadow-lg overflow-hidden w-full md:col-span-4 ">
                  <Zoom>
                    <Image
                      src="/oms.png"
                      layout="responsive"
                      width={1920}
                      height={887}
                    />
                  </Zoom>
                </div>
                <div className="rounded-lg shadow-lg overflow-hidden w-full md:col-span-1">
                  <Zoom>
                    <Image
                      src="/oms-mobile.png"
                      layout="responsive"
                      width={450}
                      height={887}
                    />
                  </Zoom>
                </div>
                <div className="rounded-lg shadow-lg overflow-hidden w-full md:col-span-4 md:order-2">
                  <Zoom>
                    <Image
                      src="/oms-2.png"
                      layout="responsive"
                      width={1920}
                      height={887}
                    />
                  </Zoom>
                </div>
                <div className="rounded-lg shadow-lg overflow-hidden w-full md:col-span-1">
                  <Zoom>
                    <Image
                      src="/oms-2-mobile.png"
                      layout="responsive"
                      width={450}
                      height={887}
                    />
                  </Zoom>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </Main>
    </>
  );
}
