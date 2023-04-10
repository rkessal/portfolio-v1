import Main from "layouts/Main";
import Section from "layouts/Section";
import Head from "next/head";
import { ProjectDescriptionText } from "components/ProjectShowcase";
import PageTitle from "components/PageTitle";

function Prices() {
  return (
    <>
      <Head>
        <title>Preços</title>
        <meta name="description" content="Errká's Portfolio" />
      </Head>
      <Main>
        <Section>
          <PageTitle title="Pacote" />
          <h2 className="uppercase tracking-wider text-3xl text-black text-center font-medium mb-16  md:text-left lg:w-2/3 lg:text-5xl">
            Site de apresentação
          </h2>
          <div className="space-y-6 lg:space-y-12">
            <ProjectDescriptionText title="Plataforma de desenvolvimento">
              <p>
                Site basico, simples:{" "}
                <span className="text-redMain-500 font-medium">
                  WordPress com Elementor
                </span>
              </p>
              <p>
                Site totalmenente personalizado:{" "}
                <span className="text-redMain-500 font-medium">ReactJS</span>
              </p>
            </ProjectDescriptionText>
            <ProjectDescriptionText title="Tempo estimado para o desenvolvimento">
              <p>
                <span className="text-redMain-500 font-medium">3</span> dias
                corridos
              </p>
            </ProjectDescriptionText>
            <ProjectDescriptionText title="O que está incluído">
              <ul>
                <li>
                  <span className="text-redMain-500">•</span> Infraestrutura por
                  1 ano (Domínio, SSL e Hospedagem)
                </li>
                <li>
                  <span className="text-redMain-500">•</span> Até 100 contas de
                  email corporativo por 1 ano
                </li>
                <li>
                  <span className="text-redMain-500">•</span> Adequado para
                  todos os dispositivos (responsive)
                </li>
              </ul>
            </ProjectDescriptionText>
            <ProjectDescriptionText title="Preços">
              <ul>
                <li>
                  <span className="text-redMain-500">• R$ 850,00</span> -
                  Desenvolvimento
                </li>
                <li>
                  <span className="text-redMain-500">• R$ 350,00</span> -
                  Infraestrutura
                </li>
              </ul>
            </ProjectDescriptionText>
            <h2 className="uppercase tracking-wider text-3xl text-black text-center font-medium mb-16  md:text-left lg:w-2/3 lg:text-5xl">
              TOTAL: <span className="text-redMain-500"> R$ 1200,00*</span>
            </h2>
            <p className="text-sm italic">
              *Durante os primeiros 12 meses, depois custa R$ 350,00 por ano
              (infraestrutura).
            </p>
          </div>
        </Section>
      </Main>
    </>
  );
}

export default Prices;
