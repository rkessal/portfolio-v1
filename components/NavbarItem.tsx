import Link from "next/link";

type Props = {
  label: string;
  link: string;
  children: string;
};

const NavbarItem = ({ label, link, children }: Props) => {
  return (
    <Link href={link} scroll={false} aria-label={label}>
      <a className="font-medium text-redMain-500 text-xl">{children}</a>
    </Link>
  );
};

export default NavbarItem;
