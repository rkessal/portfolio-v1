import PageTitle from "components/pageTitle";
import { ProjectPresentationText } from "components/projectShowcase";
import { ProjectDescriptionText } from "components/projectShowcase";
import Main from "layouts/main";
import Section from "layouts/section";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

const Index = (props: Props) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Politique de confidentialité</title>
        <meta name="description" content="Errká's Portfolio" />
      </Head>
      <Main home={false} router={router.asPath}>
        <Section>
          <PageTitle title="Politique de confidentialité" />

          <div className="min-h-[40vh]">
            <ProjectPresentationText>
              Je prends la protection de vos données personnelles très au
              sérieux. Cette politique de confidentialité décrit comment je
              recueille, utilise et protège les informations que vous me
              fournissez via mon site web.
            </ProjectPresentationText>
          </div>
          <div className="space-y-16 lg:space-y-24">
            <ProjectDescriptionText title="Collecte d'informations personnelles">
              <p>
                Lorsque vous utilisez mon formulaire de contact, je peux
                recueillir votre nom, votre adresse e-mail et votre message. Ces
                informations sont utilisées uniquement pour répondre à votre
                demande et ne seront pas partagées avec des tiers sans votre
                consentement préalable.
              </p>
            </ProjectDescriptionText>

            <ProjectDescriptionText title="Utilisation des informations personnelles">
              <p>
                Je n&apos;utilise les informations que vous me fournissez que
                dans le but de répondre à vos demandes spécifiques. Je ne les
                utiliserai pas pour vous envoyer des informations non
                sollicitées ni ne les partagerai avec des tiers sans votre
                consentement préalable.
              </p>
            </ProjectDescriptionText>

            <ProjectDescriptionText title="Cookies et autres technologies de suivi">
              <p>
                Je n&apos;utilise pas de cookies ou d&apos;autres technologies
                de suivi pour collecter des informations personnelles sur les
                visiteurs de mon site web.
              </p>
            </ProjectDescriptionText>

            <ProjectDescriptionText title="Modifications de ma politique de confidentialité">
              <p>
                Je me réserve le droit de modifier cette politique de
                confidentialité à tout moment. Tout changement sera affiché sur
                cette page.
              </p>
            </ProjectDescriptionText>
            <ProjectDescriptionText title="Contact">
              <p>
                Si vous avez des questions ou des préoccupations concernant ma
                politique de confidentialité, veuillez me contacter à
                l&apos;adresse e-mail suivante : hello@errka.dev.
              </p>
            </ProjectDescriptionText>
          </div>
        </Section>
      </Main>
    </>
  );
};

export default Index;
