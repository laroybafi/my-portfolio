import React from "react";
import userData from "@constants/data";

export default function Contact() {
  return (
    <section>
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
        </div>
      </div>
      <div className="relative z-10 rounded-md shadow-md p-4 md:p-10 lg:p-20 max-w-6xl mx-auto -mt-4 mb-96">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center sm:text-left mb-24">
          <header>
            <h1 className="text-black dark:text-gray-50 font-semibold text-2xl">
              Get in touch, let's talk.
            </h1>
            <p className="text-black text-base dark:text-gray-200 mt-2">
              Feel free to send me an{" "}
              <a
                href={`mailto:${userData.email}`}
                className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
              >
                email
              </a>{" "}
              or schedule a{" "}
              <a
                href="https://calendly.com/bryllim/consultation"
                target="_blank"
                className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
              >
                free consultation
              </a>{" "}
              with me.
            </p>
            <p className="mt-10">bryllim@gmail.com</p>
          </header>
        </div>
      </div>
    </section>
  );
}