import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import { wordsTodayData } from "./data/data";
import Loader from "./components/Loader";

function App() {
  const [wordsToday] = useState(wordsTodayData);
  const [resultWord, setResultWord] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const generateWords = () => {
    setIsLoading(true);
    setTimeout(() => {
      const results = wordsToday[Math.floor(Math.random() * wordsToday.length)];
      setResultWord(results);
      setIsLoading(false);
    }, 1000);
  };
  return (
    <>
      <div className="main h-screen bg-slate-900">
        {<Loader loading={isLoading} />}
        <div className="flex pt-32 mx-auto">
          <div className="w-full flex flex-col justify-center items-center">
            <h1 className="text-4xl text-slate-200 font-semibold text-center">
              Kata-Kata Hari ini 🔥 🔥
            </h1>
            <div className="mt-5">
              <Button text="Generate" handleClick={generateWords} />
            </div>
            <div className="mt-10 text-slate-100 font-bold text-center">
              {!isLoading && resultWord}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
