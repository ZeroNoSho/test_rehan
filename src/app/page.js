"use client";
import { useEffect, useState } from "react";
import Indo from "@/compenet/ind";
export default function Home() {
  const [language, setLanguage] = useState("in");
  return (
    <div className="flex flex-col items-center gap-8 pt-8 ">
 
 <Indo></Indo>
    </div>
  );
}
