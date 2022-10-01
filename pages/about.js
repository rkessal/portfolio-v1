import Head from "next/head";
import Image from "next/image";
import Main from "../layouts/main";
import Section from "../layouts/section";
import profilePic from "../assets/profile-pic.jpg";
import futsalPic from "../assets/futsal-pic.jpg";
import sfbLogo from "../assets/sfb-logo.png";

export default function About() {
  return (
    <>
      <Head>
        <title>A propos</title>
        <meta name="description" content="Errká's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Main>
        <Section>
          <h1 className="uppercase tracking-wider text-4xl text-redMain font-medium mb-24 lg:w-2/3 lg:text-6xl">
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
                postais des &quot;SpeedArts&quot;. Je me suis orienté ensuite
                vers la programmation et j&apos;ai obtenu mon bac +3 dans le
                développement web et mobile.
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
                  champion. Je fais maintenant du futsal, au Sporting Futsal de
                  Besançon, nous sommes dans le top 10 en france au niveau du
                  nombre de licenciés.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </Main>
    </>
  );
}
