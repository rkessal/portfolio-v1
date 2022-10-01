import Head from "next/head";
import Image from "next/image";
import Main from "../layouts/main";
import Section from "../layouts/section";
import profilePic from "../assets/profile-pic.jpg";

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
          <div className="flex flex-col items-center md:items-start">
            <div className="flex flex-col items-center space-x-0 space-y-16 text-center md:text-left md:space-y-0 md:space-x-20 md:flex-row ">
              <div className="relative rounded-full overflow-hidden h-60 w-60 md:rounded-none md:h-64">
                <Image src={profilePic} layout="fill" objectFit="cover" />
              </div>
              <p className="md:max-w-md">
                Je m'appelle Rayhan et je suis développeur web/mobile,
                originaire de Besançon qui se situe dans la magnifique région de
                Franche-Comté. J'ai toujours été passionné par le design
                graphique et j'ai mis mes mains sur Photoshop à l'age de 13 ans.
                J'ai commencé en faisant des bannières et des logos, puis j'ai
                ouvert une chaine sur YouTube ou je postais des "SpeedArts". Je
                me suis orienté ensuite vers la programmation et j'ai obtenu mon
                bac +3 dans le développement web et mobile.
              </p>
            </div>
          </div>
        </Section>
      </Main>
    </>
  );
}
