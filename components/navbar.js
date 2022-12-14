import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.svg";
import NavbarItem from "./navbarItem";

export default function Navbar() {
  return (
    <nav className="py-5 flex flex-row justify-between items-center ">
      <Link href="/">
        <a>
          <Image src={logo} height={50} width={50} alt="logo" />
        </a>
      </Link>
      <div className="space-x-9">
        <NavbarItem label="about" link="/about">
          A propos
        </NavbarItem>
        <NavbarItem label="contact" link="mailto:hello@errka.dev">
          Contact
        </NavbarItem>
      </div>
    </nav>
  );
}
