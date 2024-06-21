import { useState } from "react";
import Button from "./components/Button";
import { wordsTodayData } from "./data/data";
import Loader from "./components/Loader";

const KataHariIni = () => {
  const [wordsToday] = useState(wordsTodayData);
  const [resultWord, setResultWord] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const [input, setInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const generateWords = async () => {
    setIsLoading(true);
    setLoadingImage(false);
    setImageUrl("");
    setTimeout(() => {
      const results = wordsToday[Math.floor(Math.random() * wordsToday.length)];
      setResultWord(results);

      // Generate a new random image URL
      setImageUrl(`https://picsum.photos/500/300?random=${Math.random()}`);

      setIsLoading(false);
      setLoadingImage(true);
    }, 1000);
  };

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        {<Loader loading={isLoading} />}
        <h1 className="text-4xl text-slate-200 font-semibold text-center">
          Kata-Kata Hari ini 🔥 🔥
        </h1>
        <div className="mt-5 flex flex-col gap-5">
        <input onChange={handleInputChange} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text"/>
          <Button text="Cek kata buat kamu" handleClick={generateWords} />
        </div>
        <div className="mt-10 text-slate-100 font-bold text-center">
            {!isLoading && loadingImage && (
                <>
                 <span className="my-2">Kata kata buat: {input}</span>
                </>
            )}
          {!isLoading && loadingImage && (
            <>
              <div className="m-5 lg:m-0 relative w-400 h-300  ">
                
                <img
                  className="w-full h-full object-cover bg-red-500 mt-2"
                  src={imageUrl}
                  alt=""
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white text-lg lg:text-2xl font-bold">
                    {resultWord}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default KataHariIni;
