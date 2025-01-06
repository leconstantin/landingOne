"use client";
import useLocalStorage from "@/features/Theme/useLocalStorage";
import React from "react";

export default function Slider() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  const handleChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <main
      className={`flex flex-col items-center justify-center min-h-screen ${
        theme === "light" ? "bg-white" : "bg-black"
      }`}
    >
      <div className="flex flex-col gap-10">
        <p className={theme === "dark" ? "text-white" : "text-black"}>
          Hello world
        </p>
        <button
          className="bg-black text-white px-4 py-2 rounded-xl hover:ring-2 ring-zinc-200 hover:scale-110 ease-in-out duration-300"
          onClick={handleChange}
        >
          Change Theme
        </button>
      </div>
    </main>
  );
}
