"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Ing from "@/compenet/ing/page";
import Indo from "@/compenet/ind";
export default function Home() {
  const [language, setLanguage] = useState("in");
  return (
    <div className="flex flex-col items-center gap-8 pt-8 ">
      <div className="ml-auto px-10 flex gap-4">
        {language === "id" ? "Bahasa" : "Language"} :
        <button
          className={`ml-auto ${language === "id" && "text-blue-800"} `}
          onClick={() => setLanguage("id")}
        >
          ID
        </button>
        /
        <button
          className={`ml-auto ${language === "in" && "text-blue-800"} `}
          onClick={() => setLanguage("in")}
        >
          IN
        </button>
      </div>
      {language === "id" ? <Indo></Indo> : <Ing></Ing>}
    </div>
  );
}
