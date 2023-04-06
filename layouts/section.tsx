import { LegacyRef, MutableRefObject, useRef } from "react";

type Prop = {
  ref?: LegacyRef<HTMLElement>;
  children: JSX.Element[] | JSX.Element;
};
export default function Section({ ref, children }: Prop) {
  return (
    <section ref={ref} className="py-16">
      {children}
    </section>
  );
}
