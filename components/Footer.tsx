import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t-[1px] py-4 ">
      <div className="px-5 md:px-10">
        <div className="flex flex-col items-start w-full text-center space-x-0 space-y-5 pb-5 lg:flex-row lg:space-x-64 lg:space-y-0 lg:pb-20">
          <Link scroll={false} href="/">
            <a className="text-redMain-500"> errka.</a>
          </Link>
          <div className="flex flex-col text-left">
            <Link scroll={false} href="/about">
              <a className="hover:underline" aria-label="about">
                A propos
              </a>
            </Link>
            <Link scroll={false} href="/contact">
              <a className="hover:underline" aria-label="contact">
                Contact
              </a>
            </Link>

            <Link scroll={false} href="/privacy-policy">
              <a className="hover:underline" aria-label="linkedin">
                Politique de confidentialité
              </a>
            </Link>
          </div>
          <div className="flex flex-col text-left">
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
        </div>

        <div className="flex flex-row w-full justify-between">
          <a href="mailto:hello@errka.dev" aria-label="contact">
            hello@errka.dev
          </a>
          <h3>Paris, FR</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
