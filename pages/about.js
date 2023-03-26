import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import futsalPic from "../assets/futsal-pic.jpg";
import logoCrous from "../assets/logo-crous.png";
import logoGBM from "../assets/logo-gbm.svg";
import logoIUTBM from "../assets/logo-iutbm.jpg";
import logoJulesHaag from "../assets/logo-juleshaag.png";
import logoLGBM from "../assets/logo-logegbm.jpg";
import logoPergaud from "../assets/logo-pergaud.bmp";
import logoYt from "../assets/logo-yt.png";
import logo from "../assets/logo.svg";
import profilePic from "../assets/profile-pic.jpg";
import sfbLogo from "../assets/sfb-logo.png";
import Position from "../components/position";
import Main from "../layouts/main";
import Section from "../layouts/section";
import { useRef } from "react";
import {
  motion,
  scrollYProgress,
  useTransform,
  useScroll,
} from "framer-motion";

export default function About() {
  const router = useRouter();

  const variants = {
    hidden: {
      opacity: 0,
      x: 0,
      y: router !== undefined ? 100 : 0,
    },
    enter: { opacity: 1, x: 0, y: 0, scale: 1 },
    exit: {
      opacity: 0,
      y: router !== undefined ? 100 : 0,
    },
  };

  const ref1 = useRef(null);
  const { scrollYProgress: scroll1 } = useScroll({
    target: ref1,
    offset: ["end end", "start end"],
  });

  const ref2 = useRef(null);
  const { scrollYProgress: scroll2 } = useScroll({
    target: ref2,
    offset: ["end end", "start end"],
  });

  const y1 = useTransform(scroll1, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scroll2, [0, 1], ["0%", "30%"]);

  return (
    <>
      <Head>
        <title>A propos</title>
        <meta name="description" content="Errká's Portfolio" />
      </Head>
      <Main router={router.asPath}>
        <Section>
          <h1 className="uppercase tracking-wider text-4xl text-redMain-500 text-center font-medium mb-16  md:text-left lg:w-2/3 lg:text-6xl">
            Qui suis-je ?
          </h1>
          <div className="flex flex-col items-center space-y-16 text-left md:items-start">
            <div className="w-full" ref={ref1}>
              <motion.div
                style={{ y: y1 }}
                className=" relative overflow-hidden h-96 w-full lg:w-4/5 md:h-[90vh]"
              >
                <Image
                  src={profilePic}
                  layout="fill"
                  objectFit="cover"
                  alt="Rayhan"
                  style={{ filter: "grayscale(80%)" }}
                />
              </motion.div>
            </div>
            <div className="flex flex-col space-y-2 max-w-2xl text-xl leading-normal 2xl:max-w-3xl lg:leading-relaxed lg:text-2xl">
              <h2 className="hidden text-4xl font-medium lg:block">
                Je m&apos;appelle Rayhan
              </h2>
              <p className="lg:max-w-lg xl:max-w-xl leading-loose">
                <span className="lg:hidden">Je m&apos;appelle Rayhan </span> et
                je suis{" "}
                <span className="font-medium text-redMain-500">
                  Ingénieur d&apos;Etudes et Développement{" "}
                </span>
                chez{" "}
                <Link href="https://www.hn-services.com/en/">
                  <a target="_blank" className="underline">
                    HN Services
                  </a>
                </Link>
                , originaire de Besançon qui se situe dans la magnifique région
                de Franche-Comté.
              </p>
              <p className="lg:max-w-lg xl:max-w-xl leading-loose">
                J&apos;ai toujours été passionné par le design graphique et
                j&apos;ai mis mes mains sur Photoshop à l&apos;age de 13 ans.
                J&apos;ai commencé en faisant des bannières et des logos, puis
                j&apos;ai ouvert une chaine sur YouTube ou je postais des{" "}
                &quot;SpeedArts&quot; .
              </p>
              <p className="lg:max-w-lg xl:max-w-xl leading-loose">
                Je me suis orienté ensuite vers la programmation et j&apos;ai
                obtenu ma licence dans le développement web et mobile.
              </p>
            </div>
          </div>
        </Section>
        <Section>
          <h1 className="uppercase tracking-wider text-4xl text-redMain-500 text-center font-medium mb-12 md:text-left lg:w-2/3 lg:text-6xl">
            En dehors du travail
          </h1>
          <div className="flex flex-col items-center space-y-16 text-left md:items-start">
            <div className="w-full" ref={ref2}>
              <motion.div
                style={{ y: y2 }}
                className="relative overflow-hidden h-96 w-full md:h-[90vh]"
              >
                <Image
                  src={futsalPic}
                  layout="fill"
                  objectFit="cover"
                  alt="Rayhan"
                  style={{ filter: "grayscale(80%)" }}
                />
              </motion.div>
            </div>

            <div className="flex flex-col space-y-2 max-w-2xl text-xl leading-normal 2xl:max-w-3xl lg:leading-relaxed lg:text-2xl">
              <div className="hidden lg:block">
                <Image src={sfbLogo} height={80} width={80} alt="sfb's logo" />
              </div>
              <p className="lg:max-w-lg xl:max-w-xl leading-loose">
                Je fais du foot depuis mes 6 ans, j&apos;ai passé la majorité de
                mon enfance à l&apos;ASPTT Besançon.
              </p>
              <p className="lg:max-w-lg xl:max-w-xl leading-loose">
                J&apos;ai joué ensuite au PSB, ou nous avons été promu en R1, et
                par la suite fini champions. Je fais maintenant du futsal, au{" "}
                <Link
                  href="https://www.instagram.com/sportingfutsalbesancon/?hl=en"
                  aria-label="sporting futsal besancon"
                >
                  <a target="_blank">
                    <span className="underline">
                      Sporting Futsal de Besançon
                    </span>
                  </a>
                </Link>
                , nous sommes dans le top 10 en France au niveau du nombre de
                licenciés.
              </p>

              <p className="lg:max-w-lg xl:max-w-xl leading-loose">
                Je suis aussi un fan des sports de combats, comme la boxe ou le
                jiu jitsu brésilien et je suis ceinture marron de full-contact.
                Ceintures que j&apos;ai passées au{" "}
                <Link href="https://www.besac.com/besancon-full-self-defense-boxe-besancon-sponsor-459.php">
                  <a className="underline" target="_blank">
                    Besançon Self Défense
                  </a>
                </Link>
                .
              </p>
            </div>
          </div>
        </Section>
        <Section>
          <h1 className="uppercase tracking-wider text-4xl text-redMain-500 text-center font-medium mb-12 md:text-left lg:w-2/3 lg:text-6xl">
            Experience
          </h1>
          <div className="flex flex-col space-y-6">
            <Position title="Développeur Web" company="Freelance" date="2022">
              <Image src={logo} height={70} width={70} alt="logo" />
            </Position>

            <Position
              title="Technicien Informatique"
              company="Loge.GBM"
              date="Jan. 2022 - Oct. 2022"
            >
              <Image src={logoLGBM} height={38} width={70} alt="logo" />
            </Position>
            <Position
              title="Développeur Web/Mobile"
              company="Grand Besancon Métropole"
              date="Mars 2022 - Juin 2022"
            >
              <Image src={logoGBM} height={70} width={70} alt="logo" />
            </Position>
            <Position
              title="Développeur Web"
              company="Crous BFC"
              date="Fév. 2019 – Avril 2019, Juin 2018"
            >
              <Image src={logoCrous} height={70} width={70} alt="logo" />
            </Position>
            <Position
              title="Designer Graphique"
              company="Freelance"
              date="2012 - 2014"
            >
              <Image src={logoYt} height={70} width={70} alt="logo" />
            </Position>
          </div>
        </Section>
        <Section>
          <h1 className="uppercase tracking-wider text-4xl text-redMain-500 text-center font-medium mb-12 md:text-left lg:w-2/3 lg:text-6xl">
            Education
          </h1>
          <div className="flex flex-col space-y-6">
            <Position
              title="Licence Professionnelle - Mobilité Numérique"
              company="IUT Belfort-Montbéliard"
              date="2020"
            >
              <Image src={logoIUTBM} height={80} width={70} alt="logo" />
            </Position>
            <Position
              title="BTS - Services Informatiques aux Organisations"
              company="Lycée Louis Pergaud"
              date="2019"
            >
              <Image src={logoPergaud} height={62} width={70} alt="logo" />
            </Position>
            <Position
              title="Baccalauréat - STI2D"
              company="Lycée Jules Haag"
              date="2018"
            >
              <Image src={logoJulesHaag} height={30} width={70} alt="logo" />
            </Position>
          </div>
        </Section>
      </Main>
    </>
  );
}
