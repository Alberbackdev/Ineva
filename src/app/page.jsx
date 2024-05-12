"use client";
import { useState } from "react";

function Home() {
  const [prompt, setPrompt] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(prompt);
  };

  return (
    <div className="bg-zinc-950 h-screen flex justify-center items-center">
      <form action="onSubmit">
        <input type="text" 
          placeholder="Ingrese la actividad a evaluar"
          onChange={(e) => setPrompt(e.target.value)} 
          className='p-4 block bg-neutral-700 text-white w-full rounded-lg'
        />
        <button className="bg-green-500 p-2 rounded-md block mt-2 text-white">
          Generate
        </button>
      </form>
    </div>
  );
}

export default Home;
