"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
export default function Home() {
  const startDate = new Date("2024-09-28T00:00:00");
  const [elapsed, setElapsed] = useState("");
  const [Things, setThings] = useState([
    { first: "🌸 Aku suka bagaimana", last: "kau lucu (๑>؂•̀๑)" },
    {
      first: "🌸 Aku suka bagaimana",
      last: "kau bekerja keras (๑`^´๑)",
    },
    { first: "🌸 Aku suka senyummu yang", last: "cerah (๑>◡<๑)" },
    { first: "🌸 Aku suka bagaimana", last: "kau peduli (,,>_<,,)" },
    { first: "🌸 Aku suka bagaimana", last: "kau baik hati (✿◡‿◡)" },
    { first: "🌸 Aku suka suaramu", last: "♪(๑ᴖ◡ᴖ๑)♪" },
    { first: "🌸 Aku suka bagaimana", last: "kau kuat (ง •̀_•́)ง" },
    { first: "🌸 Aku suka", last: "tawamu yang menggemaskan (๑˃́ꇴ˂̀๑)" },
    { first: "🌸 Aku suka hatimu yang", last: "lembut (✿◕‿◕)" },
    {
      first: "🌸 Aku suka bagaimana",
      last: "kau membuat dunia menjadi lebih baik (✿´‿`)",
    },
    {
      first: "🌸 Aku suka bagaimana",
      last: "kau mencerahkan hariku (｡♥‿♥｡)",
    },
    { first: "🌸 Aku suka", last: "ekspresimu yang imut (o ´▽` o)" },
    { first: "🌸 Aku suka", last: "pelukanmu yang hangat (づ￣ ³￣)づ" },
    { first: "🌸 Aku suka", last: "kepribadianmu yang unik (๑>◡<๑)" },
    {
      first: "🌸 Aku suka bagaimana",
      last: "kau tak pernah menyerah (๑•̀ㅂ•́)و✧",
    },
    { first: "🌸 Aku suka", last: "semangatmu (ﾉ>ω<)ﾉ" },
  ]);

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
          years !== 0 ? years + " Tahun - " : ""
        }  ${months} Bulan - ${days} Hari - ${hours} Jam - ${minutes} Menit - ${seconds} Detik`
      );
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center gap-8 pt-12 ">
      <div className="flex flex-col gap-2 bg-white py-4 px-10 rounded-lg">
        <h2 className="text-xl text-center font-semibold">
          💗 Selamat Hari Valentine 💗
        </h2>
        <div>
          <h2 className="text-md">Untuk: gadisku yang berharga ♡</h2>
          <h2 className="text-md">Dari: pacarmu yang manis {"(๑>◡<๑)"}</h2>
        </div>
      </div>

      <div>
        <iframe
          src="https://open.spotify.com/embed/track/3be9ACTxtcL6Zm4vJRUiPG?utm_source=generator"
          width="100%"
          height="90"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>

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
          01 - Baca aku !!!!
        </p>
      </div>

      <div className="text-center flex flex-col items-center gap-8 ">
        <div className="flex gap-5 h-[700px] overflow-hidden rounded-lg">
          <div className="flex flex-col gap-2">
            <Image
              className="rounded-xl"
              src="/2.gif"
              alt=""
              width={300}
              height={100}
            />
            <div>
              <Image
                className="rounded-xl"
                src="/8.jpg"
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
            />{" "}
            <Image
              className="rounded-xl"
              src="/9.jpg"
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
              src="/4.gif"
              alt=""
              width={300}
              height={100}
            />{" "}
            <Image
              className="rounded-xl"
              src="/6.jpg"
              alt=""
              width={300}
              height={100}
            />
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg mx-80">
          <h2 className="text-xl font-semibold">
            Waktu yang Telah Berlalu Sejak Pertama Kali Kita Bertemu pada 28
            September 2024
          </h2>
          <p className="text-lg">{elapsed}</p>

          <p className="mt-10 text-justify">
            Sejak pertama kali kita bertemu pada 28 September 2024, aku tidak
            pernah berpikir bahwa magang ini akan menjadi momen yang sangat
            berarti. Awalnya, aku hanya fokus pada tugas dan pekerjaan, tetapi
            tanpa sadar, perasaan mulai tumbuh setiap kali kita berbicara dan
            tertawa bersama. Sekarang aku menyadari bahwa kamu telah menjadi
            bagian penting dalam hidupku, dan aku sangat bersyukur telah
            mengenalmu {"<3"}
          </p>
        </div>
      </div>

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
          02 - Hal yang aku sukai tentangmu
        </p>
      </div>

      <div className="mx-40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {Things?.map((value, i) => (
          <div
            key={i}
            className="flex flex-col gap-2 bg-white py-2 px-10 rounded-lg min-h-20 justify-center"
          >
            <p className="flex items-center gap-2">
              {value.first}
              <br />
              {value.last}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2 bg-white py-2 px-10 rounded-full ">
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
          03 - Catatan Untukmu
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg mx-80 mb-10">
        <p className=" text-justify">
          Aku tahu tugas akhirmu sulit, tapi kamu lebih tangguh! 💪✨ Aku ingin
          mengingatkanmu bahwa tak peduli apa yang terjadi, aku selalu ada untuk
          mendukungmu. Semoga kita tetap kuat menghadapi tantangan bersama-sama.
          Jangan lupa jaga kesehatan dan tetap semangat! Setiap langkahmu
          membawa kita lebih dekat ke tujuan. 🤗
        </p>
      </div>
    </div>
  );
}
