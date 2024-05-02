import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import { wordsTodayData } from "./data/data";
import Loader from "./components/Loader";

function App() {
  const [wordsToday] = useState(wordsTodayData);
  const [resultWord, setResultWord] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

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
              {!isLoading && loadingImage && (
                <>
                  <div className="m-5 lg:m-0 relative w-400 h-300 ">
                    <img
                      className="w-full h-full object-cover bg-red-500"
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
        </div>
      </div>
    </>
  );
}

export default App;
