import Head from "next/head";
import React, { FormEvent, useState } from "react";
import Main from "../../layouts/main";
import Section from "../../layouts/section";
import { useRouter } from "next/router";
import sendMessage, { Payload } from "./sendMessage";

type Props = {};

type Status = {
  success: undefined | boolean;
  message: string;
};

function Index({}: Props) {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let payload: Payload = {
      name,
      email,
      message,
    };
    const response = sendMessage(payload);

    if (!response.error) {
      setName("");
      setEmail("");
      setMessage("");
      setStatus({
        success: true,
        message: "Votre message a bien été envoyé. ",
      });
    } else {
      setStatus({
        success: false,
        message: "Une erreur s'est produite, veuillez réessayer plus tard.",
      });
    }
  };

  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Errká's Portfolio" />
      </Head>
      <Main home={false} router={router.asPath}>
        <Section>
          <h1 className="uppercase tracking-wider text-4xl text-redMain-500 text-center font-medium mb-16  md:text-left lg:w-2/3 lg:text-6xl">
            Contact
          </h1>
          <div className="flex flex-col space-y-8 lg:flex-row lg:space-y-0 lg:space-x-4">
            <div className="w-full lg:w-1/3">
              <h2 className="text-xl lg:text-2xl mb-8">
                Un projet ou bien une question ? Vous pouvez me joindre par mail
                ou téléphone, ou bien en remplissant le formulaire.
              </h2>
              <h3 className="text-lg lg:text-xl">
                <span className="font-medium">Email : </span>
                <span className="text-redMain-700">hello@errka.dev</span>
              </h3>
              <h3 className="text-lg lg:text-xl">
                <span className="font-medium">Téléphone:</span>{" "}
                <span className="text-redMain-700">+33 7 83 35 72 82</span>
              </h3>
            </div>
            <form className="w-full lg:w-2/3" onSubmit={(e) => handleSubmit(e)}>
              <div className="flex flex-col gap-4">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-redMain-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="name"
                    className="peer-focus:font-medium absolute text-md lg:text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-redMain-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Votre nom
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="email"
                    name="floating_email"
                    id="floating_email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-redMain-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_email"
                    className="peer-focus:font-medium absolute text-md lg:text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-redMain-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Votre adresse mail
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <textarea
                    rows={4}
                    name="message"
                    id="message"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-redMain-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="message"
                    className="peer-focus:font-medium absolute text-md lg:text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-redMain-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Votre message
                  </label>
                </div>

                <button
                  type="submit"
                  className="text-white bg-redMain-700 hover:bg-redMain-800 focus:ring-4 focus:outline-none focus:ring-redMain-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                >
                  Envoyer
                </button>

                {status && (
                  <div
                    className={`${
                      !status.success && "text-red-500"
                    } font-medium`}
                  >
                    {status.message}
                  </div>
                )}
              </div>
            </form>
          </div>
        </Section>
      </Main>
    </>
  );
}

export default Index;
