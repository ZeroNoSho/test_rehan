"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Music from "../music";
export default function Indo() {
  const startDate = new Date("2023-01-25T00:00:00");
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
          years !== 0 ? years + " Tahun - " : ""
        }  ${months} Bulan - ${days} Hari - ${hours} Jam - ${minutes} Menit - ${seconds} Detik`
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
          Kunci yang kembali
        </h2>
        <div>
          <h2 className="text-md">Untuk: Prahersa Putra Alkautsar AD
          </h2>
          <h2 className="text-md"> </h2>
        </div>
      </div>
      <div className="flex flex-col gap-2 bg-white py-2 px-10 rounded-full">
        <p className="flex items-center gap-2">
          
          “PLAY MUSIC BEFORE SCROLL”
        </p>
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
          KAMU INGET INI ENGGA
        </p>
      </div>
      
      <div className="text-center flex flex-col items-center gap-8 ">
        <div className="flex gap-5 h-[1600px] overflow-hidden rounded-lg">
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
          <div className="flex flex-col gap-8">
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
            Time That Has Passed Since We First Met on Januari 25, 2023
          </h2>
          <p className="text-lg ">{elapsed}</p>

          <p className="mt-10 text-justify">
            Since the first time we met on Januari 25, 2023, Entah pagi siang,
            atau malam saat pesan ini tiba, semoga hatimu tenang dan langkahmu
            tetap dalam lindungan kasih semesta. lewat pesan ini, aku pamit. Aku
            melangkah pergi dari tempat yang dulu kusebut pulang, dan kunci yang
            sempat kujaga sepenuh hati telah kuletakkan kembali di depan
            pintumu, dengan segala hormat dan harap. Tentang pesanmu yang dulu
            tak pernah kubalas, izinkan aku menjawabnya di sini dengan hati yang
            pelan-pelan belajar menerima: “Kak Hersa, aku sudah memaafkanmu.
            Semoga waktu juga mengajarkanku memaafkan seluruh luka yang tak
            pernah sempat bernama. Tapi lebih dari itu... yang sesungguhnya
            harus lebih dulu meminta maaf adalah aku. Maaf karena tak selalu
            ada, saat sepi menusuk dadamu. Maaf karena jarak membuatmu harus
            bertahan dalam diam yang panjang. Maaf karena harapan kadang hanya
            kutawarkan, tanpa kepastian. Maaf karena aku tak mampu menjadi rumah
            yang bisa meneduhkanmu. Maaf karena pernah membuatmu bertahan, meski
            mungkin hatimu sudah ingin pergi. Namun satu hal yang tak pernah
            kutarik kembali: Aku bersyukur pernah mengenalmu. Aku bahagia pernah
            menjadi bagian dari kisahmu, walau tak sampai akhir. Kak Hersa
            Terima kasih karena pernah berjuang, bahkan saat semuanya tak mudah.
            Terima kasih telah menyayangiku dengan caramu yang mungkin tak
            selalu bisa kupahami, tapi tetap kurasakan. Terima kasih untuk tawa,
            luka, dan pelajaran hidup yang kita rangkai bersama. Terima kasih
            karena pernah memilih aku, walau akhirnya kita belajar melepaskan,
            bukan menggenggam lebih erat. Tak perlu ada balasan. Tak perlu ada
            temu yang dipaksakan hanya demi menyelesaikan yang telah usai. Tak
            perlu ada “sampai jumpa lagi” karena untuk beberapa kisah,
            perpisahan adalah satu-satunya cara mencintai tanpa menyakiti. Aku
            sungguh berharap, semesta menuntunmu pada kebahagiaan sejati. Pada
            seseorang yang bisa menjagamu, lebih baik daripada yang aku mampu.
            Semoga kamu menemukan seseorang yang bisa menjagamu dengan ketulusan
            yang lebih utuh. Seseorang yang bisa menggenggam tanganmu dengan
            tenang, tanpa ragu, tanpa jeda. Aku doakan yang terbaik untuk
            hidupmu, untuk cinta barumu, untuk semua hal yang indah di depan
            sana. Dengan segala rasa yang pernah tumbuh dan kini perlahan
            kulepaskan. Terimakasih sudah menyempatkan waktu untuk membaca ini.
            <br></br><br></br>Salam, 
            <br></br>Hanifah Cho”
        
          </p>
        </div>
      </div>
    </>
  );
}
