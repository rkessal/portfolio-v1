import Link from "next/link";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Section from "../layouts/section";

export default function Footer() {
  return (
    <footer className="border-t-[1px]  py-4 ">
      <div className="container mx-auto px-5">
        <div className="flex flex-col items-start w-full text-center space-y-5 text-redMain-500 pb-10 lg:flex-row lg:justify-between lg:space-y-0 lg:pb-20">
          <h3 className="hidden lg:block">errka.</h3>
          <div className="flex flex-col text-left lg:w-1/2 lg:pr-16 ">
            <Link href="https://github.com/rkessal">
              <a
                target="_blank"
                className="hover:underline"
                aria-label="github"
              >
                Github
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/rayhan-kessal/">
              <a
                target="_blank"
                className="hover:underline"
                aria-label="linkedin"
              >
                Linkedin
              </a>
            </Link>
            <Link href="https://www.instagram.com/rayhanksl/">
              <a
                target="_blank"
                className="hover:underline"
                aria-label="linkedin"
              >
                Instagram
              </a>
            </Link>
          </div>
          <h3 className="text-black">Paris, FR</h3>
        </div>

        <a href="mailto:hello@errka.dev" aria-label="contact">
          hello@errka.dev
        </a>
      </div>
    </footer>
  );
}
