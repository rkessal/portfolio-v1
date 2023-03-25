import Section from "../layouts/section";

export default function Hero() {
  return (
    <Section>
      <div className="flex h-[60vh] items-center">
        <h1 className="text-4xl font-medium leading-relaxed lg:text-6xl lg:leading-relaxed xl:w-4/5">
          Je travaille la <span className="text-redMain-500">conception</span>,
          le <span className="text-redMain-500">design</span> et le{" "}
          <span className="text-redMain-500">développement</span> de vos
          produits digitaux.
        </h1>
      </div>
    </Section>
  );
}
