import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import { providers, signIn, getSession, csrfToken } from "next-auth/client";

export default function Signin({ providers, csrfToken }) {
  return (
    <>
      <Head>
        <title>PureTony Sign in</title>
        <meta
          name="description"
          content="Sign in with your social media account."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex" />
      </Head>
      <div className="flex sm:flex-row flex-col max-w-screen h-screen">
        <div className="sm:w-2/5 py-5 sm:py-0 bg-gradient-to-b from-green-50 to-green-200 font-rubik">
          <div className="text-center sm:mt-40 px-10">
            <h2 className="sm:text-6xl text-4xl font-bold text-gray-900">
              Welcome!
            </h2>
            <h4 className="text-2xl mt-10 text-gray-800">
              Keep track of your orders by quickly logging in.
            </h4>
            <div className="mt-10 flex-col">
              <Link href="/">
                <p className="text-md text-gray-600 cursor-pointer hover:text-gray-400 transition duration-150">
                  ...or go back to home page.
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="sm:w-3/5 text-center font-rubik mt-10 sm:mt-40">
          <h2 className="text-green-400 text-2xl font-bold">
            Choose a log in method
          </h2>
          <div className="mt-10 flex flex-col">
            {Object.values(providers).map((provider) => {
              if (provider.name === "Email") {
                return;
              }
              return (
                <span className="mb-4 transform text-green-900 duration-100 hover:text-green-500">
                  <button
                    className="hover:bg-transparent focus:outline-none"
                    onClick={() => signIn(provider.id)}
                  >
                    <div className="sm:w-80 w-48 justify-around rounded-xl shadow-md flex mx-auto p-2 border border-green-100">
                      <div className="w-1/4">
                        <p className=" text-xl">{provider.name}</p>
                      </div>
                      <div className="w-1/4">
                        <Image
                          src={`/icons/${provider.name}.svg`}
                          width={25}
                          height={25}
                          className=""
                        />
                      </div>
                    </div>
                  </button>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

Signin.getInitialProps = async (context) => {
  const { req, res } = context;
  const session = await getSession({ req });

  if (session && res && session.accessToken) {
    res.writeHead(302, {
      Location: "/",
    });
    res.end();
    return;
  }

  return {
    session: undefined,
    providers: await providers(context),
    csrfToken: await csrfToken(context),
  };
};
