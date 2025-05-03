"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Music from "../music";
export default function Ing() {
  const startDate = new Date("2024-09-28T00:00:00");
  const [elapsed, setElapsed] = useState("");

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const diff = Math.floor((now - startDate) / 1000);
      const years = Math.floor(diff / (3600 * 24 * 365));
      const months = Math.floor((diff % (3600 * 24 * 365)) / (3600 * 24 * 30));
      const days = Math.floor((diff % (3600 * 24 * 30)) / (3600 * 24));
      const hours = Math.floor((diff % (3600 * 24)) / 3600);
      const minutes = Math.floor((diff % 3600) / 60);
      const seconds = diff % 60;
      setElapsed(
        `${
          years !== 0 ? years + " Year - " : ""
        }  ${months} Month - ${days} Day - ${hours} Hour - ${minutes} Minute - ${seconds} Second`
      );
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex flex-col gap-2 bg-white py-4 px-10 rounded-lg">
        <h2 className="text-xl text-center font-semibold">
          💗 Happy Valentine 💗
        </h2>
        <div>
          <h2 className="text-md">To: my precious girl ♡</h2>
          <h2 className="text-md">Form: your sweet boy {"(๑>◡<๑)"}</h2>
        </div>
      </div>

      <Music />

      <div className="flex flex-col gap-2 bg-white py-2 px-10 rounded-full">
        <p className="flex items-center gap-2">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 7.8C5 6.11984 5 5.27976 5.32698 4.63803C5.6146 4.07354 6.07354 3.6146 6.63803 3.32698C7.27976 3 8.11984 3 9.8 3H14.2C15.8802 3 16.7202 3 17.362 3.32698C17.9265 3.6146 18.3854 4.07354 18.673 4.63803C19 5.27976 19 6.11984 19 7.8V21L12 17L5 21V7.8Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          01 - Read me !!!!
        </p>
      </div>

      <div className="text-center flex flex-col items-center gap-8 mb-28">
        <div className="flex gap-5 h-[700px] overflow-hidden rounded-lg">
          <div className="flex flex-col gap-2">
            <Image
              className="rounded-xl"
              src="/2.jpg"
              alt=""
              width={300}
              height={100}
            />
            <div>
              <Image
                className="rounded-xl"
                src="/8.JPEG"
                alt=""
                width={300}
                height={100}
              />
            </div>{" "}
            <Image
              className="rounded-xl"
              src="/2.jpg"
              alt=""
              width={300}
              height={100}
            />
            <div>
              <Image
                className="rounded-xl"
                src="/8.JPEG"
                alt=""
                width={300}
                height={100}
              />
            </div>{" "}
            <Image
              className="rounded-xl"
              src="/2.jpg"
              alt=""
              width={300}
              height={100}
            />
            <div>
              <Image
                className="rounded-xl"
                src="/8.JPEG"
                alt=""
                width={300}
                height={100}
              />
            </div>
          </div>
          <div>
            <Image
              className="rounded-xl"
              src="/1.jpg"
              alt=""
              width={300}
              height={100}
            />
            <Image
              className="rounded-xl"
              src="/9.JPEG"
              alt=""
              width={300}
              height={100}
            />{" "}
            <Image
              className="rounded-xl"
              src="/1.jpg"
              alt=""
              width={300}
              height={100}
            />
            <Image
              className="rounded-xl"
              src="/9.JPEG"
              alt=""
              width={300}
              height={100}
            />{" "}
            <Image
              className="rounded-xl"
              src="/1.jpg"
              alt=""
              width={300}
              height={100}
            />
            <Image
              className="rounded-xl"
              src="/9.JPEG"
              alt=""
              width={300}
              height={100}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Image
              className="rounded-xl"
              src="/6.jpg"
              alt=""
              width={300}
              height={100}
            />
            <Image
              className="rounded-xl"
              src="/4.jpg"
              alt=""
              width={300}
              height={100}
            />
            <Image
              className="rounded-xl"
              src="/6.jpg"
              alt=""
              width={300}
              height={100}
            />
            <Image
              className="rounded-xl"
              src="/4.jpg"
              alt=""
              width={300}
              height={100}
            />
            <Image
              className="rounded-xl"
              src="/6.jpg"
              alt=""
              width={300}
              height={100}
            />
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg mx-5 lg:mx-80">
          <h2 className="text-xl font-semibold">
            Time That Has Passed Since We First Met on September 28, 2024
          </h2>
          <p className="text-lg">{elapsed}</p>

          <p className="mt-10 text-justify">
            Since the first time we met on September 28, 2024, I never thought
            that this internship would become such a meaningful moment. At
            first, I was only focused on tasks and work, but without realizing
            it, feelings started to grow every time we talked and laughed
            together. Now I realize that you have become an important part of my
            life, and I'm really grateful to have known you{"<3"}
          </p>
        </div>
      </div>
    </>
  );
}
