import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t-[1px] py-4 ">
      <div className="px-5 md:px-10">
        <div className="flex flex-col items-start w-full text-center space-y-5 lg:flex-row lg:justify-between lg:space-y-0 lg:pb-20">
          <Link href="/">
            <a className="hidden lg:block text-redMain-500"> errka.</a>
          </Link>
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

        <div className="flex flex-col lg:flex-row w-full justify-between">
          <a href="mailto:hello@errka.dev" aria-label="contact">
            hello@errka.dev
          </a>

          <Link href="/privacy-policy">
            <a className="hover:underline" aria-label="linkedin">
              Politique de confidentialité
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
