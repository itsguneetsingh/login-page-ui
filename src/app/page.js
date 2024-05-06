import React from "react";
import Image from "next/image";
import "./stylesheet.css";
import Link from "next/link";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <div className="flex justify-center text-white items-center min-h-screen bg-neutral-900">
        <div className="bg-neutral-800 text-white px-9 py-4 max-w-sm flex flex-col items-center rounded-lg">
          <Image
            src="/avatar-jessica.jpeg"
            height={70}
            width={70}
            className="rounded-full m-4"
          />
          <span className="text-xl text-white font-semibold m-1">
            Jessica Randall
          </span>
          <span className="text-xs font-bold m-1 text-lime-300">
            London, United Kingdom
          </span>
          <span className=" text-xs text-white m-4">
            "Front-end developer and avid reader."
          </span>
          <Link href="https://github.com/itsguneetsingh" class="social-media">
            GitHub
          </Link>
          <Link
            href="https://www.frontendmentor.io/profile/itsguneetsingh"
            class="social-media"
          >
            Frontend Mentor
          </Link>
          <Link
            href="https://linkedin.com/in/itsguneetsingh"
            class="social-media"
          >
            LinkedIn
          </Link>
          <Link
            href="https://developer.twitter.com/en/404"
            class="social-media"
          >
            Twitter
          </Link>
          <Link
            href="https://www.instagram.com/itsguneetsingh/"
            class="social-media"
          >
            Instagram
          </Link>
        </div>
      </div>
      <center>
        <div className="font-lg text-white bg-neutral-900">
          Challenge by{" "}
          <Link
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </Link>
          . Coded by <a href="#">Guneet Singh</a>.
        </div>
      </center>
    </>
  );
};

export default Home;
