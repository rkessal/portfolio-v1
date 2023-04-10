import { LegacyRef } from "react";

type Prop = {
  ref?: LegacyRef<HTMLElement>;
  children: JSX.Element[] | JSX.Element;
};
const Section = ({ ref, children }: Prop) => {
  return (
    <section ref={ref} className="py-16">
      {children}
    </section>
  );
};

export default Section;
