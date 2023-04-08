import Head from "next/head";
import React, { FormEvent, useState } from "react";
import Main from "../../layouts/main";
import Section from "../../layouts/section";
import { useRouter } from "next/router";
import sendMessage, { Payload } from "../api/contact/contact.service";
import ClipLoader from "react-spinners/ClipLoader";
import PageTitle from "components/pageTitle";

type Status = {
  success: undefined | boolean;
  message: string;
};

const Index = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>({
    success: true,
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    let payload: Payload = {
      name,
      email,
      message,
    };

    const response = await sendMessage(payload);

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

    setIsLoading(false);
  };

  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Errká's Portfolio" />
      </Head>
      <Main home={false} router={router.asPath}>
        <Section>
          <PageTitle title="Contact" />
          <div className="flex flex-col space-y-8 lg:flex-row lg:space-y-0 lg:space-x-4">
            <div className="w-full shrink-0 lg:w-1/2">
              <h2 className="text-xl lg:text-2xl mb-8">
                Un projet ou bien une question ?
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
            <form className="w-full" onSubmit={(e) => handleSubmit(e)}>
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
                    className="block py-4 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-redMain-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="name"
                    className="peer-focus:font-medium absolute text-md lg:text-xl text-black duration-300 transform -translate-y-10 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-redMain-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10"
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
                    className="block py-4 px-0 w-full text-lg text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-redMain-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_email"
                    className="peer-focus:font-medium absolute text-md lg:text-xl text-black duration-300 transform -translate-y-10 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-redMain-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10"
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
                    className="block py-4 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-redMain-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="message"
                    className="peer-focus:font-medium absolute text-md lg:text-xl text-black duration-300 transform -translate-y-10 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-redMain-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10"
                  >
                    Votre message
                  </label>
                </div>

                <button
                  type="submit"
                  className="text-white bg-redMain-700 hover:bg-redMain-800 focus:ring-4 focus:outline-none focus:ring-redMain-300 font-medium text-sm w-full sm:w-auto px-5 py-5 lg:py-8 lg:text-xl text-center "
                >
                  {!isLoading && "Envoyer"}
                  <ClipLoader
                    color="white"
                    loading={isLoading}
                    size={15}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
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
};

export default Index;
