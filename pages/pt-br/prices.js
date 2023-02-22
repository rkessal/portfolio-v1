import Main from "layouts/main";
import Section from "layouts/section";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import ProjectShowcase, {
  ProjectDescriptionText,
  ProjectPresentationText,
} from "components/projectShowcase";
import Footer from "components/footer";
import Navbar from "components/navbar";

function Prices() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Preços</title>
        <meta name="description" content="Errká's Portfolio" />
      </Head>
      <Main home={true}>
        <Navbar />
        <Section>
          <h1 className="uppercase tracking-wider text-4xl text-redMain text-center font-medium mb-16  md:text-left lg:w-2/3 lg:text-6xl">
            Pacote
          </h1>
          <h2 className="uppercase tracking-wider text-3xl text-black text-center font-medium mb-16  md:text-left lg:w-2/3 lg:text-5xl">
            Site de apresentação
          </h2>
          <div className="space-y-6 lg:space-y-12">
            <ProjectDescriptionText title="Plataforma de desenvolvimento">
              <p>
                Site basico, simples:{" "}
                <span className="text-redMain font-medium">
                  WordPress com Elementor
                </span>
              </p>
              <p>
                Site totalmenente personalizado:{" "}
                <span className="text-redMain font-medium">ReactJS</span>
              </p>
            </ProjectDescriptionText>
            <ProjectDescriptionText title="Tempo estimado para o desenvolvimento">
              <p>
                <span className="text-redMain font-medium">3</span> dias
                corridos
              </p>
            </ProjectDescriptionText>
            <ProjectDescriptionText title="O que está incluído">
              <ul>
                <li>
                  <span className="text-redMain">•</span> Infraestrutura por 1
                  ano (Domínio, SSL e Hospedagem)
                </li>
                <li>
                  <span className="text-redMain">•</span> Até 100 contas de
                  email corporativo por 1 ano
                </li>
                <li>
                  <span className="text-redMain">•</span> Adequado para todos os
                  dispositivos (responsive)
                </li>
              </ul>
            </ProjectDescriptionText>
            <ProjectDescriptionText title="Preços">
              <ul>
                <li>
                  <span className="text-redMain">• R$ 850,00</span> -
                  Desenvolvimento
                </li>
                <li>
                  <span className="text-redMain">• R$ 350,00</span> -
                  Infraestrutura
                </li>
              </ul>
            </ProjectDescriptionText>
            <h2 className="uppercase tracking-wider text-3xl text-black text-center font-medium mb-16  md:text-left lg:w-2/3 lg:text-5xl">
              TOTAL: <span className="text-redMain"> R$ 1200,00*</span>
            </h2>
            <p className="text-sm italic">
              *Durante os primeiros 12 meses, depois custa R$ 350,00 por ano
              (infraestrutura).
            </p>
          </div>
        </Section>
        <Footer />
      </Main>
    </>
  );
}

export default Prices;
