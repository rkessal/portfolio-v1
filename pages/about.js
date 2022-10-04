import Head from "next/head";
import Image from "next/image";
import Main from "../layouts/main";
import Section from "../layouts/section";
import Link from "next/link";
import profilePic from "../assets/profile-pic.jpg";
import futsalPic from "../assets/futsal-pic.jpg";
import sfbLogo from "../assets/sfb-logo.png";
import logoLGBM from "../assets/logo-logegbm.jpg";
import logo from "../assets/logo.svg";
import logoGBM from "../assets/logo-gbm.svg";
import logoCrous from "../assets/logo-crous.png";
import logoYt from "../assets/logo-yt.png";
import logoPergaud from "../assets/logo-pergaud.bmp";
import logoIUTBM from "../assets/logo-iutbm.jpg";
import logoJulesHaag from "../assets/logo-juleshaag.png";
import BackToHome from "../components/backToHome";
import { useRouter } from "next/router";
import Position from "../components/position";

export default function About() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>A propos</title>
        <meta name="description" content="Errká's Portfolio" />
      </Head>
      <Main router={router.asPath}>
        <Section>
          <BackToHome />
          <h1 className="uppercase tracking-wider text-4xl text-redMain text-center font-medium mb-12  md:text-left lg:w-2/3 lg:text-6xl">
            Qui suis-je ?
          </h1>
          <div className="flex flex-col items-center space-y-16 md:items-start">
            <div className="flex flex-col items-center space-y-8 text-center md:text-left md:space-y-0 md:space-x-20 md:flex-row ">
              <div className="relative rounded-full overflow-hidden h-60 w-60 md:rounded-md md:h-64">
                <Image src={profilePic} layout="fill" objectFit="cover" />
              </div>
              <p className="md:max-w-md">
                Je m&apos;appelle Rayhan et je suis développeur web/mobile,
                originaire de Besançon qui se situe dans la magnifique région de
                Franche-Comté. J&apos;ai toujours été passionné par le design
                graphique et j&apos;ai mis mes mains sur Photoshop à l&apos;age
                de 13 ans. J&apos;ai commencé en faisant des bannières et des
                logos, puis j&apos;ai ouvert une chaine sur YouTube ou je
                postais des{" "}
                <Link href="https://www.youtube.com/user/PozenGFX">
                  <a className="underline">&quot;SpeedArts&quot;</a>
                </Link>
                . Je me suis orienté ensuite vers la programmation et j&apos;ai
                obtenu mon bac +3 dans le développement web et mobile.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-8 w-full text-center md:flex-row-reverse md:max-w-4xl md:text-right">
              <div className="relative w-full h-80 rounded-md overflow-hidden md:w-1/2 md:ml-20">
                <Image
                  className="scale-125"
                  src={futsalPic}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <div>
                  <Image src={sfbLogo} height={80} width={80} />
                </div>
                <p className="md:max-w-md">
                  Je fais du foot depuis mes 6 ans, j&apos;ai passé la majorité
                  de mon enfance à l&apos;ASPTT Besançon. J&apos;ai joué ensuite
                  au PSB, ou nous avons été promu en R1, et par la suite fini
                  champion. Je fais maintenant du futsal, au{" "}
                  <Link
                    href="https://www.instagram.com/sportingfutsalbesancon/?hl=en"
                    aria-label="sporting futsal besancon"
                  >
                    <a>
                      <span className="underline">
                        Sporting Futsal de Besançon
                      </span>
                    </a>
                  </Link>
                  , nous sommes dans le top 10 en France au niveau du nombre de
                  licenciés.
                </p>
              </div>
            </div>
          </div>
        </Section>
        <div className="flex flex-col lg:flex-row lg:space-x-32">
          <Section>
            <h1 className="uppercase tracking-wider text-4xl text-redMain text-center font-medium mb-12 md:text-left lg:w-2/3 lg:text-6xl">
              Experience
            </h1>
            <div className="flex flex-col space-y-6">
              <Position title="Développeur Web" company="Freelance" date="2022">
                <Image src={logo} height={70} width={70} alt="logo" />
              </Position>

              <Position
                title="Technicien Informatique"
                company="Loge.GBM"
                date="Jan. 2022 - Octobre 2022"
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
                date="Fev 2019 – Avril 2019, Juin 2018"
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
            <h1 className="uppercase tracking-wider text-4xl text-redMain text-center font-medium mb-12 md:text-left lg:w-2/3 lg:text-6xl">
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
        </div>
      </Main>
    </>
  );
}
