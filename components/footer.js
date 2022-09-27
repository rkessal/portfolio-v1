import Link from "next/link";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Section from "../layouts/section";

export default function Footer() {
  return (
    <footer className="border-t-[1px] py-4 flex flex-col items-start text-center space-y-5 text-redMain lg:flex-row lg:justify-between lg:items-center lg:space-y-0">
      <a href="mailto:kessal.rayhan25@gmail.com" aria-label="contact">
        kessal.rayhan25@gmail.com
      </a>
      <h3>Besancon, FR</h3>
      <div className="flex flex-row space-x-2">
        <Link href="https://github.com/rkessal" aria-label="github">
          <a>
            <AiFillGithub size={30} color="#630000" />
          </a>
        </Link>
        <Link
          href="https://www.linkedin.com/in/rayhan-kessal/"
          aria-label="linkedin"
        >
          <a>
            <AiFillLinkedin size={30} color="#630000" />
          </a>
        </Link>
      </div>
    </footer>
  );
}
