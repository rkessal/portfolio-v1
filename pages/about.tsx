import { motion, useScroll, useTransform } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";
import futsalPic from "../assets/futsal-pic.jpg";
import profilePic from "../assets/profile-pic.jpg";
import PageTitle from "../components/pageTitle";
import Main from "../layouts/main";
import Section from "../layouts/section";
import AnimatedImage from "components/AnimatedImage";

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
          <PageTitle title="Errka" />
          <div className="flex flex-col space-y-16">
            <PresentationSection isFirst title="Qui je suis.">
              <p className="leading-8">
                Je m&apos;appelle Rayhan et je suis originaire de Besançon qui
                se situe dans la magnifique région de Franche-Comté. Je suis{" "}
                <span className="font-medium text-redMain-500">
                  Ingénieur d&apos;Etudes et Développement{" "}
                </span>
                chez{" "}
                <Link href="https://www.hn-services.com/en/">
                  <a target="_blank" className="underline">
                    HN Services
                  </a>
                </Link>
                .
              </p>
            </PresentationSection>
            <PresentationSection title="Ce que j'aime.">
              <p className="leading-8">
                J&apos;ai toujours été passionné par le design graphique et
                j&apos;ai mis mes mains sur Photoshop à l&apos;age de 13 ans.
                J&apos;ai commencé en faisant des bannières et des logos, puis
                j&apos;ai ouvert une chaine sur YouTube ou je postais des{" "}
                &quot;SpeedArts&quot; .
              </p>
            </PresentationSection>
            <PresentationSection title="Ce que je fais.">
              <p className="leading-8">
                Je me suis orienté ensuite vers la programmation et j&apos;ai
                obtenu ma licence dans le développement web et mobile. Je passe
                mon temps à concevoir, designer et développer les idées qui me
                passent pas la tête et celles de mes clients.
              </p>
            </PresentationSection>
            <div className="overflow-hidden h-[80vh] w-full lg:w-2/3">
              <AnimatedImage>
                <Image
                  src={profilePic}
                  layout="fill"
                  objectFit="cover"
                  alt="Rayhan"
                  style={{ filter: "grayscale(80%)" }}
                  priority
                />
              </AnimatedImage>
            </div>
          </div>
        </Section>
        <Section>
          <PageTitle title="En dehors du travail" />

          <div className="flex flex-col space-y-16">
            <PresentationSection title="Le foot.">
              <p className="leading-8">
                Je fais du foot depuis mes 6 ans, j&apos;ai passé la majorité de
                mon enfance à l&apos;ASPTT Besançon.
              </p>
              <p className="leading-8">
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
            </PresentationSection>
            <PresentationSection title="Les arts martiaux.">
              <p className="leading-8">
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
            </PresentationSection>
            <div className="overflow-hidden h-[80vh] w-full lg:w-2/3">
              <AnimatedImage>
                <Image
                  src={futsalPic}
                  layout="fill"
                  objectFit="cover"
                  alt="Rayhan"
                  style={{ filter: "grayscale(80%)" }}
                  priority
                />
              </AnimatedImage>
            </div>
          </div>
        </Section>
        <Section>
          <PageTitle title="Expérience" />
          <div className="flex flex-col space-y-16">
            <PresentationSection
              title="Déc. 2022 à ce jour"
              subtitle="HN Services"
            >
              <h2 className="font-semibold">
                Ingénieur d&apos;étude et développement
              </h2>
              <p className="leading-8">
                Au sein du Pôle Projet, participation au développement du projet
                ‘Ticketing’ (Projet d’industrialisation des outils de
                gouvernances des prestations à engagements d’HN Services)
              </p>
            </PresentationSection>
            <PresentationSection title="Sept. 2022 à ce jour" subtitle="Errka">
              <h2 className="font-semibold">
                Développeur Full Stack Freelance
              </h2>
              <p className="leading-8">
                Conception, design et développement de solutions digitales.
                Création de visuels (Branding, UX, UI), applications mobiles et
                sites e-commerce.
              </p>
            </PresentationSection>
            <PresentationSection
              title="Janv. 2022 à Oct. 2022"
              subtitle="LogeGBM"
            >
              <h2 className="font-semibold">Technicien informatique</h2>
              <p className="leading-8">
                Maintenance informatique de niveau 1, recueil des
                besoins/demandes utilisateur, suivi du parc informatique fixe,
                mobile et impression, gestion du renouvellement du parc
                téléphonie mobile.
              </p>
            </PresentationSection>
            <PresentationSection
              title="Mars 2021 à Juin 2021"
              subtitle="Grand Besancon Metropole"
            >
              <h2 className="font-semibold">Développeur Web/Mobile</h2>
              <p className="leading-8">
                Développement d&apos;une application Android et web qui facilite
                l&apos;accès aux plans des bâtiments de Besançon.
              </p>
            </PresentationSection>
            <PresentationSection
              title="Fév. 2019 – Avr. 2019, Juin 2018"
              subtitle="Les Crous"
            >
              <h2 className="font-semibold">Développeur Web/Mobile</h2>
              <p className="leading-8">
                Développement de deux applications web.
              </p>

              <p className="leading-8">
                Une application de gestion des salles de réunion ainsi
                qu&apos;une application de gestion des véhicules du Crous de
                Besancon.
              </p>
            </PresentationSection>
          </div>
        </Section>
      </Main>
    </>
  );
}

type PresentationDescriptionProps = {
  title: string;
  children: JSX.Element | JSX.Element[];
  subtitle?: string;
  isFirst?: boolean;
};

export const PresentationSection = ({
  title,
  children,
  subtitle,
}: PresentationDescriptionProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end 65%", "start end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);

  return (
    <div
      ref={ref}
      className="flex flex-col md:h-[40vh] lg:h-[55vh] space-y-5 md:flex-row md:space-y-0  border-t-[1px] pt-4 md:pt-10"
    >
      <motion.div className="w-full" style={{ y }}>
        {title && <h2 className="text-redMain-500 font-medium">{title}</h2>}
        {subtitle && <h2 className="font-italic">{subtitle}</h2>}
      </motion.div>
      <div className="w-full md:w-4/5">
        <motion.div
          style={{ y }}
          className="flex flex-col space-y-2 text-xl lg:text-2xl"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};
