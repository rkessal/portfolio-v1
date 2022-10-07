import Section from "../layouts/section";

export default function Hero() {
  return (
    <Section>
      <div className="flex h-[60vh] items-center">
        <h1 className="text-4xl text-redMain font-medium leading-relaxed lg:text-6xl lg:leading-relaxed xl:w-4/5">
          Je travaille la conception, le design et le développement de vos
          produits digitaux.
        </h1>
      </div>
    </Section>
  );
}
