import Link from "next/link";

export default function NavbarItem({ label, link, children }) {
  return (
    <Link href={link} scroll={false} aria-label={label}>
      <a className="font-medium text-redMain text-xl"> {children}</a>
    </Link>
  );
}
